import React, { Component } from "react";
import { Modal, Button,ButtonToolbar,  FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { addRecipe } from "../actions/index";

class RecipeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            title: "",
            ingerdients: ""
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
        this.props.addRecipe({
            id: new Date().valueOf(),
            title: this.state.title,
            ingredients: this.state.ingredients.split(",")
        });
        this.setState({
            title: "",
            ingredients:""
        });
        this.closeModal();
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
                        <form onSubmit={this.handleSubmit.bind(this)}> 
                            <FormGroup  controlId="formBasicText" >
                                <ControlLabel>Recipe</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
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
                                <Button type="submit" className="pull-right" bsStyle="primary"> Create</Button> 
                            </ButtonToolbar>    
                        </form>                                            
                    </Modal.Body>
                   
                </Modal>
        </div>
      )
    }
}

export default connect(null, { addRecipe })(RecipeAdd);
