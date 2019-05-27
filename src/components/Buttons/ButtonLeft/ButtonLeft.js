import React from 'react';
import classes from './ButtonLeft.module.css';

function ButtonLeft(props) {
  return (
    <div className={classes.ButtonLeft}>
      <div className="buttonL" onClick={() => props.move('left')}>Left</div>
    </div>
  );
}

export default ButtonLeft;