import React, { Component } from "react";
import { Accordion, Panel, ListGroup, ListGroupItem  } from 'react-bootstrap';
class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {
                    title: "Pie", 
                    ingredients: ["Butter", "flour", "egg", "bacon"]
                },
                {
                    title: "Cake", 
                    ingredients: ["Butter", "flour", "egg", "Jam"]
                },
                {
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

  
