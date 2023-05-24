import React, { Component } from 'react'
import { Button, Card, Modal, Icon, Image, Item, Rating } from 'semantic-ui-react'
import { connect } from "react-redux"
import axios from "axios"
import RecipeInfo from './RecipeInfo'
import { addToFavorites } from "./actions/rootActions"
import { removeFavorite } from "./actions/rootActions"

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

    addToFavorites = () => {
        let id = this.props.recipe.id
        if (!this.props.favorites.find(f=> f.recipe_id === id)) {
            if (this.props.currentUser.length !== 0) {
                axios
                .post("/api/v1/favorites", { recipe_id: id, user_id: this.props.currentUser.id })
                .then((response) => {
                    window.alert("Added to favorites.")
                    this.props.addToFavorites(response.data)
                })
            }
        }
        else {
            window.alert("Failed to add to favorites.")
        }
    }

    removeFavorite = () => {
        if (this.props.currentUser.length !== 0) {
            let fave = this.props.favorites.find(r => parseInt(r.recipe_id) === this.props.recipe.id)
            axios
            .delete("/api/v1/favorites/" + fave.id)
            .then(() => {
                this.props.removeFavorite(fave.id)
                window.alert("Removed from favorites.")
            })
            .catch((error) => console.log(error));
        }
        else {
            window.alert("Failed to remove from favorites.")
        }
    }

    render() {
        const i = this.props.recipe    
        return (
            <>
            <Card>
                <Image style={{cursor:"pointer", width:"270px", height:"260px"}} src= {i.image_url} onClick={this.handleOpen}/>
                <h3 style={{textAlign:"center", fontSize:"21px", marginTop: "2%", marginBottom:"2%"}}>
                    {i.name}                     
                </h3>
                {this.props.favorites.find(f=> parseInt(f.recipe_id) === i.id) ?
                    <Button floated="right" onClick={this.removeFavorite} style={{marginTop:"-15%", background:"none"}} >
                        <Icon style={{color:"grey", marginLeft:"95%"}}floated="right"  size="large"  name="close"/>
                    </Button>  
                :        
                    <Button floated="right" onClick={this.addToFavorites} style={{marginTop:"-15%", background:"none"}} >
                        <Icon style={{color:"#880808", marginLeft:"95%"}}floated="right"  size="large" name="heart"/>
                    </Button>   
                }           
                <Item>
                    <Rating size="small" rating={i.average} disabled maxRating={5} />
                </Item>
                <Modal 
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon
                >
                    <Modal.Content >
                        <RecipeInfo recipe={i} key={i.id} handleClose={this.handleClose} />
                    </Modal.Content>
                </Modal>
            </Card>
            </>
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
      addToFavorites: (recipe) =>  { dispatch(addToFavorites(recipe)) },
      removeFavorite: (f) =>  { dispatch(removeFavorite(f)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)