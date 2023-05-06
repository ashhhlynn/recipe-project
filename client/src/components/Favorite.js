import React, { Component } from 'react'
import { Button, Modal, Divider, Grid, Icon, Header, Segment, Card} from 'semantic-ui-react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from "axios";
import Recipe from './Recipe'
import RecipeInfo from './RecipeInfo'
import { removeFavorite } from "./actions/rootActions"

class Favorite extends Component {        

    state = {
        modalOpen: false
    }
    
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }
    
    handleClose = () => {
        this.setState({ modalOpen: false });
    }

    removeFavorite = () => {
        this.props.removeFavorite(this.props.recipe)
    }

    render() {
        const i = this.props.recipe

     
            return (
                <>
                    <img style={{width:"270px", height:"260px"}} src= {i.image_url} onClick={this.handleOpen}/>
                   
        <h3 style={{textAlign:"center", marginTop: "2%", marginBottom:"2%"}}>
            {i.name} 
        </h3>  
                   
         <Button onClick={this.removeFavorite} style={{marginTop:"-14%", background:"none"}} >
                            <Icon style={{marginRight:"1000%"}}floated="right" color="red" size="large" name="close"/>
                        </Button>
               
                    <Modal 
                         open={this.state.modalOpen}
                         onClose={this.handleClose}
                         closeIcon
                    >
                        <Modal.Content >
                            <RecipeInfo recipe={i} key={i.id} handleClose={this.handleClose} />
                        </Modal.Content>
                    </Modal>
                </>
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        removeFavorite: (recipe) =>  { dispatch(removeFavorite(recipe)) }
    }
}
  
export default connect(null, mapDispatchToProps)(Favorite)