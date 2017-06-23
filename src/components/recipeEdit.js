import React, { Component } from "react";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";

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
        console.log(this.state.title);
        console.log(this.state.ingredients);
        this.closeModal();
    }

    render(){        
        return (
            <div>
                <Button
                bsStyle="warning"                
                onClick={this.openModal.bind(this)}
                >
                Edit
                </Button>

                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Recipe</Modal.Title>                       
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div>                            
                                <label>Recipe {this.props.recipe.id}</label>
                                <input type="text" value={this.state.title} onChange={this.handleTitleEdit.bind(this)}/ > 
                            <div>
                            </div>
                                <label>Ingedients</label>
                                <textarea type="text" value={this.state.ingredients} onChange={this.handleIngredientsEdit.bind(this)}/>  
                            </div>
                            <ButtonToolbar>                                 
                                <Button onClick={this.closeModal.bind(this)} className="pull-right">Close</Button>
                                <Button type="submit" className="pull-right">Save</Button>
                            </ButtonToolbar>
                        </form>                        
                    </Modal.Body>                   
                </Modal>
        </div>
      )
    }
}
//do on change  controlled input
//change to form?
//do save

export default RecipeEdit;

