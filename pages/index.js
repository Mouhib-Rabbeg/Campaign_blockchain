import React, { Component } from 'react'
import { Card,Button } from 'semantic-ui-react'
import Layout from '../components/layout'
import factory from '../ethereum/factory'
import {Link} from '../routes'

class CampaignIndex extends Component {
    
    static async getInitialProps  (){
        const campaigns = await factory.methods.getDeployedContract().call()
        return {
            campaigns
        }
    }

    renderCampaigns () {
        const items = this.props.campaigns.map(elt => {
            return {
                header:elt,
                description:(
                    <Link route={`/campaigns/${elt}`}>
                        <a>
                            description
                        </a>
                    </Link>
                ),
                fluid:true
            }
        })

        return <Card.Group items={items} /> 
    }

    render(){
        return (
        <Layout>
            
            <h3>Open campaigns</h3>
            <Link route="campaigns/new">
            <a>
            <Button content='Add campaign' icon='add circle' labelPosition='left' color='green' floated="right"/>
            </a>
            
            </Link>
            {this.renderCampaigns()}
               
        </Layout>
        )  
    }
}


export default CampaignIndex ;



