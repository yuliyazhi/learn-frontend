// ***Задача 9.5 (аналог метода filter)***

// > ***Примечание**:* Метод **`filter()`** создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// > 
// - Напишите функцию `filter`,  которая принимает первым параметром массив, вторым - callback-функцию. Функция `filter` должна создавать новый отфильтрованный массив и возвращать его или возвращать пустой массив `[]`. сallback-функцию должна проверять каждый элемент исходного массива на соответствие заданному условию внутри самой сallback-функции. Она должна принимать два параметра: сам элемент и индекс, а также возвращать булевое значение  (`const result = callback(array[index], index)`, где `result` может быть либо `true`, либо `false`). Если `result` равен `true`, то проверяемый элемент попадает новый массив, если `false`, то не попадает в новый массив.
// - Передайте в созданную функцию `filter` числовой массив, а в качестве callback-функции - функцию, которая будет проверять элемент на чётность. Если элемент чётный, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.

// ```jsx
// const arr1 = [2, 3, 42, 15, 99, 5, 8];
// const newArr1 = filter(arr1, myCallbackFunc);
// console.log(newArr1); // [2, 42, 8];

// const arr2 = [1, 3, 5];
// const newArr2 = filter(arr2, myCallbackFunc);
// console.log(newArr2); // [];


function filter(array, callback) {
    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        let elem = array[index];
        let result = callback(elem, index);
        if (result === true) {
            newArr.push(elem);
        }
    }

    return newArr;
}

// function myCallbackFunc(elem) {
//     if (elem % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


//***********
//стрелочная функция


const myCallbackFunc = (elem) => {
    if (elem % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const arr1 = [2, 3, 42, 15, 99, 5, 8];
const newArr1 = filter(arr1, myCallbackFunc);
console.log(newArr1); // [2, 42, 8];



const arr2 = [1, 3, 5];
const newArr2 = filter(arr2, myCallbackFunc);
console.log(newArr2); // [];