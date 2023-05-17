import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Reminder from './Reminder'
import { connect } from "react-redux"

class Navbar extends Component {
    
    render() {
        return (
            <div className="navy">
                <Menu className="navb" size="huge" vertical style={{backgroundColor:"#F0f0f0", marginTop:"-5.5%", marginLeft:"-1%", minHeight:"800px"}}>
                {this.props.testUser.length === 0 ?
                        <Reminder /> 
                    :
                        <>
                        <h1 style={{letterSpacing:"2px", marginTop:"3%"}}>Hi, user{this.props.testUser[0]}!</h1>
                        </>
                    }
                    <Menu.Item ><Link to="/" style={{fontWeight:"normal", color:"#000000", fontSize:"20px"}}><i>all recipes</i></Link></Menu.Item>
                    <Menu.Item><Link to="/createrecipe"  style={{fontWeight:"normal", color:"#000000", fontSize:"20px"}}><i>share recipe</i></Link></Menu.Item>
                    <Menu.Item><Link to="/favorites"  style={{fontWeight:"normal", color:"#000000",  fontSize:"20px"}}><i>favorites</i></Link></Menu.Item>
                    <Menu.Item></Menu.Item>
                   
                 
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      testUser: state.testUser
    }
}

export default connect(mapStateToProps)(Navbar)