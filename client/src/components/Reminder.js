
import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { Form, Rating, Message} from 'semantic-ui-react'

class Reminder extends Component {

    render() {
        return (
            <>
               {this.props.currentUser.length === 0} ?
       
    
       <Message color="yellow" style={{marginLeft:"0%", width:"300px"}}>
           Create account or login to create.
       </Message>
       :
       
       <p>Hi</p>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Reminder
)