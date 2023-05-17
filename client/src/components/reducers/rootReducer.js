const initialState = {
    recipes: [],
    currentUser: [],
    loading: false,
    favorites: [],
    userFavorites: [],
    userFavoritesF: [],
    testUser: [],
    allFavorites: []
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

            case "FETCH_FAVORITES_F":
                console.log(action.recipes)
                return {
                    ...state,
                    userFavoritesF: action.recipes,
                    loading: false,
                };


            case "FETCH_ALL_FAVORITES":
                console.log(action.recipes)
                return {
                    ...state,
                    allFavorites: action.recipes,
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
                    userFavoritesF: [...state.userFavoritesF, action.recipe],
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
            let newFaves = state.favorites.filter(f => f.id !== action.recipe.id)
            return {
                ...state,
                favorites: newFaves,
                userFavoritesF: newFaves,
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
            if (action.user !== undefined){
            return {
                ...state, 
                currentUser: action.user, 
                loading: false
            }}
            
            else {
                return {
                    ...state
                }
            }
            ;

        case 'TEST_LOGIN':
            console.log(action.user)
                return {
                    ...state, 
                    testUser: [...state.testUser, action.user],
                    loading: false
                }
            ;
            case 'TEST_FAVORITES':
                console.log(action.user)
                let uR = state.recipes.filter(f => f.user_id === action.user)
                console.log(uR)
                    return {
                        ...state, 
                        favorites: uR,
                        loading: false
                    }
                ;
            case 'NO_LOGIN':
                    return {
                        ...state, 
                        testUser: [], 
                        loading: false
                    }
                ;

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