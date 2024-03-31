"use strict";
// ***** Utility Types *****
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function updateAssignment(assign, propsToUpdate) {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
}
const assignment1 = {
    studentID: 'CPE432',
    title: 'Assembly Loops',
    grade: 0,
};
const partialAssignment1 = {
    title: ''
};
// console.log(assignment1);
// console.log(updateAssignment(assignment1, { grade: 95, verified: true }));
// ** Required & Readonly
function recordAssignment(assign) {
    return assign;
}
const assignment2 = {
    studentID: 'ES036',
    title: 'Statistics',
    grade: 79,
    verified: true,
};
function verifyAssignment(assign) {
    return Object.assign(Object.assign({}, assign), { verified: true });
}
let assignment3 = {
    studentID: 'CPE485',
    title: 'Verilog Seatwork 5',
    grade: 0,
};
let updatedAssignment = updateAssignment(assignment3, { grade: 87 });
console.log(updatedAssignment);
let verifiedAssignment = verifyAssignment(updatedAssignment);
console.log(verifiedAssignment);
let recordedAssignment = recordAssignment(verifiedAssignment);
console.log(recordedAssignment);
// verifiedAssignment.grade = 4;
// ** Record
const hexColorMap = {
    'red': 'ff0000',
    'green': '00ff00',
    'blue': '0000ff',
    'yellow': 'ffff00',
    'violet': 'ff00ff',
    'cyan': '00ffff',
};
const finalLetterGrades = {
    'Kelly': 'A',
    'Mary': 'B',
    'Sara': 'E'
};
const gradeData = {
    'Kelly': { assign1: 51, assign2: 76 },
    'Mary': { assign1: 89, assign2: 67 },
    'Sara': { assign1: 85, assign2: 76 },
};
const score = {
    'studentID': 'k123',
    'grade': 91,
};
const preview = {
    'studentID': 'k123',
    'title': 'Final Project'
};
// ** ReturnType
function createNewAssign(title, points) {
    return { title, points };
}
const tsAssign1 = createNewAssign('Utility Types', 100);
console.log(tsAssign1);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users');
            const data = yield response.json();
            return data;
        }
        catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
            }
            return null;
        }
    });
}
fetchUsers().then(function (data) {
    console.log(data);
});
fetchUsers().then(function (data) {
    console.log(data);
});
const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    }
];
