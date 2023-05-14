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

export const filterIngredient = (name) => {
    return (dispatch) => {
        dispatch({ type: "FILTER_INGREDIENT", name })
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

export const getRating = (ratings) => {
    return (dispatch) => {
        dispatch({ type: "GET_RATING", ratings })
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
        dispatch({ type: "NO_LOGIN"})

    }
}

export const testLogin = (user) => {
    console.log(user)
    return (dispatch) => {  
        dispatch({ type: "TEST_LOGIN", user: user })
        dispatch({ type: "TEST_FAVORITES", user: user })

    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
    }
}