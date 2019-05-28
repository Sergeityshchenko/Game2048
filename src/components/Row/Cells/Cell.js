import React from "react";
import "./Cell.css";

function Cell(props) {
  let color = 'Cell';
  let value = (props.cellValue === 0) ? "" : (props.cellValue);
  if (value) {
    color  += ` color${value}`;
  }

  return (
    <td>
      <div className={color}>
        <div className="Number">{value}</div>
      </div>
    </td>
  );
}

export default Cell;
