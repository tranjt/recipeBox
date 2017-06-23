import { getRecipes, addRecipeLocal, deleteRecipeLocal, editRecipeLocal } from "../api/api";

export const ADD_RECIPES = "ADD_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

export function addRecipes() {            
    return {
        type: ADD_RECIPES,
        payload: getRecipes()
    };
}

export function addRecipe(recipe) {
    addRecipeLocal(recipe);
    return {
        type: ADD_RECIPE,
        payload: recipe
    };
}

export function editRecipe(recipe) {  
    editRecipeLocal(recipe); 
    return {
        type: EDIT_RECIPE,
        payload: recipe
    };
}

export function deleteRecipe(id) {   
    deleteRecipeLocal(id); 
    return {
        type: DELETE_RECIPE,
        payload: id
    };
}