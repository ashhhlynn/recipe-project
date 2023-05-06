import React, { Component } from 'react'
import { Button, Dropdown, Grid, Segment, Card, Item} from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import axios from "axios";
import Recipe from './Recipe'
import { fetchRecipes } from "./actions/rootActions"

class Recipes extends Component {        

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe_ingredients: []
    };
  }
    
  componentDidMount() {
    axios
    .get("api/v1/recipes.json")
      .then((response) => {
          console.log(response);
          this.props.fetchRecipes(response.data)
          this.setState({
            recipes: response.data,
          });
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

  render() {
    const recipeGroup = this.state.recipes.map( i => {
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
            <Item style={{marginLeft:"50%"}}>
            <Dropdown
            placeholder='Ingredient'
            fluid
            search
            selection
            options={riGroup}
            /> 
            <Button id="3"circular basic color="purple" onClick={(event)=>{this.sortItems(event)}}>Name</Button> 
            <Button id="3"circular basic color="purple" onClick={(event)=>{this.sortItems(event)}}>Date</Button> 
            <Button id="3"circular basic color="purple" onClick={(event)=>{this.sortItems(event)}}>Reviews</Button> 


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

const mapDispatchToProps = (dispatch) => {
  return { 
    fetchRecipes: (recipes) =>  { dispatch(fetchRecipes(recipes)) }
  }
}

export default connect(null, mapDispatchToProps)(Recipes)