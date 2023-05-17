import React, { Component } from 'react'
import { Button, Modal, Icon, Image, Item, Rating} from 'semantic-ui-react'
import { connect } from "react-redux"
import axios from "axios";
import RecipeInfo from './RecipeInfo'
import { addToFavorites } from "./actions/rootActions"

class AddButton extends Component {        



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
                
                <Button floated="right" onClick={this.addToFaves} style={{marginTop:"-15%", background:"none"}} >
                    <Icon style={{color:"#702963", marginLeft:"93%"}}floated="right"  size="large" name="heart"/>
                </Button> 
              
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
  
export default connect(mapStateToProps, mapDispatchToProps)(AddButton)