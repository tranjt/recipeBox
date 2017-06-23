
export function getRecipes() {
     return {
        recipes: JSON.parse(localStorage.getItem("recipes")) || []
     };
}

export function addRecipeLocal(recipe) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];    
    localStorage.setItem("recipes", JSON.stringify([...recipes, recipe]));
}

export function editRecipeLocal(recipe) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes = recipes.map(rep => {                    
            if (rep.id === recipe.id) {
                return recipe;
            }
            else return rep;
        });
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

export function deleteRecipeLocal(id) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes  = recipes.filter(recipe => recipe.id !== id )
    localStorage.setItem("recipes", JSON.stringify(recipes));
}
