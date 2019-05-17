import React from 'react';
import classes from './Board.module.css';

import Cells from '../Board/Cells/Cells';


function Board(props) {
  let cells1 = null;
  for (let i = 0; i < props.cells.length; i++) {
    // props.cells[i].map(x => {
    //   cells = (<Cells number={x}></Cells>)
    // })
    console.log(props.cells[i]);
    const array = props.cells[i];
    for (let i = 0; i < array[i].length; i++) {
      
      cells1 = (<Cells number={array[i]}></Cells>)
    }
  };

  console.log(cells1)
  return (
    
    <div className={classes.Board}>
      <Cells number={props.cells} > </Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      <Cells number={props.cells}></Cells>
      
    </div>
  );
}

export default Board;