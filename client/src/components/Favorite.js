import React, { Component } from 'react'
import { Button, Modal, Rating, Icon, Image, Item} from 'semantic-ui-react'
import { connect } from "react-redux"
import axios from "axios";
import FavoriteInfo from './FavoriteInfo'
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

    removeFave = () => {
        console.log(this.props.testUser[0])
        console.log(this.props.recipe.id)
        console.log(this.props.allFavorites)
        let f = this.props.allFavorites.find(r => 
           parseInt(r.recipe_id) === this.props.recipe.id && 
           parseInt(r.user_ud) === this.props.testUser[0])
        console.log(f)
        this.props.removeFavorite(this.props.recipe)
    }

    render() {
        const f = this.props.recipe  
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
                        <FavoriteInfo recipe={f} key={f.id} handleClose={this.handleClose} />
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      testUser: state.testUser,
      allFavorites: state.allFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        removeFavorite: (recipe) =>  { dispatch(removeFavorite(recipe)) }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Favorite)