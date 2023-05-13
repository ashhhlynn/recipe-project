import React, { Component } from 'react'
import {  Grid, Segment, Card} from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import axios from "axios";
import Favorite from './Favorite'
import { fetchFavorites } from "./actions/rootActions"

class Favorites extends Component {        

    componentDidMount = () => {
        this.getFavorites()
    }
    
    getFavorites = () => {
        axios
        .get("api/v1/users/4.json")
        .then((response) => {
          console.log(response);
          this.props.fetchFavorites(response.data.recipes)
        })
        .catch((error) => console.log(error));
    }

    render() {
        const recipeGroup = this.props.favorites.map( i => {
            return (
                <Card >
                    <Favorite recipe={i} key={i.id}/>
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
                    <Card.Group itemsPerRow={3}  style={{width:"890px",marginTop: "1%", marginLeft:"5%"}}>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      fetchFavorites: (recipes) =>  { dispatch(fetchFavorites(recipes)) }, 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)