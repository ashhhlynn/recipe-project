import React, { Component } from 'react'
import { Form, Grid, Button,  Segment, Input} from 'semantic-ui-react'
import Navbar from './Navbar'
import { connect } from "react-redux"
import axios from "axios";

class CreateRecipe extends Component {

state = {
    id:'',
    name: '',
    description: '',
    image_url: '',
    recipe_ingredients: [],
    ingredients: [],

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
}

addIngredient = (event, ingredient) => {
    event.preventDefault()
let i = this.state.ingredient1
let q = this.state.quantity1
    axios 
    .post("/api/v1/recipe_ingredients", {name: i, quantity: q, recipe_id: 25})
    .then((response) => {
      console.log(response);
this.state.ingredients.push(response.data.id)
})
console.log(this.state.ingredients)
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
                        <Form.Button floated="right" inverted circular color="white" style={{marginTop:"-8%", width:"80px", fontWeight:"normal", color:"white", backgroundColor:"purple"}}className="formButtons" content='Save'/>        
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
                    </Form><br></br><center>
                    <Form onSubmit= { (event) =>{this.addIngredient(event, this.state.ingredient1)}}>
                        <Form.Group>
                            <Form.Input
                            required
                            type="text"
                            id="ingredient1"
                            placeholder="Ingredient"
                            value={this.state.ingredient1} 
                            onChange={this.handleChange}
                            />
                            <Form.Input             
                            type="text"
                            id="quantity1"
                            placeholder="Quantity"
                            value={this.state.quantity1} 
                            onChange={this.handleChange}
                            />
                            <Form.Button basic color="purple">+</Form.Button>
                            <Button id="1" onClick={this.removeIngredient} basic color="purple">-</Button>
                        </Form.Group>
                        </Form>
                        <Form onSubmit= { (event) =>{this.addIngredient(event, this.state.ingredient2)}}>
                        <Form.Group>
                            <Form.Input
                            required
                            type="text"
                            id="ingredient2"
                            placeholder="Ingredient"
                            value={this.state.ingredient2} 
                            onChange={this.handleChange}
                            />
                            <Form.Input             
                            type="text"
                            id="quantity2"
                            placeholder="Quantity"
                            value={this.state.quantity2} 
                            onChange={this.handleChange}
                            />
                            <Form.Button basic color="purple" >+</Form.Button>
                            <Button basic color="purple">-</Button>
                        </Form.Group>
                        </Form>
                        <Form onSubmit= { (event) =>{this.addIngredient(event, this.state.ingredient3)}}>

                        <Form.Group>
                            <Form.Input
                            required
                            type="text"
                            id="ingredient3"
                            placeholder="Ingredient"
                            value={this.state.ingredient3} 
                            onChange={this.handleChange}
                            />
                            <Form.Input             
                            type="text"
                            id="quantity3"
                            placeholder="Quantity"
                            value={this.state.quantity3} 
                            onChange={this.handleChange}
                            />
                            <Form.Button basic color="purple">+</Form.Button>
                            <Button basic color="purple">-</Button>
                        </Form.Group>
                        </Form>                        
                        <Form onSubmit= { (event) =>{this.addIngredient(event, this.state.ingredient4)}}>

                        <Form.Group>
                            <Form.Input
                            type="text"
                            id="ingredient4"
                            placeholder="Ingredient"
                            value={this.state.ingredient4} 
                            onChange={this.handleChange}
                            />
                            <Form.Input             
                            type="text"
                            id="quantity4"
                            placeholder="Quantity"
                            value={this.state.quantity4} 
                            onChange={this.handleChange}
                            />
                            <Form.Button basic color="purple">+</Form.Button>
                            <Button basic color="purple">-</Button>
                        </Form.Group>
                        </Form>
                        <center>
                        <Form onSubmit= { (event) =>{this.addIngredient(event, this.state.ingredient5)}}>
                      
                        <Form.Group>
                            <Form.Input
                            type="text"
                            id="ingredient5"
                            placeholder="Ingredient"
                            value={this.state.ingredient5} 
                            onChange={this.handleChange}
                            />
                            <Form.Input             
                            type="text"
                            id="quantity5"
                            placeholder="Quantity"
                            value={this.state.quantity5} 
                            onChange={this.handleChange}
                            />
                            <Form.Button basic color="purple">+</Form.Button>
                            <Button basic color="purple">-</Button>
                        </Form.Group>
                     
                    </Form>      </center>   </center>
                    <br></br>
                </Segment>           
            </Grid.Column>
        </Grid>
        </Segment>
    )
}
}

export default CreateRecipe
