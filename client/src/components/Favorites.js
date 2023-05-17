import React, { Component } from 'react'
import {  Grid, Segment, Card } from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import Favorite from './Favorite'
import { fetchFavorites } from "./actions/rootActions"
import axios from "axios";
import { fetchAllFavorites } from "./actions/rootActions"

class Favorites extends Component {        

componentDidMount = () => {
    if (this.props.testUser.length > 0) {
        let u = this.props.testUser[0]
        axios
        .get("api/v1/users/" + u)
        .then((response) => {
            console.log(response.data[0]);
            console.log(response.data)
            this.props.fetchFavorites(response.data[0])
        })
        .catch((error) => console.log(error));
        
        axios 
        .get("api/v1/favorites.json")
        .then((response) => {
            this.props.fetchAllFavorites(response.data)
        })
        .catch((error) => console.log(error));
    }
}

    render() {
        const recipeGroup = this.props.favorites.map( f => {
            return (
                <Card >
                    <Favorite recipe={f} key={f.id}/>
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
      testUser: state.testUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      fetchFavorites: (recipes) =>  { dispatch(fetchFavorites(recipes)) }, 
      fetchAllFavorites: (recipes) =>  { dispatch(fetchAllFavorites(recipes)) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)