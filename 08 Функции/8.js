// *** Задача 8.8 ***

//     Написать функцию, принимающую массив чисел.
//     Она должна возвращать новый массив с квадратами элементов переданного массива.
//     const arr = [1, 2, 3, 4];

// const arrWithSquare = map(arr);

// console.log(arrWithSquare); // [1, 4, 9, 16]

const arr = [1, 2, 3, 4];
function map(arr) {
    let arr2 = [];

    for (let elem of arr) {
        let a = elem * elem;
        arr2.push(a)
    }

    return arr2;
}

const arrWithSquare = map(arr);

console.log(arrWithSquare);
