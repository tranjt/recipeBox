import { ADD_RECIPES, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "../actions/index";


const INITIAL_STATE = { recipes: [] };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_RECIPES: 
            return {                
                recipes: [...state.recipes, ...action.payload.recipes]
            };
        case ADD_RECIPE:
            return  {
                recipes: [...state.recipes, action.payload]
            };   
        case EDIT_RECIPE:
            return {
                recipes: state.recipes.map(recipe => {                    
                    if (recipe.id === action.payload.id) {
                        return action.payload;
                    }
                    else return recipe;
                })
            };
        case DELETE_RECIPE:             
            return {
                recipe: state.recipes.filter(recipe => {
                    return recipe.id !== action.payload.id                    
                })
            };
        default:
            return state;
    }
}