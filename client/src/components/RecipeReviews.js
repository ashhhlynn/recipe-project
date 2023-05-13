import React, { Component } from 'react'
import { Icon, Menu, Rating} from 'semantic-ui-react'

class RecipeReviews extends Component {

    render() {
        const reviews = this.props.recipe.reviews.map(r => {           
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