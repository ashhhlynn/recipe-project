import React, { Component } from 'react'
import { Icon, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

class Navbar extends Component {

    handleLogout = () => {
        localStorage.clear()
    }    
    
    render() {
        return (
            <div className="habitMenu">
                <Menu className="nav" size="huge" vertical style={{minHeight:"515px", marginTop:"-5%", marginLeft:"-4%", marginBottom:"-5%", height:"100%"}}>
                    <Menu.Item ><Link to="/recipes" style={{color:"#585858"}}><Icon name="calendar check"></Icon>All Recipes</Link></Menu.Item>
                    <Menu.Item><Link to="/profile"  style={{color:"#585858 "}}><Icon name="list"/>Profile</Link></Menu.Item>
                    <Menu.Item><Link to="/createrecipe"  style={{color:"#585858 "}}><Icon name="external alternate"></Icon>Create Recipe</Link></Menu.Item>
                    <Menu.Item><Link to="/" style={{color:"#585858 "}} onClick={this.handleLogout}><Icon name="sign out alternate"></Icon>Logout</Link></Menu.Item>
                    <Menu.Item></Menu.Item>
                </Menu>
            </div>
        )
    }
}


export default Navbar