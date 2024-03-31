
// Index Signatures


// // Interface without using Index Signatures
// interface TransactionObject {
//     Pizza: number;
//     Books: number;
//     Jobs: number;
// }


// Interface using Index Signatures
interface TransactionObject {
    readonly [index: string]: number;
    Burger: number;
    Siopao: number;
}

const todaysTransaction: TransactionObject = {
    Pizza: -10,
    Books: -5,
    Jobs: 10,
    Burger: 12,
    Siopao: 52
};


// // Non-Dynamic way of Accessing Properties
// console.log(todaysTransaction.Books);
// console.log(todaysTransaction['Books']);

// // Dynamic way of Accessing Properties
let prop: string = 'Pizza';
console.log(todaysTransaction[prop]);
// todaysTransaction[prop] = 5; // Compilation Error
['Books', 'Burger', 'Pizza', 'Siopao', 'Jobs'].forEach(function (item: string, i: number, arr: string[]): void {
    // console.log(i, item, arr);
    console.log(item, todaysTransaction[item]);
});




console.log('\n\n')

// Using "keyof" keyword.

interface Student {
    name: string;
    GPA: number;
    subjects?: string[];
}

const student1: Student = {
    name: 'Miguel',
    GPA: 3.5,
    subjects: ['CPE432', 'ES032', 'CPE463']
}

const student2: Student = {
    name: 'Garawi',
    GPA: 3.7,
    subjects: ['CPE363', 'ES038']
}



for(let item in student1) {
    console.log(`${item}:`, student1[item as keyof Student]);
}

console.log('\n');

for(let key in student2) {
    console.log(`${key}:`, student2[key as keyof typeof student2]);
}


function logStudentProps(student: Student, key: keyof Student): void {
    console.log(`Student ${key}:`, student[key]);
}

logStudentProps(student1, 'subjects');








// ****************************************** //



type Streams = 'salary' | 'bonus' | 'sidehustle';

interface Incomes {
    [key: string]: number;
}

// type Incomes = Record<Streams, number>;