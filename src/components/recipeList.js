import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Panel, ListGroup, ListGroupItem, ButtonToolbar, Button  } from 'react-bootstrap';
import { addRecipes } from "../actions/index";
import RecipeEdit from "./recipeEdit";

class RecipeList extends Component {

    componentWillMount() {
        this.props.addRecipes();
    }
   
    renderRecipes() {                
        return this.props.recipes.map(recipe => {
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

function mapStateToProps(state) {    
    return { recipes: state.recipesList.recipes };
}

export default connect(mapStateToProps, { addRecipes })(RecipeList);
