import React, { Component } from 'react';
import classes from './Buttons.module.css';

// import ButtonUp from '../Buttons/ButtonUp/ButtonUp';
// import ButtonDown from '../Buttons/ButtonDown/ButtonDown';
// import ButtonLeft from '../Buttons/ButtonLeft/ButtonLeft';
// import ButtonRight from '../Buttons/ButtonRight/ButtonRight';



// class Buttons extends Component {

//   move(direction) {
//     let cell = this.props.cells;
//     if (direction === 'up') {
//       const movedUp = this.moveUp(cell);
//       if (this.cellsMoved(cell, movedUp.cells)) {
//         let score = this.props.score;
//         const upWithRandom = this.props.placeRandom(movedUp.cells);
          
//         this.setState({cells: upWithRandom,
//            score: score += movedUp.score});  
           
//       } 
//     } else if (direction === 'down') {
//       const movedDown = this.moveDown(cell);
//       if (this.cellsMoved(cell, movedDown.cells)) {
//         let score = this.props.score;
//         const downWithRandom = this.props.placeRandom(movedDown.cells);

//         this.setState({cells: downWithRandom,
//            score: score += movedDown.score});
//       }

//     } else if (direction === 'left') {
//       const movedLeft = this.moveLeft(cell);
//       if (this.cellsMoved(cell, movedLeft.cells)) {
//         let score = this.props.score;
//         const leftWithRandom = this.props.placeRandom(movedLeft.cells);

//         this.setState({cells: leftWithRandom,
//            score: score += movedLeft.score});
//       }
//     } else if (direction === 'right') {
//       const movedRight = this.moveRight(cell);
//       if (this.cellsMoved(cell, movedRight.cells)) {
//         let score = this.props.score;
//         const rightWithRandom = this.props.placeRandom(movedRight.cells);

//         this.setState({cells: rightWithRandom, 
//           score: score += movedRight.score});
//       }
//     }
// } 

// moveUp(inputBoard) {
//   let rotatedRight = this.rotateRight(inputBoard);
//   let cells = [];
//   let score = 0;

//   for (let r = 0; r < rotatedRight.length; r++) {
//     let row = [];
//     for (let c = 0; c < rotatedRight[r].length; c++) {
//       let current = rotatedRight[r][c];
//       (current === 0) ? row.unshift(current) : row.push(current);
      
//     }
//     cells.push(row);
//   }

//   for (let r = 0; r < cells.length; r++) {
//     for (let c = cells[r].length - 1; c >= 0; c--) {
//       if (cells[r][c] > 0 && cells[r][c] === cells[r][c - 1]) {
//         cells[r][c] = cells[r][c] * 2;
//         cells[r][c - 1] = 0;
//         score += cells[r][c];
//       } else if (cells[r][c] === 0 && cells[r][c - 1] > 0) {
//         cells[r][c] = cells[r][c - 1];
//         cells[r][c - 1] = 0;
//       }
//     }
//   }
//   cells = this.rotateLeft(cells);

//   return {cells, score};
// }
// moveDown(inputBoard) {
//   let rotatedRight = this.rotateRight(inputBoard);
//   let cells = [];
//   let score = 0; 

//   for (let r = 0; r < rotatedRight.length; r++) {
//     let row = [];      
//     for (let c = rotatedRight[r].length - 1; c >= 0; c--) {
//       let current = rotatedRight[r][c];
//       (current === 0) ? row.push(current) : row.unshift(current);
//     }
//     cells.push(row);
//   }

//   for (let r = 0; r < cells.length; r++) {
//     for (let c = 0; c < cells.length; c++) {
//       if (cells[r][c] > 0 && cells[r][c] === cells[r][c + 1]) {
//         cells[r][c] = cells[r][c] * 2;
//         cells[r][c + 1] = 0;
//         score += cells[r][c];
//       } else if (cells[r][c] === 0 && cells[r][c + 1] > 0) {
//         cells[r][c] = cells[r][c + 1];
//         cells[r][c + 1] = 0;
//       }
//     }
//   }

//   cells = this.rotateLeft(cells);

//   return {cells, score};
// }

// moveLeft(inputBoard) {
//   let cells = [];
//   let score = 0;

//   for (let r = 0; r < inputBoard.length; r++) {
//     let row = [];      
//     for (let c = inputBoard[r].length - 1; c >= 0; c--) {
//       let current = inputBoard[r][c];
//       (current === 0) ? row.push(current) : row.unshift(current);
//     }
//     cells.push(row);
//   }

//   for (let r = 0; r < cells.length; r++) {
//     for (let c = 0; c < cells.length; c++) {
//       if (cells[r][c] > 0 && cells[r][c] === cells[r][c + 1]) {
//         cells[r][c] = cells[r][c] * 2;
//         cells[r][c + 1] = 0;
//         score += cells[r][c];
//       } else if (cells[r][c] === 0 && cells[r][c + 1] > 0) {
//         cells[r][c] = cells[r][c + 1];
//         cells[r][c + 1] = 0;
//       }
//     }
//   }
  
//   return {cells, score};
// }
// moveRight(inputBoard) {
//   let cells = [];
//   let score = 0;

//   for (let r = 0; r < inputBoard.length; r++) {
//     let row = [];      
//     for (let c = 0; c < inputBoard[r].length; c++) {
//       let current = inputBoard[r][c];
//       (current === 0) ? row.unshift(current) : row.push(current);
//     }
//     cells.push(row);
//   }

//   for (let r = 0; r < cells.length; r++) {
//     for (let c = cells[r].length - 1; c >= 0; c--) {
//       if (cells[r][c] > 0 && cells[r][c] === cells[r][c - 1]) {
//         cells[r][c] = cells[r][c] * 2;
//         cells[r][c - 1] = 0;
//         score += cells[r][c];
//       } else if (cells[r][c] === 0 && cells[r][c - 1] > 0) {
//         cells[r][c] = cells[r][c - 1];
//         cells[r][c - 1] = 0;
//       }
//     }
//   }

//   return {cells, score};
// }

// rotateRight(matrix) {
//   let result = [];

//   for (let c = 0; c < matrix.length; c++) {
//     let row = [];
//     for (let r = matrix.length - 1; r >= 0; r--) {
//       row.push(matrix[r][c]);
//     }
//     result.push(row);
//   }

//   return result;
// }

//   rotateLeft(matrix) {
//   	let result = [];

//     for (let c = matrix.length - 1; c >= 0; c--) {
//       let row = [];
//       for (let r = matrix.length - 1; r >= 0; r--) {
//         row.unshift(matrix[r][c]);
//       }
//       result.push(row);
//     }

//     return result;
//   }
  
//   render() {
//     return (
//       <div className={classes.Buttons}>
//          <ButtonUp move={this.move}/>
//          <ButtonDown move={this.move}/>
//          <ButtonLeft move={this.move}/>
//          <ButtonRight move={this.move}/>
//       </div>
//     );
//   }
// }

export default Buttons;