import React, { Component } from 'react';

import classes from '../src/App.module.css';

import Cells from "../src/components/Board/Cells/Cells";

import ButtonLeft from "../src/components/Buttons/ButtonLeft/ButtonLeft";
import ButtonDown from "../src/components/Buttons/ButtonDown/ButtonDown";
import ButtonUp from "../src/components/Buttons/ButtonUp/ButtonUp";
import ButtonRight from "../src/components/Buttons/ButtonRight/ButtonRight";


class App extends Component {
  state = {
    value: null,
  }

  ChangeValue () {
    if(!this.state.value > 0) {
      
    }
    else {}
  }
  
  render() {
    return (
      <div className={classes.App}>
       <Cells  name={this.state.value} /> 

      <ButtonLeft />
      <ButtonDown />
      <ButtonUp />
      <ButtonRight />

      </div>
    );
  }
}

export default App;
