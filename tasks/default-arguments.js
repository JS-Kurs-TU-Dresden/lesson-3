// Replace the (___) with the correct values to make the code work.

function substring(string, start = 0, end = string.length) {
    let result = "";

    for(let i = start; i < end; i++) {
        result += string[i];
    }

    return result;
}

function repeat(string, times = 2) {
    let result = "";

    for(let i = 0; i < times; i++) {
        result += string;
    }

    return result;
}