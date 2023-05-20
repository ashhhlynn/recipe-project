const initialState = {
    recipes: [],
    currentUser: [],
    loading: false,
    favorites: [],
    userFavoritesF: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_RECIPES":
            console.log(action.recipes)
            return {
                ...state,
                recipes: action.recipes,
                loading: false,
            };

        case "FETCH_FAVORITES":
            console.log(action.recipes)
            return {
                ...state,
                favorites: action.recipes,
                loading: false,
            };

        case "FETCH_USER_FAVORITES":
            console.log(action.favorites)
            return {
                ...state,
                userFavoritesF: action.favorites,
                loading: false,
            };

        case "UPDATE_RR":
            console.log(action.recipe)
            return {
                ...state,
                recipes: [...state.recipes.filter(item=> item.id !== action.recipe.id), action.recipe],
                loading: false,
            };

        case "SORT_A_TO_Z":
            console.log(...state.recipes)
            return {
                ...state,
                 recipes: [...state.recipes.slice().sort((item1, item2) => item2.name < item1.name ? 1 : -1)]
            }; 

        case "SORT_NUMBER_REVIEWS":
            console.log(...state.recipes)
            return {
                ...state,
                recipes: [...state.recipes.slice().sort((item1, item2) => item2.reviews.length > item1.reviews.length ? 1 : -1)]
            }; 

        case "SORT_DATE":
            console.log(...state.recipes)
            return {
                ...state,
                recipes: [...state.recipes.slice().sort((item1, item2) => item2.created_at > item1.created_at ? 1 : -1)]
            }; 

        case "SORT_RATING":
            console.log(...state.recipes)
            return {
                ...state,
                recipes: [...state.recipes.slice().sort((item1, item2) => item2.average > item1.average ? 1 : -1)]
            }; 
        
        case "ADD_TO_FAVORITES":
            console.log(action.recipe)
            return {
                ...state,
                favorites: [...state.favorites, action.recipe],
                loading: false,
            };
    
        case "REMOVE_FAVORITE":
            console.log(action.recipe)
            console.log(action.i)
            let newuserFavoritesF = state.userFavoritesF.filter(f => f.id !== action.i)
            let newFaves = state.favorites.filter(f => f.id !== action.recipe.id)
            return {
                ...state,
                favorites: newFaves,
                userFavoritesF:  newuserFavoritesF,
                loading: false,
            };
        
        case "ADD_RECIPE":
            return {
                ...state,
                recipes: [...state.recipes, action.data],
            };

        case 'SET_CURRENT_USER':
            console.log(action.user)
            return {
                ...state, 
                currentUser: action.user, 
                loading: false
            };

        case 'LOGOUT':
            return {
                ...state, 
                currentUser: [], 
                testUser: [],
                loading: false,
            };

        default:
            return state;
    }
}

export default rootReducer