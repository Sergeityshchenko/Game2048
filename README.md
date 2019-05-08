# Description of creation game "2048" on React

The main of this project :
   

 - Use of knowledge gained during the course.
 - Creating the game itself with React.
 
 # More about the game.




> The game will be presented in the form of a standard table.
> This table will have sixteen cells. Inside each of them will be numbers (initial: "2, 4").
> When you press the control keys, the cell values will change.
> # Example: " 2 + 2 => 4 + 4 => ... +512 => 1024 + 1024 => 2048"  _You are win!_

### Purpose of this game

- Dial 2048 of the cells.
- Fun to kill time.


# Project structure.

### Components.

* Buttons => "Game contols buttons" 
* * ButtonLeft => "All cells will move to Left side"
* * ButtonDown => "All cells will move to Down side"
* * ButtonUp => "All cells will move to Up side"
* * ButtonRight => "All cells will move to Right side"

* NewGameButton
 
* Cells
* * 1
* * 2
* * 3
* * 4
* * 5
* * 6
* * 7
* * 8
* * 9
* * 10
* * 11
* * 12
* * 13
* * 14
* * 15
* * 16

>
All cells on the board(1, 2, 3, 4 ...). 

* Board => "This is where all the cells will be."

### Containers.

* ButtonsControl => "Control over the control buttons."
* NewGameButtonControl => "Control over the button "New Game"."
* BoardContol
* CellsControl
 