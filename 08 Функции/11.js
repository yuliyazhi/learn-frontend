// *** Задача 8.11 ***

//     Написать функцию, принимающую массив чисел. 
// Она должна возвращать`true`, если в массиве все числа двузначные, иначе`false`.
// const arr = [18, 95, 36, 37, 42];
// const arr2 = [9, 6, 76, 3, 32];

const arr = [18, 95, 36, 37, 42];
const arr2 = [9, 6, 76, 3, 32];

function every(arr) {

    for (let i = 0; i < 10; i++) {
        if (arr[i] < 9 || arr[i] > 100) {
            return false;
        }
    }
    return true;
}

console.log(every(arr)); // true
console.log(every(arr2)); // false

let n = 10;
for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
        if (i < n / 2 - 1 && j > i && j + i < n - 1) {
            str = str + "1";
        } if (i > n / 2 && j < i && j + i > n - 1) {
            str = str + "3";
        } if (i == j || i + j === n - 1) {
            str = str + "0";

        } if (i > n / 2 && j < i && j + i > n - 1) {
            str = str + "3";


        }
    }

    console.log(str)
}