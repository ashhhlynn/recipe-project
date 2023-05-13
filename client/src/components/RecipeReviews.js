import React, { Component } from 'react'
import { Rating} from 'semantic-ui-react'

class RecipeReviews extends Component {

    state = {
        revs: this.props.recipe.reviews
    }

    addRev = (r) => {
        this.state.revs.push(r)
    }

    render() {
        const reviews = this.state.revs.map(r => {           
            return(
                <div>
                    <Rating size="small" rating={r.score} disabled maxRating={5} /> 
                    <br></br>
                    "{r.text}" {r.created_at.substring(0, 10)}<br></br><br></br>
                </div>
            )
        })
        return (
            <>
                {reviews}
            </>
        )
    }
}

export default RecipeReviews