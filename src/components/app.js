import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import RecipeList from "./recipeList";
import RecipeAdd from "./recipeAdd";

export default class App extends Component {

  render() {
    return (
      <Panel>
        <RecipeList />
        <RecipeAdd />
      </Panel>
    );
  }
}
