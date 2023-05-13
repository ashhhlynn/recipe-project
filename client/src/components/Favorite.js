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

    removeFavorite = () => {
        this.props.removeFavorite(this.props.recipe)
    }

    removeFave = () => {
        let i = this.props.recipe.id
        axios
        .put("/api/v1/recipes/" + i, {
            user_id: 3
        })
        .then((response) => {
            console.log(response.data);
        });
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
                        <FavoriteInfo recipe={f} key={f.name} handleClose={this.handleClose} />
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
        removeFavorite: (recipe) =>  { dispatch(removeFavorite(recipe)) }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Favorite)