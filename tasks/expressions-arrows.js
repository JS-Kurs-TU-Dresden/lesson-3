// Replace the (___) with the correct values to make the code work.
// For more info, see: https://javascript.info/function-expressions and https://javascript.info/arrow-functions-basics

// Example: addBrackets("Hello") should return "(Hello)"
const addBrackets = ___;

// Example: map([1, 2, 3], x => x * 2) should return [2, 4, 6]
// Don't forget, a function can be thought of as a value
___ = (array, callback) => {
    const result = ___;

    for(let i = 0; i < array.length; i++) {
        const value = array[i];
        const newValue = ___;

        // add a value to the end of an array
        result.push(___);
    }

    return ___;
}













// Please do not change the code below. This code is used for testing your solution.

export {
    map, addBrackets
}