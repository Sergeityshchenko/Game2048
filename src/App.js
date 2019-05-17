import React, { Component } from 'react';

import classes from '../src/App.module.css';

import Board from "../src/components/Board/Board";
import NewGameButton from '../src/components/NewGameButton/NewGameButton';

class App extends Component {
  state = {
   cells: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
  }

   


  // initBoard() {
  //   let cells = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  //   cells = this.placeRandom(this.placeRandom(cells));
  //   this.setState({cells});  
  // }
  
  // getBlankCoordinates(cells) {
  //   const blankCoordinates = [];
    
  //   for (let r = 0; r < cells.length; r++) {
  //     for (let c = 0; c < cells[r].length; c++) {
  //       // if (cells[r][c] === 0){
  //       //   blankCoordinates.push([r, c])
  //       // }
  //     }
  //   }
            
  //   return blankCoordinates;
  // }

  // randomStartingNumber() {
  //   const startingNumbers = [2,4];
  //   const randomNumber = startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
  //   return randomNumber;
  // }
  // //placeRandom(cells) {
  //   const blankCoordinates = this.getBlankCoordinates(cells);
  //   const randomCoordinate = blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];
  //   const randomNumber = this.randomStartingNumber();
  //   cells[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;

    
  //   return cells;
  //}
  
  render() {

    return (
      <div className={classes.App}>
        <NewGameButton  />
        <Board cells={this.state.cells} initBoard={this.initBoard}/>
         
      </div>
    );
  }
};


export default App;
