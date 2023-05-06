import React, { Component } from 'react'
import { Icon,Image, Menu, Form, Segment, Divider} from 'semantic-ui-react'
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
        const recipe_ingredients = this.props.recipe.recipe_ingredients.map(ri => {
            return (
                <div>{ri.name}</div>
            )
        })
        let x = this.state.last_review
        let xi = this.state.last_review_date
        const reviews = this.props.recipe.reviews.map(r => {           
            return(
                <div>
                    "{r.text}" on {r.created_at}<br></br><br></br>
                </div>
            )
        })
        return (
            <div>
                <center>
                <Image size="large" src={this.props.recipe.image_url}></Image>
              
                <br></br><br></br>
                <h2>{this.props.recipe.name}</h2>  <Divider></Divider>
                <h3>Instructions</h3>
                {this.props.recipe.description}<br></br>
                <h3>Ingredients</h3>
                {recipe_ingredients}<br></br>
               <br></br>
                <Segment style={{marginLeft:"-2.4%", marginRight:"-5"}} centered placeholder>
                {reviews}{x} on {xi}<br></br><br></br>
                <Divider></Divider>
                <Form centered style={{textAlign: "center", position: "center", width:"500px"}} onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                   <center>
                   <Form.Input
                            required
                            type="text"
                            id="text"
                            placeholder="Review"
                            value={this.state.text} 
                            onChange={this.handleChange}
                    />
                <Form.Button basic color="purple" circular style={{width:"130px", fontWeight:"normal", color:"purple"}}className="formButtons" content='Submit'/>        
                </center> 
                </Form>
                </Segment>
                </center>
            </div>
        )
    }
}

export default RecipeInfo