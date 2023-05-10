import React, { Component } from 'react'
import { Item, Icon, Image, Grid, Rating, Segment, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import RecipeReviews from './RecipeReviews'
import CreateReview from './CreateReview'

class RecipeInfo extends Component {
    state = {
        ratings: [],
        avg: 0
    }


    componentDidMount = () => {
        this.props.recipe.ratings.map(r => {

this.state.ratings.push(r.score)

        })
        console.log(this.state.ratings)
        const avg = this.state.ratings.reduce((a,b) => a + b,0) / this.state.ratings.length;
        console.log(avg)
        let x = Math.round(avg)
        console.log(x)
        this.setState({avg: x})

    }
    
    render() {
        let x = this.state.avg
        const { rating } = this.state.avg
        const recipe_ingredients = this.props.recipe.recipe_ingredients.map(ri => {
            return (
                <div>{ri.name}</div>
            )
        })
        return (         
        <center>
            <h1>{this.props.recipe.name}</h1>
            <Divider></Divider>
            <Grid vert stackable columns={2} >
            <Grid.Column > 
                <center>
                    <Image size="medium" src={this.props.recipe.image_url}></Image>
                </center>
            </Grid.Column>
            <Grid.Column>
            <center><br></br>
                <Item style={{marginRight:"17%"}}>
                <Rating size="massive" rating={this.state.avg} disabled defaultRating={x} maxRating={5} />

                    <h2>Ingredients</h2>
                    <h3 style={{fontWeight:"normal"}}> {recipe_ingredients}</h3>
                </Item>
            </center>
            </Grid.Column>
            </Grid>
            <br></br>
            <h2>Instructions</h2>
            <h3 style={{fontWeight:"normal"}}>{this.props.recipe.description}</h3><br></br>
            <Segment style={{marginLeft:"-2%", marginRight:"-2%"}} centered placeholder>
                <Grid stackable columns={2} >
                    <Grid.Column > 
                        <h2>Reviews</h2>
                        <RecipeReviews recipe={this.props.recipe} key={this.props.recipe.id}/>
                        <br></br><br></br>
                    </Grid.Column > 
                    <Grid.Column > 
                        <CreateReview recipe={this.props.recipe} key={this.props.recipe.id}/>
                    </Grid.Column > 
                </Grid>
            </Segment>
        </center>  
        )
    }
}

export default RecipeInfo