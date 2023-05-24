import React, { Component } from 'react'
import { Icon, Menu , Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { logOut } from "./actions/rootActions"
import axios from "axios";

class AddButton extends Component {
  
        removeFavorite = () =>
        {}

    render() {
        return (
            <>
                   <Button floated="right" onClick={this.removeFave} style={{marginTop:"-40%", backgroundColor:"#ffffff"}} >
                        <Icon style={{color:"white", marginLeft:"60%"}}floated="right"  size="huge" name="heart"/>
                    </Button>  
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
      logOut: () =>  { dispatch(logOut()) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton)