// *** Задача 8.9 ***

//     Написать функцию, принимающую массив отрицательных и положительных чисел.
//     Она должна возвращать новый массив только с отрицательными числами.
//     const arr = [43, -23, -12, 5, -1, 42];

// const arrWithNegative = filter(arr);

//console.log(arrWithNegative); // [-23, -12, -1]


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