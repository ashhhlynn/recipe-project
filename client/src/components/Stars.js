import React, { Component } from 'react'
import { Icon, Form, Button, Label, Rating} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";

class Stars extends Component {

    state = {
    
    }



    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    handleAdd = () => {
  
        this.setState((prevState) => ({ active: !prevState.active }))
    }
    

   


    render() {
        const { active } = this.state

        return (
            <>
            <center>   
                  <Button.Group>

                    <Button  toggle active={active}  onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
                    <Button  toggle active={active} onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
                    <Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
                    <Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
                    <Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
                    
                    
                    <br></br><br></br><br></br>
                    </Button.Group>

                    
                  <Button.Group>

<Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
<Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
<Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
<Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>
<Button onClick={this.handleAdd} style={{backgroundColor:"#fafafa"}}><Icon size="big" color="purple" name="star outline"/></Button>


<br></br><br></br><br></br>
</Button.Group>
                 
            </center>
            </>
        )
    }
}

export default Stars