import React, { Component } from 'react'
import { Button, Modal, Icon, Image, Rating} from 'semantic-ui-react'
import { connect } from "react-redux"
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

    addToFavorites = () => {
        let id = this.props.recipe.id
        axios
        .put("/api/v1/recipes/" + id, {
            user_id: 4
        })
        .then((response) => {
        console.log(response.data);
        });
        this.props.addToFavorites(this.props.recipe)
    }

    render() {
        const i = this.props.recipe    
        return (
            <>
                <Image style={{cursor:"pointer", width:"270px", height:"260px"}}src= {i.image_url} onClick={this.handleOpen}/>
                <h2 style={{textAlign:"center", marginTop: "2%", marginBottom:"2%"}}>
                    {i.name}                     
                </h2>   
                <Button floated="right" onClick={this.addToFavorites} style={{marginTop:"-15%", background:"none"}} >
                    <Icon style={{color:"#702963", marginLeft:"93%"}}floated="right"  size="large" name="heart"/>
                </Button> 
                <p><Rating size="small" rating={i.average} disabled maxRating={5} /></p>
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

const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser
    }
  }

const mapDispatchToProps = (dispatch) => {
    return { 
      addToFavorites: (recipe) =>  { dispatch(addToFavorites(recipe)) }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Recipe)