// More information can be found here: https://javascript.info/ifelse
// Fill in the gaps (___) to make the code work

let apples = 5;
let oranges = 3;
let bananas = 7;

// Should print "I have x apples" if there is more than 0 apple
___(apples ___) {
    console.log("I have " + apples + " apples");
}

// Should print "I have a full basket" if there are at least 5 fruits, otherwise print "I need more fruits"
___(___ >= 5) {
    console.log("I have a full basket");
} ___ {
    console.log("I need more fruits");
}

// Should print "I have x bananas" if there are more bananas than apples,
// if there are more apples than bananas print "I have x apples",
// otherwise print "I have the same amount of apples and bananas"
___ {
    console.log("I have " ___ " bananas");
} ___ {
    console.log("I have " ___ " apples");
} ___ {
    console.log("I have the same amount of apples and bananas");
}

