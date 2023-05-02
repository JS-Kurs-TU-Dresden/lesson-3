// Replace the (___) with the correct values to make the code work.
// For more info, see: https://javascript.info/function-basics#default-values

function substring(string, start = ___, end = ___) {
    let result = "";

    if(start < 0) {
        ___
    }

    for(let i = start; i < end; i++) {
        ___
    }

    return result;
}

function repeat(string, times = ___) {
    let result = "";

    for(let i = 0; ___; i++) {
        ___
    }

    ___
}














// Please do not change the code below. This code is used for testing your solution.

export {
    substring, repeat
}