import React, { Component } from 'react'
import { Icon, Form, Button, Label, Rating} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";

class Rate extends Component {

    state = {
    
    }



   


    render() {
        const { active } = this.state

        return (
            <>
            <center>   
            <Rating size="massive" defaultRating={x} maxRating={5} />

            </center>
            </>
        )
    }
}

export default Rate