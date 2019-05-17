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
  componentWillMount() {
    this.initBoard();  
    const body = document.querySelector('body');
    body.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  
  handleKeyDown(e) {
    const up = 38;
    const right = 39;
    const down = 40;
    const left = 37
    const n = 78;
    
    if (e.keyCode === up) {
      this.move('up');
    } else if (e.keyCode === right) {
      this.move('right');
    } else if (e.keyCode === down) {
      this.move('down');
    } else if (e.keyCode === left) {
      this.move('left');
    } else if (e.keyCode === n) {
      this.initBoard();
    }
  }
  
  render() {

    return (
      <div className="App">
        <NewGameButton  />
        {/* <Board cells={this.state.cells} initBoard={this.initBoard}/> */}
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
