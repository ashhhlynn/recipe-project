const initialState = {
    recipes: [],
    currentUser: [],
    loading: false,
    favorites: [],
    userFavoritesF: [],
    testUser: [],
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

        case "FETCH_ALL_FAVORITES":
            let nfs = action.recipes.filter(f => parseInt(f.user_id) === state.testUser[0])
            console.log(nfs)
            return {
                ...state,
                userFavoritesF: nfs,
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
            if (!state.favorites.find(f=> f.id === action.recipe.id)) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.recipe],
                    loading: false,
                }
            }
            else {
                return {
                    ...state,
                    favorites: [...state.favorites],
                    loading: false,
                }
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
            console.log(state.currentUser)
            console.log(action.user)
            return {
                ...state, 
                currentUser: action.user, 
                loading: false
            };

        case 'TEST_LOGIN':
            console.log(action.user)
            return {
                ...state, 
                testUser: [...state.testUser, action.user],
                loading: false
            };

        case 'LOGOUT':
            return {
                ...state, 
                currentUser: [], 
                loading: false,
            };

        default:
            return state;
    }
}

export default rootReducer