import React, { Component } from 'react'
import { Icon, Menu, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

class Head extends Component {

    render() {
        return (
            <div>
                <Menu icon="labeled" style={{marginTop:"0%"}} >
                    <h1 style={{letterSpacing: "1.5px", fontWeight: "normal", fontFamily:"Lato", color: "purple", fontSize:"40px", marginTop:"2%", marginLeft:"3%"}}>
                    Cookbook.</h1>
                    <Menu.Menu style={{marginTop:"1%"}} position="right">
                    <Menu.Item ><Icon color="grey" size="large" name="home"></Icon>Home</Menu.Item>

                        <Menu.Item ><Icon color="grey" size="large" name="user plus"></Icon>Sign Up</Menu.Item>
                        <Menu.Item><Icon size="large" color="grey" name="sign-in"></Icon>Sign In</Menu.Item>
                        <Menu.Item><Icon size="large" color="grey" name="sign-out"></Icon>Sign Out</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default Head