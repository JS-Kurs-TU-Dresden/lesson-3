// More information can be found here: https://javascript.info/while-for
// Fill in the gaps (___) to make the code work

// Should print 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
let a = 0;
while (___) {
    console.log(a);
    ___
}

// Should print 10, 8, 6, 4, 2, 0
console.log("New Loop:")
for (let b = 10; ___; b -= 2) {
    console.log(b);
}

// Should print 1, 3, 5, 7, 9
console.log("New Loop:")
___(let c = 1; c < 10; ___) {
    console.log(c);
}

// Should print 11, 12, 13, 14, 15
console.log("New Loop:")
let d = 11;
___(true) {
    if (___) {
        break;
    }
    console.log(d);
    d++;
}

// Should print 100, 99, 98, 97, 96, 95, 94, 93, 92, 91
console.log("New Loop:")
let e = ___;
___ {
    console.log(e);
    e--;
} ___(e >= 91);

// Should print 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, ... til 10
console.log("New Loop:")
___(let i = ___; i <= 10; i++) {
    for (let j = 0; ___; j++) {
        console.log(i);
    }
}
