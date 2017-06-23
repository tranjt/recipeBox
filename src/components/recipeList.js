import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Panel, ListGroup, ListGroupItem, ButtonToolbar, Button  } from 'react-bootstrap';
import { addRecipes } from "../actions/index";
import RecipeEdit from "./recipeEdit";
import RecipeDelete from "./recipeDelete";

class RecipeList extends Component {

    componentWillMount() {
        this.props.addRecipes();
    }
   
    renderRecipes() {                

        if (!this.props.recipes) {
            return (
                <Panel collapsible header="No recipes" eventKey="No recipes" bsStyle="success" key="No recipes"  >                  
                </Panel>
            );
        }

        return this.props.recipes.map(recipe => {
            return (
                <Panel collapsible header={recipe.title} eventKey={recipe.title} bsStyle="success" key={recipe.title}  >                        
                    <ListGroup >
                        {
                            recipe.ingredients.map(ingredient => {
                                return (                                     
                                    <ListGroupItem key={ingredient}>{ingredient}</ListGroupItem>
                                );
                            })
                        }
                    </ListGroup>
                    <ButtonToolbar>                               
                        <RecipeDelete recipeID={recipe.id} />                                          
                        <RecipeEdit recipe={recipe} />
                    </ButtonToolbar>
                </Panel>
            );
        })
    }

    render() {
        return (
            <div>
                <Accordion >
                    <h2>Recipes</h2>
                   {this.renderRecipes.bind(this)()}
                </Accordion>
            </div>
        );
    }
}

function mapStateToProps(state) {    
    return { recipes: state.recipesList.recipes };
}

export default connect(mapStateToProps, { addRecipes })(RecipeList);
