import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class OtherNav extends Component {

    logout = () => {

            localStorage.clear()
            this.props.logOut()
        
    }

    render() {
        return (
            <div>
                <Menu style={{textAlign:"center", opacity:"94%", color:"white", backgroundColor:"#702963", marginBottom:"0%"}} position="middle">
                    <h3 style={{marginLeft:"36%", marginTop:".5%", letterSpacing: "1.5px"}}>
                        recipes with five ingredients or less <Icon size="small" color="yellow" name="heart"></Icon>
                    </h3>
                </Menu>
                <Menu borderless icon="labeled" style={{marginTop:"0%"}} >
                    <h1 style={{letterSpacing: "0px", fontFamily:"Segoe Print", color: "#702963", fontSize:"40px", marginTop:"1.7%", marginLeft:"3%"}}>
                        Dash Delish
                    </h1>
                    <Menu.Menu style={{marginTop:"1%"}} position="right">
                    <Menu.Item><Icon size="large" color="grey" name="sign-out"></Icon><Link to ='/' onClick={this.logout} style={{marginTop:"-10%", color:"grey"}}>Sign Out </Link></Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default OtherNav