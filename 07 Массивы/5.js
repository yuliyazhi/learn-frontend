// ***Задача 7.5***

// Дан массив `a`. Найдите количество положительных элементов массива.

// Пример: `let a = [-2, 10, -5, -1, 2, 6];`

let array = [-2, 10, -5, -1, -2, 6];
let num = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        num = num + 1;
    }
}
console.log(num);

// или
// let array = [-2, 10, -5, 1, 2, 6];
// let num = 0;

// for (let elem of array) {
//     if (elem > 0) {
//         num = num + 1;
//     }
// }
// console.log(num);

let a = [];
let n = 0;

function iWantToSleep(num) {
    for (let x = 0; x < num; x++) {
        n = n + 1;
        return n + " sheep...";

    } console.log(iWantToSleep(5));