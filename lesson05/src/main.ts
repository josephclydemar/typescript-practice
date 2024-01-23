// type assertions
type One = string;
type Two = string | number;
type Three = 'hello';


// convert to more or less specific type
let a: One = 'hello';

let b = a as Two; // less specific
// let b: Two = a; // less specific

// let c = a as Three; // more specific
// let c: Three = a; // does not work

let d: Three = 'hello';

let e = <One>'world';
let f = <string | number>'world';



function addOrConcat(a: number, b: number, c: 'add' | 'concat'): number | string {
    if(c === 'concat') {
        return `${a}${b}` as string;
    }
    return a + b;
}


console.log(addOrConcat(5, 4, 'add'));
console.log(addOrConcat(5, 4, 'concat'));
console.log(addOrConcat(5, -4, 'concat'));
console.log(addOrConcat(5, -4, 'add'));


let myVal1: string = addOrConcat(3, -2, 'concat') as string;
let myVal2: number = addOrConcat(3, -2, 'add') as number;

// 10 as string;
(10 as unknown) as string;








// The DOM
