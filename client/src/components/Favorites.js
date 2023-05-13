import React, { Component } from 'react'
import {  Grid, Segment, Card, Message} from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import Favorite from './Favorite'
import { fetchFavorites } from "./actions/rootActions"
import axios from "axios";
import { checkUser } from "./actions/rootActions"

class Favorites extends Component {        

    componentDidMount = () => {
        this.props.checkUser()
        if (this.props.currentUser.length === 0 ){
            axios
            .get("api/v1/users/4.json")
              .then((response) => {
                console.log(response.data.recipes);
                this.props.fetchFavorites(response.data.recipes)
              })
            .catch((error) => console.log(error));
        }
        else {
        

          
        
        
            let u = this.props.currentUser.id
        axios
        .get("api/v1/users/" + u)
        .then((response) => {
          console.log(response.data.recipes);
          this.props.fetchFavorites(response.data.recipes)
        })
      .catch((error) => console.log(error));
        }
    }

    componentDidMounty = () => {
        axios
        .get("api/v1/users/4.json")
          .then((response) => {
            console.log(response.data.recipes);
            this.props.fetchFavorites(response.data.recipes)
          })
        .catch((error) => console.log(error));

        axios
      .get("/api/v1/profile.json")
      .then((response) => {
          if (response.message) {
              localStorage.removeItem("token")
          }
          else {
          console.log(response);
          this.props.checkUser(response.user)
        }
      })
      .catch((error) => console.log(error));

      console.log(this.props.currentUser)
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
                    <Message color="yellow" style={{marginLeft:"7%", width:"300px"}}>
                        Create account or login to save favorites.
                    </Message>
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
      currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      fetchFavorites: (recipes) =>  { dispatch(fetchFavorites(recipes)) }, 
      checkUser: (user) =>  { dispatch(checkUser(user)) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)