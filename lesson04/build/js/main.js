"use strict";
;
const add = (a, b) => {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
const multiply = (c, d) => {
    return c * d;
};
const logMsg = (message) => {
    console.log(message);
};
function addAll(a, b, c = 10, d) {
    if (typeof d !== 'undefined') {
        return a + b + c + d;
    }
    return a + b + c;
}
function sum(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
const createError1 = (errorMsg) => {
    throw new Error(errorMsg);
};
function createError2(errorMsg) {
    throw new Error(errorMsg);
}
const endlessLoop1 = () => {
    let i = 0;
    while (true) {
        i++;
    }
};
function endlessLoop2() {
    let i = 0;
    while (true) {
        i++;
    }
}
