import web3 from './web3'
import campaignFactory from './build/CampaignFactory.json'


const contract = new web3.eth.Contract(JSON.parse(campaignFactory.interface),'0xDE9bDdbb532251b969845C9F53Fd1C7FbebDEF62')
export default contract