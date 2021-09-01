const env = require('dotenv')
env.config({path:'../config.env'})


const Truffle = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const compiledFactory  = require('./build/CampaignFactory.json')




//set truffle account + specify what node to connect
const provider = new Truffle(
    "scene idea pioneer cover term man poet youth pilot praise output method",
    "https://rinkeby.infura.io/v3/271868cae9cd49a4bdc728af8fe72693"
)

const web3 = new Web3(provider)

const deploy = async () => {
    //get list of  accounts
    const accounts = await web3.eth.getAccounts();
    console.log("creating contract...")

   const contract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({
        data:compiledFactory.bytecode,
        
        
    }).send({
        gas:'1000000',
        from:accounts[0]
    })
    
    console.log('created and deployed to',contract.options.address)
}



deploy();