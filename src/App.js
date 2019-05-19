import React, { Component } from 'react';

import './App.css';
//import Board from "../src/components/Board/Board";
import NewGameButton from '../src/components/NewGameButton/NewGameButton';


class App extends Component {
  state = {
   cells: null,
  }

  initBoard() {
    let cells = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    cells = this.placeRandom(this.placeRandom(cells));
    this.setState({cells});  
  }
  
  getBlankCoordinates(cells) {
    const blankCoordinates = [];
    
    for (let r = 0; r < cells.length; r++) {
      for (let c = 0; c < cells[r].length; c++) {
        if (cells[r][c] === 0){
          blankCoordinates.push([r, c])
        }
      }
    }
            
    return blankCoordinates;
  }

  randomStartingNumber() {
    const startingNumbers = [2,4];
    const randomNumber = startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
    return randomNumber;
  }
  placeRandom(cells) {
    const blankCoordinates = this.getBlankCoordinates(cells);
    const randomCoordinate = blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];
    const randomNumber = this.randomStartingNumber();
    cells[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;

    
    return cells;
  }

  boardMoved(original, updated) {
    return (JSON.stringify(updated) !== JSON.stringify(original)) ? true : false;
  }

  move(direction) {
    if (!this.state.gameOver) {
      if (direction === 'up') {
        const movedUp = this.moveUp(this.state.cells);
        if (this.boardMoved(this.state.board, movedUp.cells)) {

        }
      } 
  }
}

  moveUp(inputBoard) {
    let rotatedRight = this.rotateRight(inputBoard);
    let cells = [];

    for (let r = 0; r < rotatedRight.length; r++) {
      let row = [];
      for (let c = 0; c < rotatedRight[r].length; c++) {
        let current = rotatedRight[r][c];
        (current === 0) ? row.unshift(current) : row.push(current);
      }
      cells.push(row);
    }

    for (let r = 0; r < cells.length; r++) {
      for (let c = cells[r].length - 1; c >= 0; c--) {
        if (cells[r][c] > 0 && cells[r][c] === cells[r][c - 1]) {
          cells[r][c] = cells[r][c] * 2;
          cells[r][c - 1] = 0;
        } else if (cells[r][c] === 0 && cells[r][c - 1] > 0) {
          cells[r][c] = cells[r][c - 1];
          cells[r][c - 1] = 0;
        }
      }
    }
    cells = this.rotateLeft(cells);

    return {cells};
  }


  rotateRight(matrix) {
    let result = [];
	
  	for (let c = 0; c < matrix.length; c++) {
	  	let row = [];
	  	for (let r = matrix.length - 1; r >= 0; r--) {
			  row.push(matrix[r][c]);
		  }
      result.push(row);
	  }
	
	  return result;
  }

  rotateLeft(matrix) {
  	let result = [];

    for (let c = matrix.length - 1; c >= 0; c--) {
      let row = [];
      for (let r = matrix.length - 1; r >= 0; r--) {
        row.unshift(matrix[r][c]);
      }
      result.push(row);
    }

    return result;
  }
  
  componentWillMount() {
    this.initBoard(); 
    const body = document.querySelector('body');
    body.addEventListener('keydown', this.handleKeyDown.bind(this)); 
  }
  handleKeyDown(e) {
    const up = 38;
    
    if (e.keyCode === up) {
      this.move('up');
    }
  }

  render() {
    return (
      <div className="App">
        
        <NewGameButton  />
        <div className="button" onClick={() => {this.initBoard()}}>New Game</div>
          <div className="button" onClick={() => {this.move('up')}}>Up</div>
        <table>
          {this.state.cells.map((row, i) => (<Row   key={i} row={row} />))}
        </table>
        
      </div>
    );
  }
};

const Row = ({ row }) => {
  return (
    <tbody>
     <tr>
      {row.map((cell, i) => (<Cell key={i} cellValue={cell} />))}
    </tr>
    </tbody>
  );
};

const Cell = ({ cellValue }) => {
  let color = 'cell';
  let value = (cellValue === 0) ? '' : cellValue;
  if (value) {
    color += ` color-${value}`;
  }

  return (
    <td>
      <div className={color}>
        <div className="number">{value}</div>
      </div>
    </td>
  );
};


export default App;