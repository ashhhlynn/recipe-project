import React, { Component } from "react"
import axios from "axios";
import { Form, Grid, Button,  Segment} from 'semantic-ui-react'
import Navbar from './Navbar'

class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleSubmit = (event, userData) => {
        event.preventDefault()
        axios
        .post("/api/v1/users", { username: userData.username, email: userData.email, password: userData.password, password_confirmation: userData.password_confirmation})
        .then((response) => {
          console.log(response)
          localStorage.token = response.jwt;
    })
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
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
            <h2 style={{fontWeight:"normal"}}>Register</h2>
            <Form onSubmit={ (event) => {this.handleSubmit(event, this.state)} }>              
                <Form.Input
                    required
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={this.state.username} 
                    onChange={this.handleChange}            
                />
                <Form.Input
                    required
                    type="text"
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
                <Form.Input
                    required
                    id="password_confirmation"
                    placeholder="Confirm Password"
                    type="password"
                    value={this.state.password_confirmation} 
                    onChange={this.handleChange}
                />
                <Form.Button content="Submit"/>
            </Form>

            </Segment>
                
                </Grid.Column>
                </Grid>
             </Segment>
            </>
        )
    }
}



export default Signup