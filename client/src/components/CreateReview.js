import React, { Component } from 'react'
import { Icon, Form, Button, Rating, Label} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import Stars from './Stars'

class CreateReview extends Component {

    state = {
    }

    calculateAverage = () => {
        let reviews = this.props.recipe.reviews.map(r => r.score)
        console.log(reviews)
        const avg = reviews.reduce((a,b) => a + b,0) / reviews.length;
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
        axios
        .post("/api/v1/reviews", { score: number.rating, recipe_id: i})
        .then((response) => {
            console.log(response);
            this.calculateAverage()
        })

    }



    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }


    
        handleRating = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {


        return (
            <>
            <center>          
                    
                <Form onSubmit= { (event) => {this.handleSubmitRating(event, this.state)}}>


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