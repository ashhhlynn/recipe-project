
import React, { Component } from 'react'
import { connect } from "react-redux"
import { Message} from 'semantic-ui-react'

class Reminder extends Component {

    render() {
        return (
            <>
                <Message color="yellow" style={{ marginLeft:".75%", width:"300px"}}>
                    Create account or login to create or save recipes and reviews.
                </Message>   
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser,
      testUser: state.testUser
    }
}

export default connect(mapStateToProps)(Reminder)