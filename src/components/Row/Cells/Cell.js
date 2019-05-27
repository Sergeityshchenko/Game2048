import React from 'react';
import classes from './Cell.module.css';

function Cell(props) {
  let value = (props.cellValue === 0) ? '' : (props.cellValue);

  return (
    <td className={classes.Cell}>
      <div className={classes.Cells}>
        <div className={classes.Number}>{value}</div>
      </div>
    </td>
  );
}

export default Cell;