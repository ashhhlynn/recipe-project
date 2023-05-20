import React, { Component } from 'react'
import {  Grid, Segment, Card } from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import Recipe from './Recipe'
import { fetchFavorites } from "./actions/rootActions"
import axios from "axios";

class Favorites extends Component {        


    render() {
        const recipeGroup = this.props.favorites.map( f => {
            return (
                <Card >
                    <Recipe recipe={f.recipe} key={f.recipe.id}/>
                </Card>    
            )
        })  
        return (
            <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
                <Grid stackable columns={2} >
                <Grid.Column style={{width:"300px"}}> 
                    <Navbar/>
                </Grid.Column>
                <Grid.Column >
                    <Card.Group itemsPerRow={3}  style={{width:"890px",marginTop: "1%", marginLeft:"6%"}}>
                        {recipeGroup}
                    </Card.Group>
                    <br></br>  
                </Grid.Column>
                </Grid>
            </Segment>
        )     
    }
}

const mapStateToProps = (state) => {
    return { 
      favorites: state.favorites,
      currentUser: state.currentUser,
      recipes: state.recipes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      fetchFavorites: ( favorites) =>  { dispatch(fetchFavorites(favorites)) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)