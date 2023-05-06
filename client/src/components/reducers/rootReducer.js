const initialState = {
    recipes: [],
    currentUser: [],
    loading: false,
    favorites: []
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
    

            case "ADD_TO_FAVORITES":
                console.log(action.recipe)
                if (!state.favorites.find(f=> f.id === action.recipe.id))
                {
                return {
                    ...state,
                    favorites: [...state.favorites, action.recipe],
                    loading: false,
                }
            }
            else{
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
                        loading: false,
                    };

        
        case "ADD_RECIPE":
            return {
                ...state,
                recipes: [...state.recipes, action.data],
            };

    

        case "DELETE_RECIPE":
            let recipesNew = state.recipes.filter(item => item.id !== action.id);
            return {
                ...state,
                recipes: recipesNew,
                loading: false
            };

    

       
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.user, 
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