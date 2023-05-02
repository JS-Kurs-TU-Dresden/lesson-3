// Replace the (___) with the correct values to make the code work.

function calculateArea(width, height) {
    return width * height;
}

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function findMaxOfThree(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

function factorial(num) {
    if(num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

function startsWith(string, substring) {
    for(let i = 0; i < substring.length; i++) {
        if(string[i] !== substring[i]) {
            return false;
        }
    }

    return true;
}













// Please do not change the code below. This code is used for testing your solution.

export {
    calculateArea, isEven, findMaxOfThree, factorial, startsWith
}