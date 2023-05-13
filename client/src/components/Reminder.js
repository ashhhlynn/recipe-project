
import React, { Component } from 'react'
import { connect } from "react-redux"
import { Message} from 'semantic-ui-react'

class Reminder extends Component {

    render() {
        return (
            <>
               {this.props.currentUser.length === 0} ?
                    <Message color="yellow" style={{marginLeft:"0%", width:"300px"}}>
                        Create account or login to create.
                    </Message>
                :
                <><p>Hi</p></>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Reminder)