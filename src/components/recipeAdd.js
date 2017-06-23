import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class RecipeAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    closeModal() {
         this.setState({ showModal: false });
    }

    openModal() {
         this.setState({ showModal: true });
    }
    render(){

        return (
            <div>
                <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.openModal.bind(this)}
                >
                Create Recipe
                </Button>

                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    
                        <div>
                            <label>Recipe</label>
                            <input type="text" /> 
                        <div>
                        </div>
                            <label>Ingedients</label>
                            <textarea type="text"/> 
                        </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
        </div>
      )
    }
}


export default RecipeAdd;


