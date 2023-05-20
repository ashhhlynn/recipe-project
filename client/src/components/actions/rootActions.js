export const fetchRecipes = (recipes) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_RECIPES", recipes: recipes })     
    }
}

export const fetchFavorites = (recipes, favorites) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_FAVORITES", recipes: recipes })  
        dispatch({ type: "FETCH_USER_FAVORITES", favorites: favorites })  
    }
}

export const updateRR = (recipe) => {
    return (dispatch) => {
        dispatch({ type: "UPDATE_RR", recipe: recipe })     
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

export const sortRating = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_RATING" })
    }
}

export const addToFavorites = (recipe) => {
    return (dispatch) => {
        dispatch({ type: "ADD_TO_FAVORITES", recipe: recipe })     
    }
}

export const removeFavorite = (recipe, fi) => {
    return (dispatch) => {
        dispatch({ type: "REMOVE_FAVORITE", recipe: recipe, i: fi })     
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