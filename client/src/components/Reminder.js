
import React, { Component } from 'react'
import { Message} from 'semantic-ui-react'

class Reminder extends Component {

    render() {
        return (
            <>
                <Message color="yellow" style={{ marginLeft:"0%", marginBottom:"-.5%", width:"306px"}}>
                    Signup or login to create recipes, reviews, and favorites.
                </Message>   
            </>
        )
    }
}

export default Reminder