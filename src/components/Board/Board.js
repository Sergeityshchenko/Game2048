import React from 'react';
import classes from './Board.module.css';
import Cell from '../Board/Cells/Cells';


function Board(props) {

  return (
    
    <div className={classes.Board}>
    
      <div className="f">{props.cells}</div>
      <div className='2'>{props.cells}</div>
      <div className='3'>{props.cells}</div>
      <div className='4'>{props.cells}</div>
      <div className="f">{props.cells}</div>
      <div className='2'>{props.cells} </div>
      <div className='3'>{props.cells}</div>
      <div className='4'>{props.cells}</div>
      <div className="f">{props.cells}</div>
      <div className='2'>{props.cells}</div>
      <div className='3'>{props.cells}</div>
      <div className='4'>{props.cells}</div>
      <div className="f">{props.cells}</div>
      <div className='2'>{props.cells}</div>
      <div className='3'>{props.cells}</div>
      <div className='4'>{props.cells}</div>
      
      
      <Cell cells={props.cells}/>
    </div>
  );
}

export default Board;