const assert = require('assert')
const ganache = require('ganache-cli');
const Web3 = require('web3')


const web3 = new Web3(ganache.provider())

const compiledFactoryContract = require('../ethereum/build/CampaignFactory.json')
const compiledCampaignContract = require('../ethereum/build/Campaign.json')

let accounts ;
let factoryContract;
let campaignAddress ; 
let campaign ;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();

    factoryContract = await new web3.eth.Contract(JSON.parse(compiledFactoryContract.interface))
    .deploy({
        data:compiledFactoryContract.bytecode
    })
    .send({
        from:accounts[0],
        gas:"1000000"
    })

     await factoryContract.methods.createCampaign(0).send(
       {
        from:accounts[0],
        gas:'1000000'
       }
    );
    [campaignAddress] = await factoryContract.methods.getDeployedContract().call()
    
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaignContract.interface),
        campaignAddress
    )

})
describe('factory contract',()=>{
    it('deploys a contract',()=>{
       assert.ok(factoryContract.options.address)
    })
    it('create campaign',()=>{
        assert.ok(campaign.options.address)
    })
    it('caller is the campaign manager',async()=>{
        const adr = await campaign.methods.manager().call()
        assert.strictEqual(adr,accounts[0])
    })
    it('contribute money',async ()=>{
        await campaign.methods.contribute().send({
            from:accounts[1],
            value:'2000'
        })
        const contributor = await campaign.methods.approvers(accounts[1]).call()
        assert.strictEqual(contributor,true)
    })
})
