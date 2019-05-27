import React from 'react';
import classes from './ButtonUp.module.css';

function ButtonUp(props) {
  return (
    <div className={classes.ButtonUp}>
      <div className="button" onClick={() => props.move('up')}>Up</div>
    </div>
  );
}

export default ButtonUp;