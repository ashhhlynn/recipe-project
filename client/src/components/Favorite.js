import React, { Component } from 'react'
import { Button, Modal, Rating, Icon, Image, Item} from 'semantic-ui-react'
import { connect } from "react-redux"
import axios from "axios";
import RecipeInfo from './RecipeInfo'
import { removeFavorite } from "./actions/rootActions"

class Favorite extends Component {        

    state = {
        modalOpen: false,
    }
    
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }
    
    handleClose = () => {
        this.setState({ modalOpen: false });
    }

    removeFave = () => {
        if (this.props.testUser.length > 0) {
            let f = this.props.userFavoritesF.find(r => parseInt(r.recipe_id) === this.props.recipe.id)
            console.log(f)
            let fi = f.id
            this.props.removeFavorite(this.props.recipe, fi)
            axios
            .delete("/api/v1/favorites/" + fi)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.log(error));}
        else {
            this.props.removeFavorite(this.props.recipe)
        }
    }

    render() {
        const f = this.props.recipe 
        let r = this.props.recipes.find(r => r.id === f.id) 
        return (
            <>
                <Image style={{cursor:"pointer", width:"270px", height:"260px"}} src= {f.image_url} onClick={this.handleOpen}/>   
                <h2 style={{textAlign:"center", marginTop: "2%", marginBottom:"2%"}}>
                    {f.name} 
                </h2>                   
                <Button floated="right" onClick={this.removeFave} style={{marginTop:"-15%", background:"none"}} >
                    <Icon style={{marginLeft:"93%", color:"#702963"}}floated="right" size="large" name="close"/>
                </Button> 
                <Item>
                    <Rating size="small" rating={f.average} disabled maxRating={5} />
                </Item>
                <Modal 
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon
                >
                    <Modal.Content >
                        <RecipeInfo recipe={r} key={r.name} handleClose={this.handleClose} />
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      testUser: state.testUser,
      userFavoritesF: state.userFavoritesF,
      recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        removeFavorite: (recipe, fi) =>  { dispatch(removeFavorite(recipe, fi)) }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Favorite)