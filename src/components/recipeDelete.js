import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, ControlLabel, ButtonToolbar } from "react-bootstrap";
import { deleteRecipe } from "../actions/index";

class RecipeDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,            
        };
    }
    
    closeModal() {
         this.setState({ showModal: false });
    }

    openModal() {
         this.setState({ showModal: true });
    }
    
    handleDelete() {        
        this.props.deleteRecipe(this.props.recipeID);
        this.closeModal();
    }

    render() {
        return (
            <div >
                <Button bsStyle="danger" onClick={this.openModal.bind(this)} className="deleteButton">
                    Delete
                </Button>

                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Recipe</Modal.Title>                       
                    </Modal.Header>
                    <Modal.Body>                   
                         Are you sure you want to delete this recipe?                              
                            <ButtonToolbar> 
                                <Button onClick={this.closeModal.bind(this)} className="pull-right">Close</Button>  
                                <Button onClick={this.handleDelete.bind(this)} className="pull-right" bsStyle="danger"> Delete</Button> 
                            </ButtonToolbar>                           
                    </Modal.Body>                   
                </Modal>
            </div>
        );
    }
}

export default connect(null, { deleteRecipe })(RecipeDelete);