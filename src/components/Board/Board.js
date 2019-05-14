import React from 'react';
import classes from './Board.module.css';

import Cells from '../Board/Cells/Cells';


function Board(props) {
  
  return (
    
    <div className={classes.Board}>
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
      <Cells number={props.cells}></Cells>
      
    </div>
  );
}

export default Board;