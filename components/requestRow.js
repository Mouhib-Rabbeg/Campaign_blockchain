import react,{Component} from 'react'
import {Table,Button} from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign' 
import {Router} from '../routes'
class RequestRow extends Component {
    state = {
        loadingApprove:false,
        loadingFinalize:false,
        errorMessage:""
    }
    onApprove = async () =>{
        this.setState({loadingApprove:true})
        const campaign = Campaign(this.props.address)
        try{
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.approveRequest(this.props.id).send({
                from:accounts[0]
            })
            Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
        }catch(err){
            this.setState({errorMessage:err.message})
            alert(this.state.errorMessage)
        }
        this.setState({loadingApprove:false})
    }
    onFinalize =async ()=>{
        this.setState({loadingFinalize:true})
        const campaign = Campaign(this.props.address)
        try{
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.finalizeRequest(this.props.id).send({
                from:accounts[0]
            })
            Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
        }catch(err){
            this.setState({errorMessage:err.message})
            alert(this.state.errorMessage)
        }
        this.setState({loadingFinalize:false})
    }
    render (){
        const {Row,Cell} = Table
        return (
            <Row disabled={this.props.request.complete}>
                <Cell>{this.props.id}</Cell>
                <Cell>{this.props.request.description}</Cell>
                <Cell>{web3.utils.fromWei(this.props.request.value,'ether')} (ETH)</Cell>
                <Cell>{this.props.request.recipient}</Cell>
                <Cell>{this.props.request.approvalCount}/{this.props.approversCount}</Cell>
                <Cell><Button loading={this.state.loadingApprove} color="green" basic onClick={this.onApprove} >Approve</Button></Cell>
                <Cell><Button loading={this.state.loadingFinalize} color="teal" onClick={this.onFinalize} >Finalize</Button></Cell>
                <Cell>{this.props.request.complete ? <Button icon='check circle' color="green"/> : <Button content="running" disabled/> }</Cell>
            </Row>
            
        )
    }
}

export default RequestRow