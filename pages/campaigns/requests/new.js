import react , { Component } from 'react'
import {Form, button,Message,Input, Button} from 'semantic-ui-react'
import Layout from '../../../components/layout'

import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import { Router , Link } from '../../../routes'
class NewRequest extends Component{
    state = {
        value:'',
        description:'',
        recipient:'',
        errorMessage:"",
        loading:false

    }
    static async getInitialProps(props){
        const {address} = props.query
        console.log(address)
        return {address}
    }


    onSubmit = async (event) => {
        event.preventDefault();
        const {value,description,recipient} = this.state
        const campaign = Campaign(this.props.address)
        
        try {
            this.setState({errorMessage:""})
            this.setState({loading:true})
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value,'ether')
                ,recipient
                ).send({
                    from:accounts[0]
                })
                
                Router.pushRoute(`/campaigns/${this.props.address}/requests`)
        } catch (error) {
            this.setState({errorMessage:error.message})
        }
        this.setState({loading:false})
    }

    render(){
        return (
            <Layout>
                <h3>Create Request </h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                    value={this.state.description}
                    onChange={event=> this.setState({description:event.target.value})}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value</label>
                    <Input
                    value={this.state.value}
                    onChange={event=> this.setState({value:event.target.value})}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Recipiant</label>
                    <Input 
                    value={this.state.recipient}
                    onChange={event=> this.setState({recipient:event.target.value})}
                    />
                </Form.Field>
                <Message error header="Oops" content={this.state.errorMessage}></Message>
                <Button primary loading={this.state.loading}>Create request</Button>
                
            </Form>
            </Layout>
            
        )
    }
}

export default NewRequest