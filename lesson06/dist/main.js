"use strict";
10;
// The DOM
const img1 = document.querySelector('img');
const img2 = document.querySelector('#my-img');
img1.src = 'https://i.redd.it/is-there-a-huge-difference-in-strength-between-sukuna-v0-plk4c5orlqlb1.png?width=728&format=png&auto=webp&s=eec4a4cf3d497435d80e1ab8a7e82aa4d9c44f20';
img2.src = 'https://i.redd.it/e88k7qgz8lzb1.jpg';
// // 1st Variation
// const year: HTMLSpanElement = document.getElementById('year')!;
// const currentYear: number = new Date().getFullYear();
// year.setAttribute('datetime', `${currentYear}`);
// year.textContent = `${currentYear}`;
// 2nd Variation
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.setAttribute('datetime', currentYear.toString());
year.textContent = currentYear.toString();
