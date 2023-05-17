import React, { Component } from 'react'
import { Form, Rating } from 'semantic-ui-react'
import { connect } from "react-redux"
import axios from "axios";
import { updateRR } from "./actions/rootActions"

class CreateReview extends Component {

    state = {}

    calculateAverage = (number) => {
        let reviews = this.props.recipe.reviews.map(r => r.score)
        reviews.push(number)
        const avg = reviews.reduce((a,b) => a + b, 0) / reviews.length;
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
            this.props.updateRR(response.data)
        });
    }

    handlePatchAverage = (x) => {
        let id = this.props.recipe.id
        axios
        .put("/api/v1/recipes/" + id, {
            average: x
        })
        .then((response) => {
            console.log(response.data);
            this.props.updateRR(response.data)
        });
    }

    handleSubmitRating = (event, number) => {
        event.preventDefault()
        let i = this.props.recipe.id
        let n = this.props.recipe.reviews.length
        let x = Math.round((this.props.recipe.average*n + number.rating)/(n+1))
        console.log(x)
        axios
        .post("/api/v1/reviews", { score: number.rating, recipe_id: i, text: number.text})
        .then((response) => {
            console.log(response.data)
            window.alert("Review submitted.")
            this.handlePatchAverage(x)
        })
    }

    handleChange = (event) => {
        this.setState ({
            text: event.target.value
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
                    <Form.TextArea
                            style={{width:"300px"}}
                            type="text"
                            id="text"
                            placeholder=""
                            value={this.state.text} 
                            onChange={this.handleChange}
                    />
                    <Form.Button circular style={{width:"130px", color:"white", fontWeight:"normal"}}className="formButtons" content='Submit'/>        
                </Form>   
            </center>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      updateRR: (recipe) =>  { dispatch(updateRR(recipe)) }, 
    }
}

export default connect(null, mapDispatchToProps)(CreateReview)