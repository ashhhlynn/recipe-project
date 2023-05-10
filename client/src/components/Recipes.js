import React, { Component } from 'react'
import { Button, Dropdown, Grid, Segment, Card, Item, Header} from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import axios from "axios";
import Recipe from './Recipe'
import { fetchRecipes } from "./actions/rootActions"
import { sortAToZ } from "./actions/rootActions"
import { sortNumberReviews } from "./actions/rootActions"
import { sortDate } from "./actions/rootActions"
import { filterIngredient } from "./actions/rootActions"
import { sortRating } from "./actions/rootActions"

class Recipes extends Component {        

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe_ingredients: [],
      filter:[]
    };
  }
    
  componentDidMount() {
    axios
    .get("api/v1/recipes.json")
      .then((response) => {
          console.log(response);
          this.props.fetchRecipes(response.data)
      })
    .catch((error) => console.log(error));

    axios
    .get("api/v1/recipe_ingredients.json")
      .then((response) => {
          console.log(response);
          this.setState({
            recipe_ingredients: response.data,
          });
      })
    .catch((error) => console.log(error));
  }

  sortItems = (event) => {
    console.log(event.target.id)
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
    const recipeGroup = this.props.recipes.map( i => {
      return (
        <Card >
          <Recipe recipe={i} key={i.id}/>
        </Card>    
      )
    })
    const riGroup = this.state.recipe_ingredients.map( i => {
      return (
        <div>
         {i.name}
        </div>
      )
    })
    return (
      <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
        <Grid stackable columns={2} >
          <Grid.Column style={{width:"300px"}}> 
            <Navbar/>
          </Grid.Column>
          <Grid.Column>        
          <Item style={{width:"850px", marginLeft:"3.5%"}}>
            <br></br>
            <Header floated="right" style={{marginTop:"0%"}}>
            <Button id="3"circular basic color="purple" onClick={(event)=>{this.sortItems(event)}}>Name</Button> 
            <Button id="2"circular basic color="purple" onClick={(event)=>{this.sortItems(event)}}>Date</Button> 
            <Button id="1"circular basic color="purple" onClick={(event)=>{this.sortItems(event)}}>Rating</Button> 
            <Button id="4"circular basic color="purple" onClick={(event)=>{this.sortItems(event)}}>Reviews</Button> 
            </Header>  
            <Dropdown
            placeholder='Filter by Ingredient'
            style={{minWidth:"350px"}}
            compact
            selection
            size="tiny"
            options={riGroup}
            /> 
          </Item>
            <Card.Group itemsPerRow={3}  style={{width:"890px",marginTop: "1%", marginLeft:"5%"}}>
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
    filterIngredient: () =>  { dispatch(filterIngredient()) },
    sortRating: () =>  { dispatch(sortRating()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)