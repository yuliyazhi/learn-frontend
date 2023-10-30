// // *** Задача 9.3(аналог метода map) ***

// // > *** Примечание **:* Метод`map()` создаёт новый массив с результатом
//  вызова указанной функции для каждого элемента массива.
// // // >
// // //     - Напишите функцию`map`, которая принимает первым параметром массив,//  вторым - callback - функцию.
// Функция`map` должна создавать новый массив и возвращать его.
// сallback - функцию должна применяться к каждому элементу исходного массива и принимает два параметра:
//  сам элемент и индекс, а также возвращать элемент нового массива(`const newElem = callback(array[index], index)`).
//  Созданный новый элемент должен записываться в новый массив.
// // // - Передайте в созданную функцию `map` числовой массив,
// // а в качестве callback - функции - функцию, которая будет высчитывать квадрат каждого элемента и возвращать его.
// Callback - функцию можно создавать стрелочным способом.

// // ```jsx
// // const arr = [2, 3, 4, 5];
// // const newArr = map(arr, myCallbackFunc);
// // console.log(newArr); // [4, 9, 16, 25];
// // ```

function map(array, callback) {
    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        let elem = array[index];
        let result = callback(elem, index);
        newArr.push(result);
    }

    return newArr;
}


// function calc(elem, index) {
//     let num = elem * elem;
//     return num;
// }

// const array = [1, 2, 3, 4, 5];
// let a = map(array, calc);
// console.log(a);



//***********
//стрелочная функция

const array = [1, 2, 3, 4, 5];

let arrSquare = map(array, (elem, index) => {
    let num = elem * elem;
    return num;
});
console.log(arrSquare);
