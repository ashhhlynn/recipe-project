import React, { Component } from 'react'
import { Item, Image, Grid, Rating, Segment, Divider} from 'semantic-ui-react'
import RecipeReviews from './RecipeReviews'
import CreateReview from './CreateReview'

class FavoriteInfo extends Component {

    state = {}

    componentDidMount = () => {     
        console.log(this.props.recipe)
    }
    
    render() {
        const recipe_ingredients = this.props.recipe.recipe_ingredients.map(ri => {
            return (
                <div>{ri.name}</div>
            )
        })
        return (         
            <center>
                <h1>{this.props.recipe.name}</h1>
                <Rating size="massive" rating={this.props.recipe.average} disabled maxRating={5} />
                <Divider></Divider>
                <Grid vert stackable columns={2} >
                    <Grid.Column > 
                        <center>
                            <Image size="medium" src={this.props.recipe.image_url}></Image>
                        </center>
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                            <Item style={{marginRight:"17%"}}>
                                <h2>Ingredients</h2>
                                <h3 style={{fontWeight:"normal"}}> {recipe_ingredients}</h3>
                                <h3 style={{fontWeight:"normal"}}>Instructions: {this.props.recipe.description}</h3><br></br>
                            </Item>
                        </center>
                    </Grid.Column>
                </Grid>
                <Segment style={{marginLeft:"-2%", marginRight:"-2%"}} placeholder>
                    <h2>Reviews</h2>
                    <RecipeReviews recipe={this.props.recipe} key={this.props.recipe.id}/>
                    <br></br>
                    <CreateReview recipe={this.props.recipe} key={this.props.recipe.id}/>
                    <br></br>
                </Segment>
            </center>  
        )
    }
}

export default FavoriteInfo