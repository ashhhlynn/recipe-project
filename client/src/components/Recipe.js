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
                    <img style={{width:"270px", height:"260px"}}src= {i.image_url} onClick={this.handleOpen}/>
                    <h3 style={{textAlign:"center", marginTop: "2%", marginBottom:"2%"}}>
                        {i.name} 
                    </h3>   
                    <Button onClick={this.addToFaves} style={{marginTop:"-14%", background:"none"}}>
                        <Icon style={{marginRight:"1000%"}} floated="right" size="large" color="red" name="heart"/>
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
      addToFavorites: (recipe) =>  { dispatch(addToFavorites(recipe)) }
    }
}
  
  export default connect(null, mapDispatchToProps)(Recipe)