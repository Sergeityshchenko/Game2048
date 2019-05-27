import React from 'react';
import classes from './ButtonRight.module.css';

function ButtonRight(props) {
  return (
    <div className={classes.ButtonRight}>
      <div className="buttonR" onClick={() => props.move('right')}>Right</div>
    </div>
  );
}

export default ButtonRight;