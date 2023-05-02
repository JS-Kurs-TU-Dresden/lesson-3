// Replace the (___) with the correct values to make the code work.
// For more info, see: https://javascript.info/function-basics#returning-a-value

// Search for the first string in the array that contains the given character
// Example: findWithChar(["Hello", "World"], "e") should return "Hello"
function findWithChar(arrayOfStrings, value) {
    if(arrayOfStrings.length === 0) {
        ___
    }

    for(let i = 0; i < arrayOfStrings.length; i++) {
        const text = arrayOfStrings[i];

        for(let j = 0; j < text.length; j++) {
            if(___) {
                ___
            }
        }
    }
}












// Please do not change the code below. This code is used for testing your solution.

export {
    findWithChar
}