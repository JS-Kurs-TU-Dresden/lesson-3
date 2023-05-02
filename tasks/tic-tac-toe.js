import { prompt } from '../prompt.js'

// Implement the game of tic-tac-toe
// See https://en.wikipedia.org/wiki/Tic-tac-toe

// 1. Create a 3x3 grid and use the printGrid function to print it
// 2. Ask the user to enter the coordinates of the cell they want to mark (x and y in 2 separate prompts)
// 3. If the cell is already marked, print "This cell is already marked"
// 4. If the coordinates are invalid, print "Invalid coordinates"
// 5. Repeat steps 2-4 until the grid is full

// In order to make this easier for yourself, write 2 functions:
// 1. markCell(x, y, player) - marks the cell at the given coordinates with the given player. If the cell is already marked, return false. If the coordinates are invalid, return false. Otherwise, return true.
// 2. checkWin() - returns the player that has won the game. If there is no winner yet, return undefined.

// You can use the following variables:
let grid = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

let player = "X"; // the player that has to mark the next cell (either "X" or "O")

printGrid();

let x = Number(prompt("Enter the x coordinate: "));
let y = Number(prompt("Enter the y coordinate: "));
while(true) {
    if(markCell(x, y, player)) {
        player = player === "X" ? "O" : "X";
    }

    if(checkWin() !== undefined) {
        break;
    }

    printGrid();

    x = Number(prompt("Enter the x coordinate: "));
    y = Number(prompt("Enter the y coordinate: "));
}

function markCell(x, y, player) {
    if(x < 0 || x > 2 || y < 0 || y > 2) {
        console.log("Invalid coordinates");
        return false;
    }

    if(grid[y][x] !== " ") {
        console.log("This cell is already marked");
        return false;
    }

    grid[y][x] = player;
    return true;
}

function checkWin() {
    // Check rows
    for(let y = 0; y < 3; y++) {
        if(grid[y][0] !== " " && grid[y][0] === grid[y][1] && grid[y][1] === grid[y][2]) {
            console.log(grid[y][0] + " won!");
            return grid[y][0];
        }
    }

    // Check columns
    for(let x = 0; x < 3; x++) {
        if(grid[0][x] !== " " && grid[0][x] === grid[1][x] && grid[1][x] === grid[2][x]) {
            console.log(grid[0][x] + " won!");
            return grid[0][x];
        }
    }

    // Check diagonals
    if(grid[0][0] !== " " && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
        console.log(grid[0][0] + " won!");
        return grid[0][0];
    }

    if(grid[0][2] !== " " && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
        console.log(grid[0][2] + " won!");
        return grid[0][2];
    }

    return undefined;
}

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