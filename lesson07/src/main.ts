// Classes
class Citizen {
    constructor(
        public readonly name: string,
        private age: number,
        protected readonly gender: string,
        protected language: string,
        private hobby: string = 'Play Chess'
    ) {}

    public getAge(): number {
        return this.age;
    }
}

class Foreigner {
    public readonly name: string;
    private age: number;
    protected readonly gender: string;
    protected language: string;
    private hobby: string;
    constructor(name: string, age: number, gender: string, language: string, hobby: string = 'Play Mobile Games') {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.language = language;
        this.hobby = hobby;
    }
    public getAge(): number {
        return this.age;
    }
    public getHobby(): string {
        return this.hobby;
    }
}



class Politician extends Citizen {
    constructor(name: string, age: number, gender: string, language: string, private title: string) {
        super(name, age, gender, language);
        this.title = title;
    }
    public getTitle(): string {
        return this.title;
    }
}

class Musician extends Foreigner {
    private instrument: string;
    constructor(name: string, age: number, gender: string, language: string, instrument: string) {
        super(name, age, gender, language);
        this.instrument = instrument;
    }
    public getInstrument(): string {
        return this.instrument;
    }
}


const w: Citizen = new Citizen('Michael', 110_000_000_000, 'M', 'Enochian');
const x: Foreigner = new Foreigner('Zeus', 5200, 'M', 'Greek');
const y: Politician = new Politician('Rodrigo', 78, 'M', 'Bisaya', 'President');
const z: Musician = new Musician('Taylor', 38, 'F', 'English', 'Guitar');

console.log(w);
console.log(w.getAge())

console.log(x);
console.log(x.getAge());

console.log(y);
console.log(y.getTitle(), y.getAge());

console.log(z);
console.log(z.getInstrument(), z.getAge());





// Interfaces
class Animal {
    static count: number = 0;
    public readonly name: string;
    protected age: number;
    protected mass: number;
    constructor(name: string, age: number, mass: number) {
        Animal.count += 1;
        this.name = name;
        this.age = age;
        this.mass = mass;
    }
    eat(food: string): string {
        return `Eating ${food}`;
    }
    public getAge(): number {
        return this.age;
    }
    public getMass(): number {
        return this.mass;
    }
}
interface Mammal {
    maxMilkProductionVolumeRate: number;
    feedMilkToOffspring(volume: number): string;
}

interface Aquatic {
    maxSwimSpeed: number;
    swim(speed: number): string;
}
interface Terrestrial {
    maxRunSpeed: number;
    run(speed: number): string;
}

class Whale extends Animal implements Mammal, Aquatic {
    maxMilkProductionVolumeRate: number;
    maxSwimSpeed: number;
    constructor(name: string, age: number, mass: number, maxMilkProductionVolumeRate: number, maxSwimSpeed: number) {
        super(name, age, mass);
        this.maxMilkProductionVolumeRate = maxMilkProductionVolumeRate;
        this.maxSwimSpeed = maxSwimSpeed;
    }
    feedMilkToOffspring(milkVolume: number): string {
        if(milkVolume > this.maxMilkProductionVolumeRate) {
            return `Feeding to Offspring ${this.maxMilkProductionVolumeRate}mL of Milk.`;
        }
        return `Feeding to Offspring ${milkVolume}mL of Milk.`;
    }
    swim(speed: number): string {
        if(speed > this.maxSwimSpeed) {
            return `Swimming at speed of ${this.maxSwimSpeed}m/s.`;
        }
        return `Swimming at speed of ${speed}m/s.`;
    }
}

class Dog extends Animal implements Mammal, Terrestrial {
    maxMilkProductionVolumeRate: number;
    maxRunSpeed: number;
    private owner: string;
    constructor(name: string, age: number, mass: number, maxMilkProductionVolumeRate: number, maxRunSpeed: number) {
        super(name, age, mass);
        this.maxMilkProductionVolumeRate = maxMilkProductionVolumeRate;
        this.maxRunSpeed = maxRunSpeed;
        this.owner = '';
    }
    public get getOwner(): string {
        return this.owner;
    }
    public set setOwner(owner: string) {
        this.owner = owner;
    }

    feedMilkToOffspring(milkVolume: number): string {
        if(milkVolume > this.maxMilkProductionVolumeRate) {
            return `Feeding to Offspring ${this.maxMilkProductionVolumeRate}mL of Milk.`;
        }
        return `Feeding to Offspring ${milkVolume}mL of Milk.`;
    }
    run(speed: number): string {
        if(speed > this.maxRunSpeed) {
            return `Running at speed of ${this.maxRunSpeed}m/s.`;
        }
        return `Running at speed of ${speed}m/s.`;
    }
}




let animals: Animal[] = [
    new Animal('Claire', 45, 21.41),
    new Whale('Bubbles', 27, 611.51, 12, 51),
    new Dog('Orea', 0.92, 1.1, 1.5, 3)
];


console.log(animals);
console.log(Animal.count);





