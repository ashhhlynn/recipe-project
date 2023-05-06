import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios";
import { Form, Grid, Button,  Segment} from 'semantic-ui-react'
import Navbar from './Navbar'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event, userData)  => {
        event.preventDefault()

        axios
        .post("/api/v1/login", {  email: userData.email, password: userData.password})
        .then((response) => {
            if (response.message) {
                window.alert(response.message)
            }
            else {
          console.log(response)
          localStorage.token = response.jwt;
            }
    })


    }
    
    render() {
        return (
            <>          
                <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
            <Grid stackable columns={2} >
                <Grid.Column style={{width:"300px"}}> 
                    <Navbar/>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
                    <h1 style={{}}>Sign In</h1>
            <Form onSubmit={ (event) => { this.handleSubmit(event, this.state)}}>
                <Form.Input
                    required
                    id="email"
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                />               
                <Form.Input
                    required
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password} 
                    onChange={this.handleChange}
                /> 
                <Form.Button circular basic color="purple" content='Submit' />
            </Form>
            </Segment>
                
            </Grid.Column>
            </Grid>
         </Segment>
            </>
        )
    }
}



export default Login