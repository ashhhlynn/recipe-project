import React, { Component } from 'react'
import { Icon, Menu, Button, Header, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

class Home extends Component {

    render() {
        return (
            <div>
                <img  width="1270px" style={{opacity:"90%", marginLeft:"-6%", marginTop:"-1%"}} src ="https://www.thespruceeats.com/thmb/dTl3N_efOfayhgHoS2QOT0jEbCQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/freshvegetablesAlexRaths-4c1ea186a88e4fd7b95283eee614600c.jpg">
                </img>
                <Segment style={{color:"white", width:"520px", background: "none", opacity:"100%", marginLeft:"28%", marginTop:"-56%"}}>
                    <h1 style={{letterSpacing: "1.5px", fontSize:"44px", fontWeight: "normal", fontFamily:"Lato"}} >Share and View Recipes</h1>
                    <h2 style={{color:"white", marginTop:"-4.5%", fontSize:"30px", fontWeight:"normal"}}><i>Five or Less Ingredients</i></h2>
                    <Button size="big" circular style={{fontWeight:"normal",  backgroundColor:"white", color:"purple"}}>View Recipes</Button>
                </Segment>                    
            </div>
        )
    }
}

export default Home