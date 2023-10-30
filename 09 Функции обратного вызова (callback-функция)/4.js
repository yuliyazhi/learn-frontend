// ***Задача 9.4***

// Используйте функцию `map` из предыдущей задачи. Функция `map` будет принимать числовой массив, который состоит только из 1 и 0 в случайном порядке. Напишите callback-функцию, которая будет инвертировать элемент предыдущего массива и возвращать это инвертированное значение. Callback-функцию можно создавать стрелочным способом.

// ```jsx
// const arr = [1, 1, 0, 0, 1, 0, 1];
// const newArr = map(arr, myCallbackFunc);
// console.log(newArr); // [0, 0, 1, 1, 0, 1, 0];
// ```


function map(array, callback) {
    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        let elem = array[index];
        let result = callback(elem, index);
        newArr.push(result);
    }

    return newArr;
}

// function myCallbackFunc(elem, a, b) {
//     if (elem === 1) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// const arr = [1, 1, 0, 0, 1, 0, 1];
// const newArr = map(arr, myCallbackFunc);
// console.log(newArr); // [0, 0, 1, 1, 0, 1, 0]


//***********
//стрелочная функция


const array = [1, 1, 0, 0, 1, 0, 1];

const newArray = map(array, (elem, a, b) => {
    if (elem === 1) {
        return 0;
    } else {
        return 1;
    }
});
console.log(newArray); // [0, 0, 1, 1, 0, 1, 0]

