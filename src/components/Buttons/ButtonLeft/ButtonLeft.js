import React from 'react';
import classes from './ButtonLeft.module.css';

function ButtonLeft(props) {
  return (
    <div className={classes.ButtonLeft}>
      <button onClick={event => props.Changed('name', event.target.value)}>Left</button>
    </div>
  );
}

export default ButtonLeft;