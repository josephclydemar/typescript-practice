// ARRAYS
let names = ['Paul', 'Dave', 'James'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let testing = [];


names[0] = 'John';
names.push('25');
// names.push(77);
// names[1] = 5;

guitars[0] = 66;
guitars.push('Hello');
// guitars[0] = false;
// guitars.push(false);

// names = guitars;
// guitars = names;
mixedData = guitars;


let bands: string[] = ['Parokya Ni Edgar', 'Itchyworms', 'Rocksteddy', 'Mayonaise'];

// union type
let unionArray1: (string | boolean | number)[];

// tuple type
let myTuple: [string, number, boolean] = ['Jimmy', 11, true];

// myTuple = unionArray1;
unionArray1 = myTuple;




// OBJECTS
let myObj: object;
myObj = myTuple;
myObj = mixedData;
myObj = unionArray1;

let exampleObj1 = {
    prop1: 'John',
    prop2: false
};
exampleObj1.prop1 = 'Kyle';
// exampleObj1.prop1 = 51;



type Guitarist = {
    name: string,
    album: (string | number)[],
    active: boolean,
    band?: string
};

let evh: Guitarist = {
    name: 'Eddie',
    album: [1984, 5150, 'OU812'],
    active: false,
};
let jp: Guitarist = {
    name: 'Jimmy',
    album: ['I', 'II', 'IV'],
    active: true,
    band: 'Cueshe'
};

// evh = jp;
// jp = evh;
function greetGuitarist(guitarist: Guitarist): string {
    return `Hello ${guitarist.band?.toUpperCase()}!`;
}

const g = null;
console.log(greetGuitarist(jp));
console.log(greetGuitarist(evh));
console.log(g);



// ENUMS
enum MissionRank { D, C, B, A, S };
console.log(MissionRank, typeof MissionRank);
























// type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Person = {
    name: string,
    age: stringOrNumber,
    occupation?: string[]
};

type GroupBand = {
    bandName: string,
    members: Person[],
    songs: string[]
};


const band1: GroupBand = {
    bandName: 'SB19',
    members: [
        {
            name: 'Pablo',
            age: 29,
            occupation: ['Singer', 'Rapper', 'Song Composer']
        },
        {
            name: 'Stell',
            age: 28,
            occupation: ['Singer', 'Voice Coach']
        },
        {
            name: 'Ken',
            age: '27',
            occupation: ['Singer', 'Rapper']
        },
        {
            name: 'Justin',
            age: 26,
            occupation: ['Singer', 'Actor']
        },
        {
            name: 'Josh',
            age: 29,
            occupation: ['Singer', 'Rapper']
        }
    ],
    songs: ['MANA', 'GENTO', 'BAZINGA', 'MAPA']
};







// type literals
let myName: 'Joseph';

// myName = 'Clyde';
myName = 'Joseph';

let userName: 'kevin' | 'jake' | 'narscent';

// userName = 'sully';
userName = 'narscent';

