import React, { Component } from 'react';

import classes from '../src/App.module.css';

import Board from "../src/components/Board/Board";

class App extends Component {
  state = {
   cells: [],
  }

  initBoard() {
    let cells = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    cells = this.placeRandom(this.placeRandom(cells));
    this.setState({cells});  
  }
  
  getBlankCoordinates(board) {
    const blankCoordinates = [];
    
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === 0) {blankCoordinates.push([r, c])}
      }
    }
            
    return blankCoordinates;
  }

  randomStartingNumber() {
    const startingNumbers = [2,4];
    const randomNumber = startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
    return randomNumber;
  }

  placeRandom(board) {
    const blankCoordinates = this.getBlankCoordinates(board);
    const randomCoordinate = blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];
    const randomNumber = this.randomStartingNumber();
    board[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;
    return board;
  }
  
  render() {

    return (
      <div className={classes.App}>
         <Board cells={this.state.cells} initStartingNumber={this.randomStartingNumber}/>

      </div>
    );
  }
};


export default App;
