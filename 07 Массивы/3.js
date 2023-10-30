// ***Задание 7.3***

// Дан массив `a`. Выведете сумму элементов массива.

// Пример: `let a = [1, 3, 2];`

let array = [1, 3, 2];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(sum);

// или

// let array = [1, 3, 2, 6, 8];
// let sum = 0;

// for (let num of array) {
//     sum = sum + num;
// }
// console.log(sum);