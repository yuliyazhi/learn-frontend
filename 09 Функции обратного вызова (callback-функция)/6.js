// ***Задача 9.6***

// Используйте функцию `filter` из предыдущей задачи. Функция `filter` будет принимать массив с числами и строками. Напишите callback-функцию, которая будет проверять тип элемента. Если тип элемента `string`, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.

// ```jsx
// const arr1 = [4, "i", 67, "phone", -434, "42"];
// const newArr1 = filter(arr1, myCallbackFunc);
// console.log(newArr1); // ["i", "phone", "42"];

// const arr2 = [4, 67, -434, 0];
// const newArr2 = filter(arr2, myCallbackFunc);
// console.log(newArr2); // [];
// ```

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
//     if (typeof elem === "string") {
//         return true;
//     } else {
//         return false;
//     }
// }

//***********
//стрелочная функция

const myCallbackFunc = (elem) => {
    if (typeof elem === "string") {
        return true;
    } else {
        return false;
    }
}


const arr1 = [4, "i", 67, "phone", -434, "42"];
const newArr1 = filter(arr1, myCallbackFunc);
console.log(newArr1); // ["i", "phone", "42"];


const arr2 = [4, 67, -434, 0];
const newArr2 = filter(arr2, myCallbackFunc);
console.log(newArr2); // [];





