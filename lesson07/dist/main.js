"use strict";
class Citizen {
    constructor(name, age, gender, language, hobby = 'Play Chess') {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.language = language;
        this.hobby = hobby;
    }
    getAge() {
        return this.age;
    }
}
class Foreigner {
    constructor(name, age, gender, language, hobby = 'Play Mobile Games') {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.language = language;
        this.hobby = hobby;
    }
    getAge() {
        return this.age;
    }
    getHobby() {
        return this.hobby;
    }
}
class Politician extends Citizen {
    constructor(name, age, gender, language, title) {
        super(name, age, gender, language);
        this.title = title;
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
}
class Musician extends Foreigner {
    constructor(name, age, gender, language, instrument) {
        super(name, age, gender, language);
        this.instrument = instrument;
    }
    getInstrument() {
        return this.instrument;
    }
}
const w = new Citizen('Michael', 110000000000, 'M', 'Enochian');
const x = new Foreigner('Zeus', 5200, 'M', 'Greek');
const y = new Politician('Rodrigo', 78, 'M', 'Bisaya', 'President');
const z = new Musician('Taylor', 38, 'F', 'English', 'Guitar');
console.log(w);
console.log(w.getAge());
console.log(x);
console.log(x.getAge());
console.log(y);
console.log(y.getTitle(), y.getAge());
console.log(z);
console.log(z.getInstrument(), z.getAge());
class Animal {
    constructor(name, age, mass) {
        Animal.count += 1;
        this.name = name;
        this.age = age;
        this.mass = mass;
    }
    eat(food) {
        return `Eating ${food}`;
    }
    getAge() {
        return this.age;
    }
    getMass() {
        return this.mass;
    }
}
Animal.count = 0;
class Whale extends Animal {
    constructor(name, age, mass, maxMilkProductionVolumeRate, maxSwimSpeed) {
        super(name, age, mass);
        this.maxMilkProductionVolumeRate = maxMilkProductionVolumeRate;
        this.maxSwimSpeed = maxSwimSpeed;
    }
    feedMilkToOffspring(milkVolume) {
        if (milkVolume > this.maxMilkProductionVolumeRate) {
            return `Feeding to Offspring ${this.maxMilkProductionVolumeRate}mL of Milk.`;
        }
        return `Feeding to Offspring ${milkVolume}mL of Milk.`;
    }
    swim(speed) {
        if (speed > this.maxSwimSpeed) {
            return `Swimming at speed of ${this.maxSwimSpeed}m/s.`;
        }
        return `Swimming at speed of ${speed}m/s.`;
    }
}
class Dog extends Animal {
    constructor(name, age, mass, maxMilkProductionVolumeRate, maxRunSpeed) {
        super(name, age, mass);
        this.maxMilkProductionVolumeRate = maxMilkProductionVolumeRate;
        this.maxRunSpeed = maxRunSpeed;
        this.owner = '';
    }
    get getOwner() {
        return this.owner;
    }
    set setOwner(owner) {
        this.owner = owner;
    }
    feedMilkToOffspring(milkVolume) {
        if (milkVolume > this.maxMilkProductionVolumeRate) {
            return `Feeding to Offspring ${this.maxMilkProductionVolumeRate}mL of Milk.`;
        }
        return `Feeding to Offspring ${milkVolume}mL of Milk.`;
    }
    run(speed) {
        if (speed > this.maxRunSpeed) {
            return `Running at speed of ${this.maxRunSpeed}m/s.`;
        }
        return `Running at speed of ${speed}m/s.`;
    }
}
let animals = [
    new Animal('Claire', 45, 21.41),
    new Whale('Bubbles', 27, 611.51, 12, 51),
    new Dog('Orea', 0.92, 1.1, 1.5, 3)
];
console.log(animals);
console.log(Animal.count);
