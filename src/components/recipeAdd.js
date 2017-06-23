import React, { Component } from "react";
import { Modal, Button,ButtonToolbar,  FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
                        <form> 
                            <FormGroup  controlId="formBasicText" >
                                <ControlLabel>Recipe</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Recipe Name"
                                    onChange={this.handleChange}
                                />                        
                                <ControlLabel>Ingedients</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Enter ingerdients separated by commas." />                        
                            </FormGroup>
                            <ButtonToolbar> 
                                <Button onClick={this.closeModal.bind(this)} className="pull-right">Close</Button>  
                                <Button type="submit" className="pull-right" bsStyle="primary"> Create</Button> 
                            </ButtonToolbar>    
                        </form>                                            
                    </Modal.Body>
                   
                </Modal>
        </div>
      )
    }
}

export default RecipeAdd;
