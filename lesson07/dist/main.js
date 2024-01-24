"use strict";
class Citizen {
    constructor(name, age, gender, language) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.language = language;
    }
}
const x = new Citizen('Michael', 110000000000, 'M', 'Enochian');
console.log(x);
