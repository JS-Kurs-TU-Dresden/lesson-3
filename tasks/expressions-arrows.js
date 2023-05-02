// Replace the (___) with the correct values to make the code work.

const addBrackets = text => "(" + text + ")";

const map = (array, callback) => {
    const result = [];

    for(let i = 0; i < array.length; i++) {
        const value = array[i];
        const newValue = callback(value);

        result.push(newValue);
    }

    return result;
}













// Please do not change the code below. This code is used for testing your solution.

export {
    map, addBrackets
}