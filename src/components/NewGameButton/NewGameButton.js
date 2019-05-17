import React from 'react';
import classes from './NewGameButton.module.css';

function NewGameButton(props) {
  return (
    <div className={classes.NewGameButton}>
    <div><h1>2048 GAME</h1></div>
    <div><button>New Game</button></div>
    </div>
  );
}

export default NewGameButton;