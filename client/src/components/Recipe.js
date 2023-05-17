import React, { Component } from 'react'
import { Button, Modal, Icon, Image, Item, Rating} from 'semantic-ui-react'
import { connect } from "react-redux"
import axios from "axios";
import RecipeInfo from './RecipeInfo'
import { addToFavorites } from "./actions/rootActions"

import AddButton from './AddButton'


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
        let id = this.props.recipe.id
        if (this.props.testUser.length > 0) {
            let u = this.props.testUser[0]
            axios
            .post("/api/v1/favorites", { recipe_id: id, user_id: u })
            .then((response) => {
                console.log(response);
                this.props.addToFavorites(this.props.recipe)
                window.alert("Added to favorites.")
            })
        }
        else {
        this.props.addToFavorites(this.props.recipe)
        }
    }

    render() {
        const i = this.props.recipe    
        return (
            <>
                <Image style={{cursor:"pointer", width:"270px", height:"260px"}}src= {i.image_url} onClick={this.handleOpen}/>
                <h2 style={{textAlign:"center", marginTop: "2%", marginBottom:"2%"}}>
                    {i.name}                     
                </h2>   
                <AddButton recipe={i} key={i.id} /> 
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
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      testUser: state.testUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      addToFavorites: (recipe) =>  { dispatch(addToFavorites(recipe)) },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Recipe)