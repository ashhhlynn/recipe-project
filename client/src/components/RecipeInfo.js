import React, { Component } from 'react'
import { Item, Icon, Image, Grid, Form, Segment, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";

class RecipeInfo extends Component {
  
    state = {
        text: '',
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
       
        const reviews = this.props.recipe.reviews.map(r => {           
            return(
                <div>
                    "{r.text}" <b>by user9</b> {r.created_at.substring(0, 10)}<br></br><br></br>
                </div>
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

                {reviews}<br></br><br></br>
                </Grid.Column > 
                <Grid.Column > 

                <center>
                <Form onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                <Icon size="big" color="purple" name="star outline"/>
          <Icon size="big" color="purple" name="star outline"/>
          <Icon size="big" color="purple"  name="star outline"/>
          <Icon size="big" color="purple" name="star outline"/>
          <Icon size="big" color="purple" name="star outline"/><br></br><br></br><br></br>
                   <Form.TextArea
                   style={{width:"300px"}}
                            required
                        
                            type="text"
                            id="text"
                            placeholder=""
                            value={this.state.text} 
                            onChange={this.handleChange}
                    />
                <Form.Button basic color="purple" circular style={{width:"130px", fontWeight:"normal", color:"purple"}}className="formButtons" content='Submit'/>        
            
                </Form>   </center>
                </Grid.Column > 
</Grid>
             
                </Segment>
                </center>
             
            </div>
        )
    }
}

export default RecipeInfo