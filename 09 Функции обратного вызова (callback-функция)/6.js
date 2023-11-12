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

const myCallbackFunc = (elem) => {
    if (typeof elem === "string") {
        return true;
    } else {
        return false;
    }
}


const arr = [43, -23, -12, 5, -1, 42];
function filter(arr) {
    let arr2 = [];

    for (let elem of arr) {
        if (elem < 0) {
            arr2.push(elem)
        }

    }

    return arr2;
}

const arrWithNegative = filter(arr);

console.log(arrWithNegative);


// function myCallbackFunc(elem) {
//     if (typeof elem === "string") {
//         return true;
//     } else {
//         return false;
//     }
// }

//***********
//стрелочная функция


// ещё вариант

// const result5 = arr1.filter((elem)=> {
//     if (typeof elem === "string") {
//         return true;
//     } else {
//         return false;
//     }
// })

const arr1 = [4, "i", 67, "phone", -434, "42"];
const newArr1 = filter(arr1, myCallbackFunc);
console.log(newArr1); // ["i", "phone", "42"];


const arr2 = [4, 67, -434, 0];
const newArr2 = filter(arr2, myCallbackFunc);
console.log(newArr2); // [];

// ------------------------------
// Эта задача с использованием метода filter

const result3 = arr1.filter((element) => { return typeof element === 'string' })
console.log(result3);


const result4 = arr1.filter((element) => typeof element === 'string');
console.log(result4);



