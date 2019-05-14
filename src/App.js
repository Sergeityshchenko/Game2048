import React, { Component } from 'react';

import classes from '../src/App.module.css';

import Board from "../src/components/Board/Board";

class App extends Component {
  state = {
   cells: [],
  }
  
  
  
  render() {
    return (
      <div className={classes.App}>
         <Board cells={this.state.cells} />

      </div>
    );
  }
};


export default App;
