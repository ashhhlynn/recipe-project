import React, { Component } from 'react'
import { Icon, Form, Button, Rating, Label} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import Stars from './Stars'

class CreateReview extends Component {

    state = {
      
      
    }
    handleSubmit = (event, review) => {
        event.preventDefault()
        let i = this.props.recipe.id
        axios
        .post("/api/v1/reviews", { text: review.text, recipe_id: i})
        .then((response) => {
            console.log(response);
        })
        let x = this.state.stars
        axios
        .post("/api/v1/ratings", { score: x, recipe_id: i})
        .then((response) => {
            console.log(response);
        })
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    handleAdd = () => {
        let s = this.state.stars + 1
        console.log(s)
        this.setState ({
            stars: s
        })}
    
  
    
        handleRating = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {


        return (
            <>
            <center>          
                    
                <Form onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>


<Rating color="purple" size="massive" maxRating={5} onRate={this.handleRating} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>


                    <Form.TextArea
                            style={{width:"300px"}}
                            type="text"
                            id="text"
                            placeholder=""
                            value={this.state.text} 
                            onChange={this.handleChange}
                    />
                    <Form.Button basic color="purple" circular style={{width:"130px", fontWeight:"normal", color:"purple"}}className="formButtons" content='Submit'/>        
                </Form>   
            </center>
            </>
        )
    }
}

export default CreateReview