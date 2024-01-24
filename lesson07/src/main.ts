class Citizen {
    // name: string;
    // age: number;
    // gender: string;
    // language: string;
    constructor(public readonly name: string, public readonly age: number, private gender: string, protected language: string) {
        // this.name = name;
        // this.age = age;
        // this.gender = gender;
        // this.language = language;
    }
}

const x: Citizen = new Citizen('Michael',110_000_000_000, 'M', 'Enochian');
console.log(x);

