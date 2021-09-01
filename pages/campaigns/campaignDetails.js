import React,{Component} from 'react'
import Layout from '../../components/layout';
import { Card,Grid,Button } from 'semantic-ui-react'
import Campaign from '../../ethereum/campaign'
import ContributeFrom from '../../components/contributeFrom';
import web3 from '../../ethereum/web3'
import { Link } from '../../routes'

class CampaignNew extends Component {
   
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address)
        const summary = await campaign.methods.getSummary().call()
        
        
        return {
            minimumContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            approversCount:summary[3],
            manager:summary[4],
            address:props.query.address
        }
    }
    renderCard(){
        const {
            minimumContribution,
            balance,
            requestsCount,
            approversCount,
            manager 
        } = this.props
        
        const items = [
            {
                header: manager,
                description:'The manager created this campaign and can requests to withdraw money',
                meta: 'Manager address',
                style:{overflowWrap:'break-word'}
            },
            {
                header: web3.utils.fromWei(balance,"ether"),
                description:'The amount of money contributed to this campaign',
                meta: 'Campaign balance',
                style:{overflowWrap:'break-word'}
            },
            {
                header: minimumContribution,
                description:'You must at least contributed this much wei to this compaign',
                meta: 'Minimum contribution in (wei)',
                style:{overflowWrap:'break-word'}
            },
            {
                header: requestsCount,
                description:'A request to withdraw money from compaign',
                meta: 'Number of withdraw requestes',
                style:{overflowWrap:'break-word'}
            },
            {
                header: approversCount,
                description:'Number of approvers to withdraw money from the campaign',
                meta: 'Number of approvers ',
                style:{overflowWrap:'break-word'}
            },
            
        ]
        return <Card.Group items={items}/>
    }
    render (){
        return(
            <Layout>
                <Grid>
                    <Grid.Row>

                    <Grid.Column width={10}>
                        {this.renderCard()}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ContributeFrom address={this.props.address}></ContributeFrom>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                        <Button  type='button' color='teal' >View requestes</Button> 
                        </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
               
               
            </Layout>
        )

    }
}

export default CampaignNew ;