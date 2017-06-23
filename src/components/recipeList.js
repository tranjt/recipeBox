import React, { Component } from "react";
import { Accordion, Panel, ListGroup, ListGroupItem, ButtonToolbar, Button  } from 'react-bootstrap';
import RecipeEdit from "./recipeEdit";

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {   id: 1,
                    title: "Pie", 
                    ingredients: ["Butter", "flour", "egg", "bacon"]
                },
                {   
                    id: 2,
                    title: "Cake", 
                    ingredients: ["Butter", "flour", "egg", "Jam"]
                },
                {
                    id: 3,
                    title: "Roast Chicken", 
                    ingredients: ["Butter", "sugar", "salt", "Chicken"]
                }
            ]
        };
    }    
   
    renderRecipes() {        
        return this.state.recipes.map(recipe => {
            return (
                <Panel collapsible header={recipe.title} eventKey={recipe.title} bsStyle="success" key={recipe.title} >                        
                    <ListGroup fill>
                        {
                            recipe.ingredients.map(ingredient => {
                                return (                                     
                                    <ListGroupItem key={ingredient}>{ingredient}</ListGroupItem>
                                );
                            })
                        }
                    </ListGroup>
                    <ButtonToolbar>       
                        <Button bsStyle="danger">
                            Delete
                        </Button>                         
                        <RecipeEdit recipe={recipe}/>
                    </ButtonToolbar>
                </Panel>
            );
        })
    }

    render() {
        return (
            <div>
                <Accordion>
                   {this.renderRecipes.bind(this)()}
                </Accordion>
            </div>
        );
    }
}

export default RecipeList;
