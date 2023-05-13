import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    
    render() {
        return (
            <div className="navy">
                <Menu className="navb" size="huge" vertical style={{marginTop:"-5.5%", marginLeft:"-1%", minHeight:"800px"}}>
                    <Menu.Item ><Link to="/" style={{fontWeight:"normal", color:"#585858",  letterSpacing:"4%", fontSize:"20px"}}>all recipes</Link></Menu.Item>
                    <Menu.Item><Link to="/createrecipe"  style={{fontWeight:"normal", color:"#585858", fontSize:"20px"}}>share recipe</Link></Menu.Item>
                    <Menu.Item><Link to="/favorites"  style={{fontWeight:"normal", color:"#585858 ",  fontSize:"20px"}}>favorites</Link></Menu.Item>
                    <Menu.Item></Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navbar