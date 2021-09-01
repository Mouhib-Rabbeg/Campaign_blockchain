// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.4.17 ;

contract CampaignFactory{
    address [] public deployedCampaigns ;
    
    function createCampaign(uint minimumContribution) public {
       address newCampaign =  new Campaign(minimumContribution,msg.sender);
       deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedContract() public view returns (address[]){
        return deployedCampaigns;
    }
     
}


contract Campaign {
    
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool ) approvals;
        
    }
    
    
    address public manager ;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount  ;
    Request[] public requests ;
    
    //modifiers
    modifier restrected(){
        require(msg.sender == manager);
        _;
    }
    
    
    function Campaign(uint minimum , address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    //payable
    function contribute() public payable {
        //value of transaction in wei
        require(msg.value > minimumContribution);
        //get the address of the approver 
        //approvers.push(msg.sender);
        approvers[msg.sender] = true ;
        approversCount++;
    }
    
    
    function createRequest(string description,uint value,address recipient) 
    public restrected {
        
        Request memory newReq =  Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalCount:0
        });
        
        requests.push(newReq);
        
    }
    
    function approveRequest(uint index) public {
        //use storage to ref the global value
        Request storage request = requests[index];
        
        //check if the voter already contribute to this campagne
        require(approvers[msg.sender]);
        //check if the voter already vote 
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true ;
        request.approvalCount++;
        
    }


    function finalizeRequest(uint index) public  restrected {
        Request storage request = requests[index];
        //check if nb vote yes is greater then no 
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        request.recipient.transfer(request.value);
        //this.balance = this.balance - request.value;
        request.complete = true;
        
    }
    function getSummary() public view returns(uint,uint,uint,uint,address){
            return (
                minimumContribution,
                this.balance,
                requests.length,
                approversCount,
                manager
            );
        }
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}