import React, { Component } from 'react'
import { Item, Icon, Image, Grid, Form, Segment, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import RecipeReviews from './RecipeReviews'
import CreateReview from './CreateReview'

class RecipeInfo extends Component {
  

    render() {
        const recipe_ingredients = this.props.recipe.recipe_ingredients.map(ri => {
            return (
                <div>{ri.name}</div>
            )
        })
        return (
            <div><center>
             <h1>{this.props.recipe.name}</h1>  <Divider></Divider>
     <Grid vert stackable columns={2} >
          <Grid.Column > 
          <center>
          <Image size="medium" src={this.props.recipe.image_url}></Image>
          </center>
          </Grid.Column>
          <Grid.Column>
          <center><Item style={{marginRight:"17%"}}>
            <br></br>
          <Icon size="big" color="purple" name="star "/>
          <Icon size="big" color="purple" name="star "/>
          <Icon size="big" color="purple"  name="star "/>
          <Icon size="big" color="purple" name="star outline"/>
          <Icon size="big" color="purple" name="star outline"/>
          <h2>Ingredients</h2>
              <h3 style={{fontWeight:"normal"}}> {recipe_ingredients}</h3></Item>
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
            </div>
        )
    }
}

export default RecipeInfo