// Replace the (___) with the correct values to make the code work.



function findWithChar(arrayOfStrings, value) {
    if(arrayOfStrings.length === 0) {
        return
    }

    for(let i = 0; i < arrayOfStrings.length; i++) {
        const text = arrayOfStrings[i];

        for(let j = 0; j < text.length; j++) {
            if(text[j] === value) {
                return text;
            }
        }
    }
}

