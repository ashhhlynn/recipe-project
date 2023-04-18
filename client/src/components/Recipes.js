import React, { Component } from 'react'
import { Button, Modal, Grid, Icon, Header, Segment, Card} from 'semantic-ui-react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from "axios";
import Recipe from './Recipe'


class Recipes extends Component {        

    constructor(props) {
        super(props);
        this.state = {
          recipes: [],
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
        .catch((error) => console.log(error));
    }

    render() {
        const recipeGroup = this.state.recipes.map( i => {
            return (
                <div style={{textAlign: "left"}}>
                    <Header as="h3" style={{marginBottom:"-1%"}}>
                        {i.name}
                    </Header> 
                    <i style={{marginTop:"0%"}}>{i.description}</i>
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
                <Grid.Column>
                    <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
                    {recipeGroup}
                        <br></br>
                    </Segment>           
                </Grid.Column>
            </Grid>
        </Segment>
        )     
    }
}



export default Recipes