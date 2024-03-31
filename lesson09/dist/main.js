"use strict";
// Generics
// ** Generic Functions
function echo(arg) {
    return arg;
}
function processUser(user) {
    return user;
}
console.log(processUser({ id: 2, name: 'Clyde' }));
function getUsersProperty(users, key) {
    return users.map(function (user) {
        return user[key];
    });
}
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
console.log(getUsersProperty(users, 'id'));
console.log(getUsersProperty(users, 'phone'));
console.log(getUsersProperty(users, 'address'));
// // ** Generic Classes
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store1 = new StateObject('John');
const store2 = new StateObject(89);
console.log(store1.state);
console.log(store2.state);
// ---------------
console.log('\n\n\n');
class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}
// ------------- Using Generics for a Queue Data Structure Implementation
class QNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
    get getData() {
        return this.data;
    }
    get getNext() {
        return this.next;
    }
    set setNext(nextNode) {
        this.next = nextNode;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    enqueue(value) {
        const newQNode = new QNode(value);
        if (this.tail === null && this.head === null) {
            this.tail = newQNode;
            this.head = newQNode;
            this.count += 1;
        }
        else {
            this.tail.setNext = newQNode;
            this.tail = this.tail.getNext;
            this.count += 1;
        }
    }
    dequeue() {
        if (this.tail === null && this.head === null) {
            return null;
        }
        else {
            let value = this.head.getData;
            this.head = this.head.getNext;
            this.count -= 1;
            return value;
        }
    }
    traverse() {
        if (this.head === null) {
            return false;
        }
        let walker = this.head;
        while (walker !== null) {
            console.log(walker.getData);
            walker = walker.getNext;
        }
        return true;
    }
}
console.log('\n\nmyQueue1:\n');
let myQueue1 = new Queue();
myQueue1.enqueue(4);
myQueue1.enqueue(7);
myQueue1.enqueue(12);
myQueue1.dequeue();
myQueue1.enqueue(-9);
myQueue1.traverse();
console.log('\n\nmyQueue2:\n');
let myQueue2 = new Queue();
myQueue2.enqueue(new Person('James', 45, 'Physicist'));
myQueue2.enqueue(new Person('Kelly', 28, 'Lawyer'));
myQueue2.enqueue(new Person('Robert', 75, 'Senator'));
myQueue2.dequeue();
myQueue2.enqueue(new Person('Tony', 35, 'Accountant'));
myQueue2.enqueue(new Person('Jane', 25, 'Biologist'));
myQueue2.enqueue(new Person('Cindy', 23, 'Architect'));
myQueue2.dequeue();
myQueue2.enqueue(new Person('Clement', 82, 'Doctor'));
myQueue2.traverse();
console.log('\n\nmyQueue3:\n');
let myQueue3 = new Queue();
users.forEach(function (user) {
    myQueue3.enqueue(user);
});
myQueue3.dequeue();
myQueue3.traverse();
// myQueue1.enqueue(new Person('', 1, ''));
// myQueue2.enqueue(5);
// myQueue3.enqueue('');
// ----------------
// class Kinder {
//     private name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// class Elementary {
//     private name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// class HighSchool {
//     private name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// class College {
//     private name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// class Teacher<T> {
//     private name: string;
//     private student: T;
//     constructor(name: string, student: T) {
//         this.name = name;
//         this.student = student;
//     }
//     public getInfo(): string {
//         return `Hello my name is ${this.name}.\nI am a teacher of a ${typeof this.student} student named ${this.student.getName()}.`;
//     }
// }
