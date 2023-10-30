
// *** Задача 8.10 ***

//     Написать функцию, принимающую массив чисел.Она должна возвращать`true`,
//         если в массиве хотя бы одно число делятся на 5, иначе`false`.

// const arr = [1, 5, 36, 37, 42];
// const arr2 = [9, 6, 76, 3, 32];

// console.log(some(arr)); // true
// console.log(some(arr2)); // false


const arr = [7, 704, 10, 37, 42];
const arr2 = [9, 1, 70, 57, 30];

function some(arr) {

    for (let i = 0; i < 5; i++) {
        if (arr[i] % 5 === 0) {
            return true;
        }
    }
    return false;
}

console.log(some(arr)); // true
console.log(some(arr2)); // false

// или

function some(arr) {
    let result = false;

    for (let i = 0; i < 5; i++) {
        if (arr[i] % 5 === 0) {
            result = true;
            break;
        }
    }

    return result;
}

console.log(some(arr)); // true
console.log(some(arr2)); // false