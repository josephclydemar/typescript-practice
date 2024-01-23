
// FUNCTIONS: Types, Interfaces

// types
// type arithmeticFunc = (a: number, b: number) => number;

// interface
interface arithmeticFunc {
    (a: number, b: number): number
};

const add = (a: number, b: number): number => {
    return a + b;
};
const subtract = function (a: number, b: number): number {
    return a - b;
};
const multiply: arithmeticFunc = (c, d) => {
    return c * d;
};

const logMsg = (message: any): void => {
    console.log(message);
};

// console.log(add(5, 2));
// console.log(add(3, -1));
// logMsg('hello world!!');




// FUNCTIONS: Optional Parameters, Default Values

// Optional Parameters
function addAll(a: number, b: number, c: number = 10, d?: number): number {
    if(typeof d !== 'undefined') {
        return a + b + c + d;
    }
    return a + b + c;
}


function sum(...nums: number[]): number {
    let total: number = 0;
    for(let i: number = 0; i<nums.length; i++) {
        total += nums[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));


// letting TypeScript infer the return type
const createError1 = (errorMsg: string) => {
    throw new Error(errorMsg);
};

// letting TypeScript infer the return type
function createError2(errorMsg: string) {
    throw new Error(errorMsg);
}




const endlessLoop1 = () => {
    let i: number = 0;
    while(true) {
        i++;
    }
};
function endlessLoop2() {
    let i: number = 0;
    while(true) {
        i++;
    }
}

