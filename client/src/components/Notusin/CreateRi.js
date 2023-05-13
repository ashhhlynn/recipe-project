import React, { Component } from 'react'
import { Form, Grid, Button, Step, Segment, Icon, Item, Input, Accordion} from 'semantic-ui-react'
import Navbar from '../Navbar'
import { connect } from "react-redux"
import axios from "axios";
import { Link } from 'react-router-dom'

class CreateRecipe extends Component {

state = {
    id:'',
    name: '',
    description: '',
    image_url: '',
    ingredients: [
        {
            name: "",
            quantity: ""}
        ],
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
    let id = this.state.id
    axios 
    .post("/api/v1/recipe_ingredients", {name: i, quantity: q, recipe_id: id})
    .then((response) => {
      console.log(response);
    })

    this.state.ingredients.push({name: i, quantity: q})
    console.log(this.state.ingredients)
}

removeIngredient = () => {

}


addIngredientTwo = (event, ingredient) => {
    event.preventDefault()
let i = this.state.ingredient2
let q = this.state.quantity2
let id = this.state.id
    axios 
    .post("/api/v1/recipe_ingredients", {name: i, quantity: q, recipe_id: id})
    .then((response) => {
      console.log(response);
})
}


addIngredientThree = (event, ingredient) => {
    event.preventDefault()
let i = this.state.ingredient3
let q = this.state.quantity3
let id = this.state.id
    axios 
    .post("/api/v1/recipe_ingredients", {name: i, quantity: q, recipe_id: id})
    .then((response) => {
      console.log(response);
})
}


addIngredientFour = (event, ingredient) => {
    event.preventDefault()
let i = this.state.ingredient4
let q = this.state.quantity4
let id = this.state.id
    axios 
    .post("/api/v1/recipe_ingredients", {name: i, quantity: q, recipe_id: id})
    .then((response) => {
      console.log(response);
})
}


addIngredientFive = (event, ingredient) => {
    event.preventDefault()
let i = this.state.ingredient5
let q = this.state.quantity5
let id = this.state.id
    axios 
    .post("/api/v1/recipe_ingredients", {name: i, quantity: q, recipe_id: id})
    .then((response) => {
      console.log(response);
})
}

handleChange = (event) => {
    this.setState ({
        [event.target.id]: event.target.value
    })
}


handleSubmit = (event, recipe) => {
    event.preventDefault()
    axios
    .post("/api/v1/recipes", { name: recipe.name, description: recipe.description, image_url: recipe.image_url})
    .then((response) => {
      console.log(response);
      this.setState ({
       id: response.data.id
    })
    console.log(this.state.id)
})}


handleSubmitTwo = (event, recipe) => {
    event.preventDefault()
    let ingredients = this.state.ingredients
    console.log(this.state.ingredients)
    axios
    .post("/api/v1/recipes", { name: recipe.name, description: recipe.description, image_url: recipe.image_url, recipe_ingredients: ingredients})
    .then((response) => {
      console.log(response);
      this.setState ({
       id: response.data.id
    })
    console.log(this.state.id)
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

                        <Step.Group>
    <Step link>

      <Step.Content>
        <Step.Title>Recipe</Step.Title>
        <Step.Description>Enter basic information</Step.Description>
      </Step.Content>
  
    </Step>
    <Step link>
    <Link to ="/createingredients">
      <Step.Content>
   
        <Step.Title>Ingredients</Step.Title>
        <Step.Description>Enter five ingredients</Step.Description>
      </Step.Content>
      </Link>
    </Step>
  </Step.Group>
                        <Form onSubmit= { (event) => {this.handleSubmitTwo(event, this.state)}}>
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
                        <Form.Button  basic circular color="purple" style={{fontWeight:"normal"}}className="formButtons">
                      Save
</Form.Button>
            
                    </Form><br></br><center>


                    <h2 >Ingredients</h2>
                        <Item style={{marginLeft: "6.5%"}}>
                   
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
                        <Form onSubmit= { (event) =>{this.addIngredientTwo(event, this.state.ingredient2)}}>
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
                        <Form onSubmit= { (event) =>{this.addIngredientThree(event, this.state.ingredien3)}}>

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
                        <Form onSubmit= { (event) =>{this.addIngredientFour(event, this.state.ingredient4)}}>

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
                        <Form onSubmit= { (event) =>{this.addIngredientFive(event, this.state.ingredient5)}}>
                      
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

                    </Form>    </center> </Item> 
                    
                    <Form.Button inverted circular color="white" style={{marginTop:"-8%", width:"80px", fontWeight:"normal", color:"white", backgroundColor:"purple"}}className="formButtons" content='Save'/>        

                 
 </center>
                    <br></br>
                </Segment>           
            </Grid.Column>
        </Grid>
        </Segment>
    )
}
}

export default CreateRecipe
