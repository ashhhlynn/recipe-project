import React, { Component } from 'react'
import { Form, Grid, Button,  Segment, Item, Input} from 'semantic-ui-react'
import Navbar from './Navbar'
import { connect } from "react-redux"
import axios from "axios";
import { Link } from 'react-router-dom'

class CreateRecipe extends Component {

state = {
    id:'',
    name: '',
    description: '',
    image_url: '',
    ingredient1: '',
    quantity1:'',
    ingredient2: '',
    quantity2:'',
    ingredient3: '',
    quantity3:'',
    ingredient4: '',
    quantity4:'',
    ingredient5: '',
    quantity5:'',
    recipe_ingredients: []
}

addIngredient = (event, ingredient) => {
    event.preventDefault()
    this.state.recipe_ingredients.push(ingredient)
}

removeIngredient = () => {

}

handleChange = (event) => {
    this.setState ({
        [event.target.id]: event.target.value
    })
}


handleSubmit = (event, recipe) => {
    event.preventDefault()
    axios
    .post("/api/v1/recipes", { name: recipe.name, description: recipe.description, image_url: recipe.image_url, recipe_ingredients: recipe.recipe_ingredients})
    .then((response) => {
      console.log(response);
})}

render() {
    return ( 
        <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
            <Grid stackable columns={2} >
                <Grid.Column style={{width:"300px"}}> 
                    <Navbar/>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
                        <h1 style={{ marginTop:"1.5%"}}>Share Recipe</h1>
                        <Form onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                            <Form.Input
                            required
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={this.handleChange}
                            />
                            <Form.Input
                            required
                            type="text"
                            id="image_url"
                            placeholder="Image URL"
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
                        <h2 >Ingredients</h2>
                    <br></br><center>
                        <Item style={{marginLeft: "30%"}}>
                        <Form.Group>
                            <Form.Input
                            required
                            type="text"
                            id="ingredient1"
                            placeholder="Ingredient"
                            value={this.state.ingredient1} 
                            onChange={this.handleChange}
                            />
                     
                            <Button id="1" basic color="grey" onClick={this.addIngredient} >+</Button>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                            required
                            type="text"
                            id="ingredient2"
                            placeholder="Ingredient"
                            value={this.state.ingredient2} 
                            onChange={this.handleChange}
                            />
                      
                                    <Button id="1" basic color="grey" onClick={this.addIngredient} >+</Button>
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                            required
                            type="text"
                            id="ingredient3"
                            placeholder="Ingredient"
                            value={this.state.ingredient3} 
                            onChange={this.handleChange}
                            />
                      
                                   <Button id="1" basic color="grey" onClick={this.addIngredient} >+</Button>
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                            type="text"
                            id="ingredient4"
                            placeholder="Ingredient"
                            value={this.state.ingredient4} 
                            onChange={this.handleChange}
                            />
                    
                                <Button id="1" basic color="grey" onClick={this.addIngredient} >+</Button>
                        </Form.Group>
                        <center>
                      
                        <Form.Group>
                            <Form.Input
                            type="text"
                            id="ingredient5"
                            placeholder="Ingredient"
                            value={this.state.ingredient5} 
                            onChange={this.handleChange}
                            />
                       
                                  <Button id="1" basic color="grey"  onClick={this.addIngredient} >+</Button>
                        </Form.Group>
                     
                   </center> </Item> 
                   
                   <Form.Button circular  style={{marginTop:"5%",  fontWeight:"normal"}}size="large" className="formButtons" content='Save Recipe'/>        

                       </center>
                    <br></br>
                    </Form> 
                </Segment>           
            </Grid.Column>
        </Grid>
        </Segment>
    )
}
}

export default CreateRecipe
