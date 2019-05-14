import React from 'react';
import classes from './Cells.module.css';

function Cells(props) {
  
  return (
    <div className={classes.Cells}>
       <div onChange={(number) => props.initStartingNumber(number)}>
         <p>
        {props.number}
         </p>
        </div>
    </div>
  );
}

export default Cells;