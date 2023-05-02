import { prompt } from '../prompt.js'

// Implement the game of tic-tac-toe
// See https://en.wikipedia.org/wiki/Tic-tac-toe

// 1. Create a 3x3 grid and use the printGrid function to print it
// 2. Ask the user to enter the coordinates of the cell they want to mark (x and y in 2 separate prompts)
// 3. If the cell is already marked, print "This cell is already marked"
// 4. If the coordinates are invalid, print "Invalid coordinates"
// 5. Repeat steps 2-4 until the grid is full

// In order to make this easier for yourself, write 2 functions:
//
// 1. markCell(x, y, player) - marks the cell at the given coordinates with the given player.
//                             If the cell is already marked, return false.
//                             If the coordinates are invalid, return false.
//                             Otherwise, return true.
//
// 2. checkWin() - returns the player that has won the game.
//                 If there is no winner yet, return undefined.

// You can use the following variables:
let grid = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

let player = "X"; // the player that has to mark the next cell (either "X" or "O")

printGrid();


// function markCell(x, y, player) ...


function printGrid() {
    console.log("  0 1 2");
    for(let y = 0; y < 3; y++) {
        let row = y + " ";
        for(let x = 0; x < 3; x++) {
            row += grid[y][x] + " ";
        }

        console.log(row);
    }

    console.log("Next player: " + player);
}















// Please do not change the code below. This code is used for testing your solution.
const changeGrid = (newGrid) => grid = newGrid

export {
    grid, markCell, checkWin, changeGrid
}