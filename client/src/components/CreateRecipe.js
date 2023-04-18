import React, { Component } from 'react'
import { Form, Grid, Button,  Segment} from 'semantic-ui-react'
import Navbar from './Navbar'
import { connect } from "react-redux"
import axios from "axios";

class CreateRecipe extends Component {

state = {
    name: '',
    description: '',
    image_url: '',
   
}

handleChange = (event) => {
    this.setState ({
        [event.target.id]: event.target.value
    })
}


handleSubmit = (event, habit) => {
    event.preventDefault()
    let currentUser = this.props.currentUser.id
    this.props.createHabit(habit, currentUser)
}

render() {
    return ( 
        <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
            <Grid stackable columns={2} >
                <Grid.Column style={{width:"300px"}}> 
                    <Navbar/>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
                        <h2 style={{fontWeight:"normal", marginTop:"1.5%"}}>Create Recipe</h2>
                        <Form onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                            <Form.Input
                            required
                            type="text"
                            id="name"
                            placeholder="name"
                            value={this.state.name} 
                            onChange={this.handleChange}
                            />
                                   <Form.Input
                            required
                            type="text"
                            id="image_url"
                            placeholder="image_url"
                            value={this.state.image_url} 
                            onChange={this.handleChange}
                            />
                            <Form.TextArea
                            required
                            type="text"
                            id="description"
                            placeholder="Description"
                            value={this.state.description} 
                            onChange={this.handleChange}
                            />
                           
                      
                            <br></br><br></br>
                            <Form.Button inverted style={{width:"250px", fontWeight:"normal", color:"white", backgroundColor:"#585858"}}className="formButtons" content='SAVE RECIPE'/>        
                        </Form>
                        <br></br>
                    </Segment>           
                </Grid.Column>
            </Grid>
        </Segment>
    )
}
}
export default CreateRecipe
