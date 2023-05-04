import React, { Component } from 'react'
import { Icon, Menu, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

class Head extends Component {

    
    render() {
        return (
            <div>
                <img height="220px" width="1250px"src="https://downtownmidland.com/wp-content/uploads/2020/07/Food_Header2.jpg"/>

                <Menu style={{marginTop:"-8%"}} >
<h1 style={{fontFamily:"segoe Script", fontSize:"44px", marginTop:"2%", marginLeft:"23%", marginBottom:"1%"}}>
                    The Cookbook</h1>
                <Menu.Menu position="middle">
                    <Menu.Item position="right">Login</Menu.Item>
                    <Menu.Item >Signup</Menu.Item>
                    <Menu.Item>Logout</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}


export default Head