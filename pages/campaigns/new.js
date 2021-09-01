import React,{Component} from 'react'
import Layout from '../../components/layout';
import { Button,Form,Input,Message } from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'

class CampaignNew extends Component {
    state = {
        minimumContribution:'',
        errorMessage:"",
        loading:false
    }

    onSubmit = async (event) => {
        event.preventDefault();
       
        try{
            this.setState({errorMessage:""})
            this.setState({loading:true})
            const accounts = await web3.eth.getAccounts()
            await factory.methods.createCampaign(this.state.minimumContribution)
            .send({
                from:accounts[0]
            })
            Router.pushRoute('/')
        }catch(error){
            this.setState({errorMessage:error.message})
            
        }
        this.setState({loading:false})
    }

    render (){
        return(
            <Layout>
                <h3> Create a  Campaign </h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Minimum Contribuation</label>
                    <Input 
                    value = {this.state.minimumContribution}
                    label="wei" 
                    labelPosition="right" 
                    placeholder='Minimum Contribuation in wei' 
                    onChange={(event)=>this.setState({minimumContribution:event.target.value})} />
                </Form.Field>
                <Message error header="Oops" content={this.state.errorMessage}></Message>
                <Button loading={this.state.loading} type='submit' color='green' >Submit</Button> 
                
            </Form>
            </Layout>
        )

    }
}

export default CampaignNew ;