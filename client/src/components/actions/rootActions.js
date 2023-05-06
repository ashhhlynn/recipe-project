export const fetchRecipes = (recipes) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_RECIPES", recipes: recipes })     
    }
}

export const sortAToZ = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_A_TO_Z" })
    }
}

export const sortNumberReviews = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_NUMBER_REVIEWS" })
    }
}


export const sortDate = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_DATE" })
    }
}


export const addToFavorites = (recipe) => {
    return (dispatch) => {
        dispatch({ type: "ADD_TO_FAVORITES", recipe: recipe })     
    }
}

export const removeFavorite = (recipe) => {
    return (dispatch) => {
        dispatch({ type: "REMOVE_FAVORITE", recipe: recipe })     
    }
}


export const createUser = (userData) => {
    return (dispatch) => {
        dispatch({ type: "SET_CURRENT_USER", user: userData })
           
    }
}




export const checkUser = (u) => {
    return (dispatch) => {
     
   
            dispatch({ type: "SET_CURRENT_USER", user: u })

    }

}
   

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
    }
}