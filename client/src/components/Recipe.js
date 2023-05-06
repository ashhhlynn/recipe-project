import React, { Component } from 'react'
import { Button, Modal, Grid, Icon, Header, Segment, Card} from 'semantic-ui-react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import axios from "axios";
import RecipeInfo from './RecipeInfo'
import { addToFavorites } from "./actions/rootActions"

class Recipe extends Component {        

    state = {
        modalOpen: false
    }
    
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }
    
    handleClose = () => {
        this.setState({ modalOpen: false });
    }

    addToFaves = () => {
        this.props.addToFavorites(this.props.recipe)
    }

    render() {
        const i = this.props.recipe
            return (
                <>
                    <img src= {i.image_url} onClick={this.handleOpen}/>
                    <Header as="h3" style={{marginTop: "2%", marginBottom:"2%"}}>
                        {i.name}
                        <Button onClick={this.addToFaves} style={{marginTop:"-2%" ,backgroundColor:"white"}}floated="right" size="small">
                            <Icon color="red" name="heart"/>
                        </Button>
                    </Header> 
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
      addToFavorites: (recipe) =>  { dispatch(addToFavorites(recipe)) }
    }
}
  
  export default connect(null, mapDispatchToProps)(Recipe)