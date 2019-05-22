import React from 'react';
import classes from './Cell.module.css';

function Cell(props) {
  let color = 'cell';
  let value = (props.cellValue === 0) ? '' : (props.cellValue);
  if (value) {
    color += ` color-${value}`;
  }

  return (
    <td className={classes.Cell}>
      <div className={color}>
        <div className="number">{value}</div>
      </div>
    </td>
  );
}

export default Cell;