import { combineReducers } from 'redux';
import RecipeListReducer from "./recipeListReducer";

const rootReducer = combineReducers({
  recipesList: RecipeListReducer
});

export default rootReducer;
