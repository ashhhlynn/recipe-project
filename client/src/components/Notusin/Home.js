import React, { Component } from 'react'
import { Icon, Item, Menu, Button, Header, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

class Home extends Component {

    render() {
        return (
            <div>
                <img  style={{opacity:"90%", width:"1400px", marginLeft:"-6%", marginTop:"-1%"}} src ="https://www.bhg.com/thmb/cX9GeFKdow2d4mNqEbMRTXjpoZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg">
                </img>
                <Item style={{color:"white", width:"520px", background: "none", opacity:"100%", marginLeft:"28%", marginTop:"-66%"}}>
                    <h1 style={{letterSpacing: "1.5px", fontSize:"44px", fontWeight: "normal", fontFamily:"Lato"}} >Share and View Recipes</h1>
                    <h2 style={{color:"white", marginTop:"-4.5%", fontSize:"30px", fontWeight:"normal"}}><i>Five or Less Ingredients</i></h2>
                    <Button size="big" circular style={{fontWeight:"normal",  backgroundColor:"white", color:"purple"}}>View Recipes</Button>
                </Item>                    
            </div>
        )
    }
}

export default Home