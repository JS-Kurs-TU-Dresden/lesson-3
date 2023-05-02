// Replace the (___) with the correct values to make the code work.

// create an array with values from 1 to 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const first = numbers[0];
const last = numbers[numbers.length - 1];

// swap the second and the fifth element
const temp = numbers[1];
numbers[1] = numbers[4];
numbers[4] = temp;

const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

function sumOfArray(array) {
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

const sumWithFunction = sumOfArray(numbers);