import React, { Component } from 'react'
import { Button, Modal, Divider, Grid, Icon, Header, Segment, Card} from 'semantic-ui-react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from "axios";
import Recipe from './Recipe'

class Profile extends Component {        

    constructor(props) {
        super(props);
        this.state = {
          recipes: [],
          reviews: []
        };
    }

    componentDidMount() {
      axios
        .get("api/v1/recipes.json")
        .then((response) => {
          console.log(response);
          this.setState({
            recipes: response.data,
          });
        })
        .catch((error) => console.log(error))
      axios
        .get("api/v1/reviews.json")
        .then((resp) => {
          console.log(resp);
          this.setState({
            reviews: resp.data,
          });
        })
        .catch((error) => console.log(error));
    }

    removeRecipe(id) {
        axios
          .delete(`/api/v1/recipes/id`)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => console.log(error));
    }

    removeReview(id) {
      axios
        .delete(`/api/v1/reviews/id`)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error));
  }

    render() {
        const recipeGroup = this.state.recipes.map( i => {
            return (
              <Card style={{textAlign: "left"}}>
                <img src= {i.image_url}/>
                <Header as="h3" style={{marginBottom:"-1%"}}>
                  {i.name}
                </Header> 
                <i style={{marginTop:"0%"}}>{i.description}</i>
                <Button onClick={this.removeRecipe(i.id)}>X</Button>
                <br></br><br></br>  
              </Card>
            )
          })
          const reviewGroup = this.state.reviews.map( i => {
            return (
              <div style={{textAlign: "left"}}>
                <Header as="h3" style={{marginBottom:"-1%"}}>
                  {i.text}
                </Header> 
                <Button onClick={this.removeReview(i.id)}>X</Button>
                <br></br><br></br>  
              </div>
            )
          })
        return (
            <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
              <Grid stackable columns={2} >
                <Grid.Column style={{width:"300px"}}> 
                    <Navbar/>
                </Grid.Column>
                <Grid.Column  style={{marginTop: "1%", marginLeft:"5%"}}>
                    <h2>Recipes</h2>
                    <Divider></Divider>
                    <Card.Group itemsPerRow={3} >
                     {recipeGroup}
                     </Card.Group>
                        <br></br>
                        <h2>Reviews</h2>
                        <Divider></Divider>
                        {reviewGroup}
                </Grid.Column>
            </Grid>
        </Segment>
        )     
    }
}



export default Profile