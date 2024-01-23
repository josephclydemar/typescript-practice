"use strict";
let a = 'hello';
let b = a;
let d = 'hello';
let e = 'world';
let f = 'world';
function addOrConcat(a, b, c) {
    if (c === 'concat') {
        return `${a}${b}`;
    }
    return a + b;
}
console.log(addOrConcat(5, 4, 'add'));
console.log(addOrConcat(5, 4, 'concat'));
console.log(addOrConcat(5, -4, 'concat'));
console.log(addOrConcat(5, -4, 'add'));
let myVal1 = addOrConcat(3, -2, 'concat');
let myVal2 = addOrConcat(3, -2, 'add');
10;
