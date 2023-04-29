import { prompt } from '../prompt.js'

// Code a quiz game with the following 3 questions:

// 1. How many continents are there?
// If the user answers 7, print "Correct!"
// If the user answers below 7, print "Too low!"
// If the user answers above 7, print "Too high!"

// Repeat the question until the user answers correctly.

// 2. What is the capital of Germany?
// If the user answers "Berlin", print "Correct!"
// If the user answers something else, print "Wrong!"

// Repeat the question until the user answers correctly.

// 3. Ask the user to enter a number between 1 and 10. Then question the user if the number is even or odd.
// If the user answers "even" and the number is even, print "Correct!"
// If the user answers "odd" and the number is odd, print "Correct!"
// If the user answers incorrectly, print "Wrong!"

// Repeat the question until the user answers correctly.

// Example output:
// How many continents are there? 9
// Too high!
// How many continents are there? 6
// Too low!
// How many continents are there? 7
// Correct!
// What is the capital of Germany? Berlin
// Correct!
// Enter a number between 1 and 10: 5
// Is the number even or odd? even
// Wrong!
// Is the number even or odd? odd
// Correct!

// Hint: Use a while loop to repeat the question until the user answers correctly.