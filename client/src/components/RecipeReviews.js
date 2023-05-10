import React, { Component } from 'react'
import { Icon, Menu} from 'semantic-ui-react'

class RecipeReviews extends Component {

    render() {
        const reviews = this.props.recipe.reviews.map(r => {           
            return(
                <div>
                    {r.score} 
                    "{r.text}" <b>by user9</b> {r.created_at.substring(0, 10)}<br></br><br></br>
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