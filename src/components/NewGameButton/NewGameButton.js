import React from 'react';
import classes from './NewGameButton.module.css';

function NewGameButton(props) {
  return (
    <div className={classes.NewGameButton}>
    <h1>2048 GAME</h1>
    {/* <div onClick={props.initBoard()}>New game</div> */}
    </div>
  );
}

export default NewGameButton;