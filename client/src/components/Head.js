import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { logOut } from "./actions/rootActions"

class Head extends Component {

    handleLogout = () => {
        localStorage.clear()
        this.props.logOut()
    }    
        
    render() {
        return (
            <div>
                <Menu style={{textAlign:"center", opacity:"94%", color:"white", backgroundColor:"#702963", marginBottom:"0%"}} position="middle">
                    <h3 style={{marginLeft:"38%", fontSize: "16px", marginTop:".75%", letterSpacing: "1.5px"}}>
                        recipes with five ingredients or less <Icon size="small" color="yellow" name="heart"></Icon>
                    </h3>
                </Menu>
                <Menu borderless icon="labeled" style={{marginTop:"0%"}} >
                    <h1 style={{letterSpacing: "0px", fontFamily:"Segoe Print", color: "#702963", fontSize:"40px", marginTop:"1.7%", marginLeft:"3%"}}>
                        Dash Delish
                    </h1>
                    <Menu.Menu style={{marginTop:"1%", marginRight:"1%"}} position="right">
                        {this.props.testUser.length === 0 ?
                            <>
                            <Menu.Item><Icon color="grey" size="large" name="user plus "></Icon><Link to ='/signup'  style={{marginTop:"-10%", color:"grey"}}>Sign Up</Link></Menu.Item>
                            <Menu.Item><Icon size="large" color="grey" name="user outline"></Icon><Link to ='/login'  style={{marginTop:"-10%", color:"grey"}}>Sign In</Link></Menu.Item>
                            </>
                        :
                            <>
                            <Menu.Item><Icon size="huge" color="grey" name="user circle outline"></Icon><Link to ='/'  onClick={this.handleLogout} style={{marginTop:"-10%", color:"grey"}}>Sign Out</Link></Menu.Item>
                            </>
                        }
                    </Menu.Menu>
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

const mapDispatchToProps = (dispatch) => {
    return { 
      logOut: () =>  { dispatch(logOut()) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)