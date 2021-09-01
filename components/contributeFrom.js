import React,{Component} from 'react'
import web3 from '../ethereum/web3'
import { Button,Form,Input,Message } from 'semantic-ui-react'
import  Campaign from '../ethereum/campaign'
import { Router } from '../routes'
class ContributeForm extends Component {
    state = {
        contribution:'',
        errorMessage:"",
        loading:false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const campaign = Campaign(this.props.address)
       
        try{
            this.setState({errorMessage:""})
            this.setState({loading:true})
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.contribute()
            .send({
                from:accounts[0],
                value:web3.utils.toWei(this.state.contribution,'ether')
            })
            
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        }catch(error){
            this.setState({errorMessage:error.message})
            
        }
        this.setState({loading:false})
    }

    render (){
        return(
            <div>
                <h3> Contribute to this Campaign </h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribuate</label>
                    <Input 
                    value = {this.state.contribution}
                    label="ether" 
                    labelPosition="right" 
                    placeholder='Contribuation in ether' 
                    onChange={(event)=>this.setState({contribution:event.target.value})} />
                </Form.Field>
                <Message error header="Oops" content={this.state.errorMessage}></Message>
                <Button loading={this.state.loading} type='submit' color='green' >Contribute</Button> 
                
            </Form>
            </div>
                
            
        )

    }
}

export default ContributeForm ;