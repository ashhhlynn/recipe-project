import React, { Component } from 'react'
import { Button, Grid, Segment, Card, Item, Header} from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import axios from "axios";
import Recipe from './Recipe'
import { fetchRecipes } from "./actions/rootActions"
import { fetchFavorites } from "./actions/rootActions"

import { sortAToZ } from "./actions/rootActions"
import { sortNumberReviews } from "./actions/rootActions"
import { sortDate } from "./actions/rootActions"
import { sortRating } from "./actions/rootActions"

class Recipes extends Component {        
    
  componentDidMount() {
    axios
    .get("api/v1/recipes.json")
      .then((response) => {
        this.props.fetchRecipes(response.data)
      })
    .catch((error) => console.log(error));
  }

  sortItems = (event) => {
    if (event.target.id === "1" ) { 
        this.props.sortRating()
    }
    else if (event.target.id === "2" ) { 
        this.props.sortDate()
    }
    else if (event.target.id === "3" ) { 
        this.props.sortAToZ()
    }
    else if (event.target.id === "4" ) { 
        this.props.sortNumberReviews()
    }
  }

  render() {
    const recipeGroup = this.props.recipes.map( r => {
      return (
        <Card key={r.id}>
          <Recipe recipe={r} key={r.id}/>
        </Card>    
      )
    })
    return (
      <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
        <Grid stackable columns={2} >
          <Grid.Column style={{width:"300px"}}> 
            <Navbar/>
          </Grid.Column>
          <Grid.Column>  
            <Item style={{width:"850px", marginLeft:"9%"}}> 
              <br></br>
              <Header style={{marginTop:"0%", marginLeft:"0%"}}>
                <Button id="3" circular onClick={(event)=>{this.sortItems(event)}}>Name</Button> 
                <Button id="2" circular onClick={(event)=>{this.sortItems(event)}}>Date</Button> 
                <Button id="1" circular onClick={(event)=>{this.sortItems(event)}}>Rating</Button> 
                <Button id="4" circular onClick={(event)=>{this.sortItems(event)}}>Reviews</Button> 
              </Header>  
          </Item>
            <Card.Group itemsPerRow={3}  style={{width:"890px",marginTop: "1%", marginLeft:"6.2%"}}>
              {recipeGroup}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    )     
  }
}

const mapStateToProps = (state) => {
  return { 
    recipes: state.recipes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    fetchRecipes: (recipes) =>  { dispatch(fetchRecipes(recipes)) }, 
    sortAToZ: () =>  { dispatch(sortAToZ()) },
    sortNumberReviews: () =>  { dispatch(sortNumberReviews()) },
    sortDate: () =>  { dispatch(sortDate()) },
    sortRating: () =>  { dispatch(sortRating()) },
    fetchFavorites: ( favorites) =>  { dispatch(fetchFavorites(favorites)) }, 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)