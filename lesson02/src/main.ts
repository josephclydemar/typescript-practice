let myAge: number = 5;
let myName: string = 'Joseph';
let myAddress: string;
let isLoading: boolean;

let album: any;
let song: string | number; // Union type
let re: RegExp = /\w+/g;

myAge = 17;
myAddress = 'Danglag, Consolacion, Cebu';
isLoading = true;

album = 2;
album = 'Clyde';
album = false;

song = 45;
song = 'Yoo';



const func1 = (a: number, b: number): number => {
    return a + b;
};

function func2(a: boolean, b: boolean): boolean {
    return a && b;
}

function func3(a: boolean | string): boolean | string {
    return a;
}

