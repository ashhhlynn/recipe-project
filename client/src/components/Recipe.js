import React, { Component } from 'react'
import { Button, Modal, Grid, Item, Icon, Image, Rating} from 'semantic-ui-react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import axios from "axios";
import RecipeInfo from './RecipeInfo'
import { addToFavorites } from "./actions/rootActions"

class Recipe extends Component {        

    state = {
        modalOpen: false, 
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
                    <Image style={{width:"270px", height:"260px"}}src= {i.image_url} onClick={this.handleOpen}/>
                    <Button onClick={this.addToFaves} style={{marginTop:"-27%", background:"none"}}>
                        <Icon style={{marginLeft:"80%"}} floated="right" size="huge" color="red" name="heart"/>
                    </Button>
                    <h2 style={{textAlign:"center", marginTop: "2%", marginBottom:"2%"}}>
                        {i.name} 
                    </h2>   
                    <Rating rating={i.average} disabled maxRating={5} />
                    <br></br>          
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