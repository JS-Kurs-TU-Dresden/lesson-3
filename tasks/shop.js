import { prompt } from '../prompt.js'

// Code a small shop where you can buy items. The items and their prices are listed below.
// 1. Prompt the user to enter the amount of money they have.
// 2. Display all the items available for purchase using the printItems() function.
// 3. Ask the user to enter the name of the item they want to buy.
// 4. If the user can afford the item, subtract the price from the user's money.
// 5. If the user can't afford the item, print "Sorry, you don't have enough money".
// 6. If the user enters an invalid item, print "Sorry, we don't have that item".
// 7. Repeat steps 3-6 until the user enters "DONE" as the item name.

// In order to make this easier for yourself, write 2 functions:
// 1. buyItem(item) - returns the money left after buying the item. If the user can't afford the item, return the money they have without subtracting the price.
// 2. findItemIndex(item) - returns the index of the item in the items array. If the item is not found, return -1.


const items = ["Bread", "Milk", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];
const prices = [1, 3, 2, 1, 1, 2, 3];

// function buyItem(item) ...






function printItems() {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i] + " - " + prices[i] + " Euro");
    }
}






















// Please do not change the code below. This code is used for testing your solution.

const changeMoney = newMoney => money = newMoney

export {
    buyItem,
    findItemIndex,
    changeMoney
}