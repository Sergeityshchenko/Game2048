import React from 'react';
import classes from './Cells.module.css';

function Cells(props) {
  
  return (
    <div className={classes.Cells}>
    {props.name}
    </div>
  );
}

export default Cells;