// Метод findLastIndex помогает найти индекс первого элемента с конца массива, соответствующий условию согласно переданному в параметре коллбэку. Если элемента нет, то возвращается undefined.

// Пример

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130



// Пример 
// Давайте найдем индекс положительного числа в массиве:

let arr1 = [-12, -13, 14, 15];

let res1 = arr1.findLastIndex(function (elem) {
    return elem > 0;
});

console.log(res1);
// Результат выполнения кода: 3



// Пример 
// А теперь давайте найдем индекс элемента, которого нет в массиве:

let arr = ['a', 'b', 'c', 'd'];

let res = arr.findLastIndex(function (elem) {
    return elem === 'f';
});

console.log(res);
// Результат выполнения кода:  -1