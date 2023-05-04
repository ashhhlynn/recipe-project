import React, { Component } from 'react'
import { Button, Modal, Divider, Grid, Icon, Header, Segment, Card} from 'semantic-ui-react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from "axios";
import Recipe from './Recipe'
import Favorite from './Favorite'

class Favorites extends Component {        


    componentDidMount() {

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
export default connect(mapStateToProps)(Favorites)