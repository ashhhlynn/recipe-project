export const fetchRecipes = (recipes) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_RECIPES", recipes: recipes })     
    }
}

export const fetchFavorites = (recipes) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_FAVORITES", recipes: recipes })  
    }
}

export const fetchAllFavorites = (recipes) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_ALL_FAVORITES", recipes: recipes })     
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

export const testLogin = (user) => {
    console.log(user)
    return (dispatch) => {  
        dispatch({ type: "TEST_LOGIN", user: user })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
    }
}