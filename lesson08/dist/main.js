"use strict";
// Index Signatures
const todaysTransaction = {
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
let prop = 'Pizza';
console.log(todaysTransaction[prop]);
// todaysTransaction[prop] = 5; // Compilation Error
['Books', 'Burger', 'Pizza', 'Siopao', 'Jobs'].forEach(function (item, i, arr) {
    // console.log(i, item, arr);
    console.log(item, todaysTransaction[item]);
});
console.log('\n\n');
const student1 = {
    name: 'Miguel',
    GPA: 3.5,
    subjects: ['CPE432', 'ES032', 'CPE463']
};
const student2 = {
    name: 'Garawi',
    GPA: 3.7,
    subjects: ['CPE363', 'ES038']
};
for (let item in student1) {
    console.log(`${item}:`, student1[item]);
}
console.log('\n');
for (let key in student2) {
    console.log(`${key}:`, student2[key]);
}
function logStudentProps(student, key) {
    console.log(`Student ${key}:`, student[key]);
}
logStudentProps(student1, 'subjects');
// type Incomes = Record<Streams, number>;
