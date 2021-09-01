import react ,{ Component } from 'react'
import Layout from '../../../components/layout'
import { Button, Message } from 'semantic-ui-react'
import { Link } from '../../../routes'
import Campaign from '../../../ethereum/campaign'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import RequestRow from '../../../components/requestRow'
class RequestIndex extends Component {
    static async getInitialProps (props) {
        const {address} = props.query
        const campaign = Campaign(address)
        const requestCount = await campaign.methods.getRequestsCount().call()
        const approversCount = await campaign.methods.approversCount().call()
        
        let requestSendArry = []
        for (let index = 0; index < requestCount; index++) {
            requestSendArry.push(campaign.methods.requests(index).call())
            
        }
        
        const requests = await Promise.all(requestSendArry)
        
        return {
            address,
            requests,
            requestCount,
            approversCount
        }
    }
    renderRow(){
        return this.props.requests.map((elt,index) =>{
            return <RequestRow 
            key={index}    
            request={elt}
            address={this.props.address}
            id={index}    
            approversCount={this.props.approversCount}
            />
        })
    }
    render(){
        const {Header,Row,HeaderCell,Body} = Table
        return (
            <Layout>
                <h1> Requtests list</h1>
                
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <Button color="teal">Add request</Button>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Aprove</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                            <HeaderCell>Status</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table>
            </Layout>
        )
    }
}

export default RequestIndex