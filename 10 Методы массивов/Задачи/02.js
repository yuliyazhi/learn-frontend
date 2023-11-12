
// Задача 10.2
// Напишите функцию, которая сравнивает два массива, если они равны, вернуть true, иначе false.
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// console.log(isEqual(arr1, arr2)); // true

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(isEqual(arr1, arr2));

function isEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1 === arr2) {
            return true;
        } else {
            return false;
        }
    }
}




const arr1 = [1, 2, 6, 4];
const arr2 = [1, 2, 6, 4];


function isBigEnough(element, index, array) {
    return arr1 === arr2;
}

let a = arr1.every(isBigEnough); // true
console.log(a(arr1, arr2));