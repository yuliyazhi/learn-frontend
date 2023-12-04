// Метод some() проверяет, удовлетворяет ли какой - либо элемент массива условию, заданному в передаваемой функции.
// true или false

// Примечание: метод возвращает false при любом условии для пустого массива.

// Интерактивный пример

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true



// Примеры
// Проверка значений элементов массива
// Следующий пример проверяет наличие в массиве элемента, который больше 10.

function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
Play


// Проверка элементов массива с использованием стрелочных функций
// Стрелочные функции предоставляют более краткий синтаксис для подобных проверок.


[2, 5, 8, 1, 4].some((elem) => elem > 10); // false
[12, 5, 8, 1, 4].some((elem) => elem > 10); // true
Play


// Проверка наличия элемента в массиве
// Чтобы имитировать функцию метода includes(), эта пользовательская функция возвращает true, если элемент существует в массиве:


const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
Play


// Проверка наличия элемента в массиве с использованием стрелочной функции
const fruits1 = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits1, "kela"); // false
checkAvailability(fruits1, "banana"); // true
Play


// Приведение значения к логическому типу

const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
    "use strict";

    if (typeof value === "string") {
        value = value.toLowerCase().trim();
    }

    return TRUTHY_VALUES.some(function (t) {
        return t === value;
    });
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true


