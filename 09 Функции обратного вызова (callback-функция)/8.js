// ***Задача 9.8***

// Используйте функцию `find` из предыдущей задачи. Функция `find`
//  будет принимать числовой массив. Напишите callback-функцию, которая будет проверять элемент на условие -
//   его остаток от деления на `5` должен равняться `3`. Если элемент удовлетворяет условию, возвращает `true`, 
// иначе `false`. Callback-функцию можно создавать стрелочным способом.

// function find(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         let elem = array[index];
//         let result = callback(elem, index);
//         if (result === true) {
//             return elem;
//         }
//     }
// }

// // function myCallbackFunc(elem) {
// //     if (elem % 5 === 3) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// //***********
// //стрелочная функция

// const myCallbackFunc = (elem) => {
//     if (elem % 5 === 3) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const arr1 = [3, 8, 13, 18];
// const elem1 = find(arr1, myCallbackFunc);
// console.log(elem1); // 3

// const arr2 = [4, 7, 9, 10];
// const elem2 = find(arr2, myCallbackFunc);
// console.log(elem2); // undefined  


// ------------------------------
// Эта задача с использованием метода find

const arr1 = [3, 8, 13, 18];
const elem1 = arr1.find((elem) => { return elem % 5 === 3 });
console.log(elem1); // 3

const arr2 = [4, 7, 9, 10];
const elem2 = arr2.find((elem) => { return elem % 5 === 3 });
console.log(elem2); // undefined   