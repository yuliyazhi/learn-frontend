// ***Задача 7.6***

// Дан массив `a`. Сформируйте новый массив `b`, который будет состоять только из положительных чисел массива `a` и выведете его на экран. Не пользуйтесь методом `filter`.

// Пример: `let a = [-2, 10, -5, -1, 2, 6];`

// Решение
let arr = [-2, 10, -5, -1, 2, 6];
let arrPlus = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        arrPlus.push(arr[i])
    }
}
console.log(arrPlus)


// или
// let arr = [-2, 10, -5, -1, 2, 6];
// let arrPlus = [];

// for (let elem of arr) {
//     if (elem > 0) {
//         arrPlus.push(elem)
//     }
// }
// console.log(arrPlus)