import React, { Component } from 'react';

import './App.css';
//import Board from "../src/components/Board/Board";
import NewGameButton from '../src/components/NewGameButton/NewGameButton';
import Row from '../src/components/Row/Row';


class App extends Component {
  state = {
   cells: null,
   score: 0
  }

  initBoard() {
    let cells = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    cells = this.placeRandom(this.placeRandom(cells));
    this.setState({cells, score: 0});  
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

  cellsMoved(original, updated) {
    return (JSON.stringify(updated) !== JSON.stringify(original)) ? true : false;
  }

  move(direction) {
    if (direction === 'up') {
      const movedUp = this.moveUp(this.state.cells);
      if (this.cellsMoved(this.state.cells, movedUp.cells)) {
        let score = this.state.score;
        const upWithRandom = this.placeRandom(movedUp.cells);
          
        this.setState({cells: upWithRandom,
           score: score += movedUp.score});  
           
      } 
    } else if (direction === 'down') {
      const movedDown = this.moveDown(this.state.cells);
      if (this.cellsMoved(this.state.cells, movedDown.cells)) {
        let score = this.state.score;
        const downWithRandom = this.placeRandom(movedDown.cells);

        this.setState({cells: downWithRandom,
           score: score += movedDown.score});
      }

    } else if (direction === 'left') {
      const movedLeft = this.moveLeft(this.state.cells);
      if (this.cellsMoved(this.state.cells, movedLeft.cells)) {
        let score = this.state.score;
        const leftWithRandom = this.placeRandom(movedLeft.cells);

        this.setState({cells: leftWithRandom,
           score: score += movedLeft.score});
      }
    } else if (direction === 'right') {
      const movedRight = this.moveRight(this.state.cells);
      if (this.cellsMoved(this.state.cells, movedRight.cells)) {
        let score = this.state.score;
        const rightWithRandom = this.placeRandom(movedRight.cells);

        this.setState({cells: rightWithRandom, 
          score: score += movedRight.score});
      }
    }
}  

moveUp(inputBoard) {
  let rotatedRight = this.rotateRight(inputBoard);
  let cells = [];
  let score = 0;

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
        score += cells[r][c];
      } else if (cells[r][c] === 0 && cells[r][c - 1] > 0) {
        cells[r][c] = cells[r][c - 1];
        cells[r][c - 1] = 0;
      }
    }
  }
  cells = this.rotateLeft(cells);

  return {cells, score};
}

moveDown(inputBoard) {
  let rotatedRight = this.rotateRight(inputBoard);
  let cells = [];
  let score = 0; 

  for (let r = 0; r < rotatedRight.length; r++) {
    let row = [];      
    for (let c = rotatedRight[r].length - 1; c >= 0; c--) {
      let current = rotatedRight[r][c];
      (current === 0) ? row.push(current) : row.unshift(current);
    }
    cells.push(row);
    console.log(cells);
  }

  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells.length; c++) {
      if (cells[r][c] > 0 && cells[r][c] === cells[r][c + 1]) {
        cells[r][c] = cells[r][c] * 2;
        cells[r][c + 1] = 0;
        score += cells[r][c];
      } else if (cells[r][c] === 0 && cells[r][c + 1] > 0) {
        cells[r][c] = cells[r][c + 1];
        cells[r][c + 1] = 0;
      }
    }
  }

  cells = this.rotateLeft(cells);

  return {cells, score};
}

moveLeft(inputBoard) {
  let cells = [];
  let score = 0;

  for (let r = 0; r < inputBoard.length; r++) {
    let row = [];      
    for (let c = inputBoard[r].length - 1; c >= 0; c--) {
      let current = inputBoard[r][c];
      (current === 0) ? row.push(current) : row.unshift(current);
    }
    cells.push(row);
  }

  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells.length; c++) {
      if (cells[r][c] > 0 && cells[r][c] === cells[r][c + 1]) {
        cells[r][c] = cells[r][c] * 2;
        cells[r][c + 1] = 0;
        score += cells[r][c];
      } else if (cells[r][c] === 0 && cells[r][c + 1] > 0) {
        cells[r][c] = cells[r][c + 1];
        cells[r][c + 1] = 0;
      }
    }
  }
  
  return {cells, score};
}
moveRight(inputBoard) {
  let cells = [];
  let score = 0;

  for (let r = 0; r < inputBoard.length; r++) {
    let row = [];      
    for (let c = 0; c < inputBoard[r].length; c++) {
      let current = inputBoard[r][c];
      (current === 0) ? row.unshift(current) : row.push(current);
    }
    cells.push(row);
  }

  for (let r = 0; r < cells.length; r++) {
    for (let c = cells[r].length - 1; c >= 0; c--) {
      if (cells[r][c] > 0 && cells[r][c] === cells[r][c - 1]) {
        cells[r][c] = cells[r][c] * 2;
        cells[r][c - 1] = 0;
        score += cells[r][c];
      } else if (cells[r][c] === 0 && cells[r][c - 1] > 0) {
        cells[r][c] = cells[r][c - 1];
        cells[r][c - 1] = 0;
      }
    }
  }

  return {cells, score};
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
  }

  render() {
    return (
      <div className="App">
        
        <NewGameButton />
        <div className="button" onClick={() => {this.initBoard()}}>New Game</div>

        <div className="scoreBoard">
           <div>Score: {this.state.score} !</div>
        </div> 

        <div className="button" onClick={() => {this.move('up')}}>Up</div> 
        <div className="board">
           <div className="buttonL" onClick={() => {this.move('left')}}>Left</div>
         <div>
          <table>
            {this.state.cells.map((row, i) => (<Row   key={i} row={row} />))}
          </table>
         </div>
         <div className="buttonR" onClick={() => {this.move('right')}}>Right</div>
        </div>
        <div className="button" onClick={() => {this.move('down')}}>Down</div>

      </div>
    );
  }
};

export default App;