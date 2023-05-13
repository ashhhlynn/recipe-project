import React, { Component } from 'react'
import { Icon, Menu, Header, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Head extends Component {

    render() {
        return (
            <div>
                <Menu borderless icon="labeled" style={{marginTop:"0%"}} >
                    <h1 style={{letterSpacing: "1.5px", fontFamily:"Segoe Print", color: "#702963", fontSize:"40px", marginTop:"1.7%", marginLeft:"3%"}}>
                        Cookbook.
                    </h1>
                    <Menu.Menu style={{marginTop:"1%"}} position="right">
                        <Menu.Item><Icon color="grey"  size="tiny" name="home"></Icon><Link to ='/' style={{marginTop:"-10%", color:"grey"}}>Home</Link></Menu.Item>
                        <Menu.Item><Icon color="grey" size="large" name="user plus"></Icon><Link to ='/signup'  style={{marginTop:"-10%", color:"grey"}}>Sign Up</Link></Menu.Item>
                        <Menu.Item><Icon size="large" color="grey" name="sign-in"></Icon><Link to ='/login'  style={{marginTop:"-10%", color:"grey"}}>Sign In</Link></Menu.Item>
                        <Menu.Item><Icon size="large" color="grey" name="sign-out"></Icon><Link to ='/'  style={{marginTop:"-10%", color:"grey"}}>Sign Out </Link></Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default Head