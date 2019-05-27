import React from 'react';
import classes from './Row.module.css';

import Cell from './Cells/Cell';


function Row({ row }) {
  return (
    
    <tbody className={classes.Row}>
     <tr>
      {row.map((cell, i) => (<Cell key={i} cellValue={cell} />))}
    </tr>
    </tbody>
    
  );
}

export default Row;