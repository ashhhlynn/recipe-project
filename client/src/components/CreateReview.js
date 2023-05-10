import React, { Component } from 'react'
import { Icon, Form, Button, Rating, Label} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";

class CreateReview extends Component {

    state = {
    }

    calculateAverage = (number) => {
        let reviews = this.props.recipe.reviews.map(r => r.score)
        reviews.push(number)
        console.log(reviews)
        const avg = reviews.reduce((a,b) => a + b, 0) / reviews.length + 1;
        console.log(avg)
        let x = Math.round(avg)
        console.log(x)
        let id = this.props.recipe.id
        axios
        .put("/api/v1/recipes/" + id, {
            average: x
        })
        .then((response) => {
        console.log(response.data);
        });
    }

    handleSubmitRating = (event, number) => {
        event.preventDefault()
        let i = this.props.recipe.id
        console.log(number.rating)
        console.log(number.text)
        axios
        .post("/api/v1/reviews", { score: number.rating, recipe_id: i, text: number.text})
        .then((response) => {
            console.log(response);
            this.calculateAverage(number.rating)
        })
    }

    handleChange = (event) => {
        this.setState ({
            text: event.target.value
        })
        console.log(this.state.text)
    }


    
    handleRating = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {
        return (
            <>
            <center>                
                <Form onSubmit= { (event) => {this.handleSubmitRating(event, this.state)}}>
                    <Rating color="purple" size="massive" maxRating={5} onRate={this.handleRating} />
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