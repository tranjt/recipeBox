import React, { Component } from "react";
import { Modal, Button, ButtonToolbar, FormGroup, FormControl, ControlLabel  } from "react-bootstrap";
import { connect } from "react-redux";
import { editRecipe, deleteRecipe } from "../actions/index";

class RecipeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            title: this.props.recipe.title,
            ingredients: this.props.recipe.ingredients.join(", ")
        };
    }

    closeModal() {
         this.setState({ showModal: false });
    }

    openModal() {
         this.setState({ showModal: true });
    }

    handleTitleEdit(event) {        
        this.setState({
            title: event.target.value
        });
    }

    handleIngredientsEdit(event) {        
        this.setState({
            ingredients: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();       
        this.props.editRecipe({
            id: this.props.recipe.id,
            title: this.state.title,
            ingredients: this.state.ingredients.split(",")
        });
        this.closeModal();
    }

    render(){        
        return (
            <div>
                <Button bsStyle="warning" onClick={this.openModal.bind(this)}>
                    Edit
                </Button>

                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Recipe</Modal.Title>                       
                    </Modal.Header>
                    <Modal.Body>                     
                        <form onSubmit={this.handleSubmit.bind(this)}> 
                            <FormGroup  controlId="formBasicText" >
                                <ControlLabel>Recipe</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.title}
                                    placeholder="Recipe Name"
                                    onChange={this.handleTitleEdit.bind(this)}
                                />                        
                                <ControlLabel>Ingedients</ControlLabel>
                                <FormControl 
                                    componentClass="textarea" 
                                    placeholder="Enter ingerdients separated by commas." 
                                    value={this.state.ingredients} 
                                    onChange={this.handleIngredientsEdit.bind(this)}/>                        
                                </FormGroup>
                            <ButtonToolbar> 
                                <Button onClick={this.closeModal.bind(this)} className="pull-right">Close</Button>  
                                <Button type="submit" className="pull-right" bsStyle="primary"> Save</Button> 
                            </ButtonToolbar>    
                        </form>     
                    </Modal.Body>                   
                </Modal>
        </div>
      )
    }
}

export default connect(null, { editRecipe, deleteRecipe })(RecipeEdit);
