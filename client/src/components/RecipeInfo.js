import React, { Component } from 'react'
import { Icon, Menu, Form, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";

class RecipeInfo extends Component {
  
    state = {
        text: '',
        recipe_reviews: [],
        last_review: '',
        last_review_date:'05/04'
    }

    componentDidMount = () => {
this.props.recipe.reviews.map(r => 
    this.state.recipe_reviews.push(r.text)
    )
    console.log(this.state.recipe_reviews)

    }
    
handleSubmit = (event, review) => {
    event.preventDefault()
        
    this.setState({
        last_review: review.text,
    })
    let i = this.props.recipe.id
    axios
    .post("/api/v1/reviews", { text: review.text, recipe_id: i})
    .then((response) => {
      console.log(response);
   

})
}


    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    
    render() {

const recipe_ingredients = this.props.recipe.recipe_ingredients.map(ri =>
    {return(
        <div>{ri.name}</div>
    )}
    )

let x = this.state.last_review
let xi = this.state.last_review_date
        const reviews = this.props.recipe.reviews.map(r => {
            
            return(
                <div>"{r.text}" on {r.created_at}
                </div>
                )})
        return (
            <div>
                <center>
            <h1>{this.props.recipe.name}</h1><br></br>
            <img src={this.props.recipe.image_url}></img><br></br><br></br>
            {this.props.recipe.description}<br></br><br></br>
            <h2>Ingredients</h2>
            {recipe_ingredients}<br></br>
            <Divider></Divider><br></br>
            <h2>Reviews   </h2>
         
           
            {reviews}{x} on {xi}<br></br>
            <Form style={{width:"500px"}} onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                    <Form.Input
                            required
                            type="text"
                            id="text"
                            placeholder="text"
                            value={this.state.text} 
                            onChange={this.handleChange}
                            />
                <Form.Button inverted circular style={{width:"250px", fontWeight:"normal", color:"grey", backgroundColor:"#F0f0f0"}}className="formButtons" content='Submit Review'/>        
            </Form>
            </center>
            </div>
        )
    }
}


export default RecipeInfo