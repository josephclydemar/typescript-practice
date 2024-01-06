"use strict";
let names = ['Paul', 'Dave', 'James'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let testing = [];
names[0] = 'John';
names.push('25');
guitars[0] = 66;
guitars.push('Hello');
mixedData = guitars;
let bands = ['Parokya Ni Edgar', 'Itchyworms', 'Rocksteddy', 'Mayonaise'];
let unionArray1;
let myTuple = ['Jimmy', 11, true];
unionArray1 = myTuple;
let myObj;
myObj = myTuple;
myObj = mixedData;
myObj = unionArray1;
let exampleObj1 = {
    prop1: 'John',
    prop2: false
};
exampleObj1.prop1 = 'Kyle';
let evh = {
    name: 'Eddie',
    album: [1984, 5150, 'OU812'],
    active: false,
};
let jp = {
    name: 'Jimmy',
    album: ['I', 'II', 'IV'],
    active: true,
    band: 'Cueshe'
};
function greetGuitarist(guitarist) {
    var _a;
    return `Hello ${(_a = guitarist.band) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
}
const g = null;
console.log(greetGuitarist(jp));
console.log(greetGuitarist(evh));
console.log(g);
var MissionRank;
(function (MissionRank) {
    MissionRank[MissionRank["D"] = 0] = "D";
    MissionRank[MissionRank["C"] = 1] = "C";
    MissionRank[MissionRank["B"] = 2] = "B";
    MissionRank[MissionRank["A"] = 3] = "A";
    MissionRank[MissionRank["S"] = 4] = "S";
})(MissionRank || (MissionRank = {}));
;
console.log(MissionRank, typeof MissionRank);
