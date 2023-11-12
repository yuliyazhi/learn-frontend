// ***Задача 9.7 (аналог метода find)***

// > ***Примечание**:* Метод **`find()`** возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается `undefined`.
// > 
// - Напишите функцию `find`, которая принимает первым параметром массив, вторым - callback-функцию. сallback-функцию должна проверять каждый элемент исходного массива на соответствие заданному условию внутри самой сallback-функции. Она должна принимать два параметра: сам элемент и индекс, а также возвращать булевое значение  (`const result = callback(array[index], index)`, где `result` может быть либо `true`, либо `false`). Если `result` равен `true`, то необходимо прекратить поиск и вернуть найденный элемент, если `false`, то продолжаем поиск. Если после завершения поиска, элемент не был найдет, то функция `filter` возвращает `undefined`.
// - Передайте в созданную функцию `find` массив строк, а в качестве callback-функции - функцию, которая будет проверять элемент на равенство строке `“apple”.` Если элемент равен строке `“apple”`, то возвращает `true`. в противном случае возвращает `false`. Callback-функцию можно создавать стрелочным способом.

// ```jsx
// const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
// const elem1 = find(arr1, myCallbackFunc);
// console.log(elem1); // "apple"

// const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];
// const elem2 = find(arr2, myCallbackFunc);
// console.log(elem2); // undefined



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
// //     if (elem === "apple") {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }



// //***********
// //стрелочная функция


// const myCallbackFunc = (elem) => {
//     if (elem === "apple") {
//         return true;
//     } else {
//         return false;
//     }
// };

// const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
// const elem1 = find(arr1, myCallbackFunc);
// console.log(elem1); // "apple"

// const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];
// const elem2 = find(arr2, myCallbackFunc);
// console.log(elem2); // undefined  

// ------------------------------
// Эта задача с использованием метода find


const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];


const result3 = arr1.find((element) => { return element === 'apple' });
console.log(result3);


const result4 = arr2.find((element) => { return element === 'apple' });
console.log(result4);

// или

const myCallbackFunc = (elem) => {
    if (elem === "apple") {
        return true;
    } else {
        return false;
    }
};


const arr3 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
const elem1 = arr3.find(myCallbackFunc);
console.log(elem1); // "apple"

const arr4 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];
const elem2 = arr4.find(myCallbackFunc);
console.log(elem2); // undefined  