import React from 'react';
import classes from './Cells.module.css';

function Cells(props) {
  
  return (
    <div className={classes.Cells}>
       <div>
         <p>
          {props.number}
         </p>
        </div>
    </div>
  );
}

export default Cells;