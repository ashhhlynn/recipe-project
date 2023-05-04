import React, { Component } from 'react'
import { Form, Grid, Button,  Segment, Input} from 'semantic-ui-react'
import Navbar from './Navbar'
import { connect } from "react-redux"
import axios from "axios";

class CreateRecipe extends Component {

state = {
    name: '',
    description: '',
    image_url: '',
    recipe_ingredients: [],
    ingredient: '',
    ingredientq:'',
}

addIngredient = (event, ingredient) => {
    event.preventDefault()

    this.state.recipe_ingredients.push(ingredient)
    console.log(this.state.recipe_ingredients)
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
                        <h2 style={{fontWeight:"normal", marginTop:"1.5%"}}>Create Recipe</h2>
                        <Form onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                        <Form.Button floated="right" inverted  style={{marginTop:"-8%", width:"80px", fontWeight:"normal", color:"white", backgroundColor:"teal"}}className="formButtons" content='Save'/>        

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
                           
                      <h3 style={{fontWeight:"normal"}}>Ingredients</h3>
                      

                        </Form>
                        <Form onSubmit= { (event) =>{this.addIngredient(event, this.state.ingredient)}}>
                 
                    <Form.Group>
                      <Form.Input
                            required
                            type="text"
                            id="ingredient"
                            placeholder="Ingredient"
                            value={this.state.ingredient} 
                            onChange={this.handleChange}
                            />
                                <Form.Input
                      
                            type="text"
                            id="ingredientq"
                            placeholder="Quantity"
                            value={this.state.ingredientq} 
                            onChange={this.handleChange}
                            />


                            <Form.Button >Add</Form.Button>
                            <Button>Remove</Button>
                            </Form.Group>
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
