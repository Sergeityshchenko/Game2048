import React from 'react';
import classes from './ButtonDown.module.css';

function ButtonDown(props) {
  return (
    <div className={classes.ButtonDown}>
      <div className="button" onClick={() => props.move('down')}>Down</div>
    </div>
  );
}

export default ButtonDown;