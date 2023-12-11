// Задача 10.5
// Написать функцию, которая будет искать массив внутри двумерного массива и возвращать индекс найденного элемента, иначе возвращает -1.
// Двумерным массивом в JS является массив, элементами которого являются массивы. Например, [[0, 0, 0], [1, 1, 1], [2, 2, 2]].
// const twoDimArray = [[0, 0, 0], [1, 1, 1], [2, 2, 3]];
// const query1 = [1, 1, 1];
// const result1 = indexOfArray(twoDimArray, query1);
// console.log(result1); // 1

// const query2 = [4, 4, 4];
// const result2 = indexOfArray(twoDimArray, query2);
// console.log(result2); // -1



// --------- РЕШЕНИЯ----------------

// const twoDimArray = [[7, 5, 2, 5, 2], [2, 5, 7], [2, 7], [2, 7]];
// const query1 = [2, 7];
// const result = isEqual(twoDimArray, query1);
// console.log(result);

// function isEqual(arr, arr2) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i].length === arr2.length && arr[i][j] === arr2[j]) {
//                 return i;
//             }
//         }
//     }
// }

// --------------

// const twoDimArray = [[7, 5, 2, 5, 2], [2, 5, 7]];
// const query1 = [2, 7];
// const result = indexOfArray(twoDimArray, query1);
// console.log(result);

// function indexOfArray(arr, arr2) {
//     for (let i = 0; i < arr.length; i++) {
//         if (isEqual(arr[i], arr2)) {
//             return i;
//         }
//     }
//     return -1;
// }

// function isEqual(arr1, arr2) {
//     let result = true;

//     if (arr1.length !== arr2.length) {
//         result = false;
//     } else {
//         result = arr1.every((elem, index) => elem === arr2[index]);
//     }

//     return result;
// }


// --------------- ЕЩЁ СПОСОБ-----------------

// const twoDimArray = [[7, 5, 2, 5, 2], [2, 5, 7], [2, 7]];
// const query1 = [2, 7];
// const result = indexOfArray(twoDimArray, query1);
// console.log(result);

// function indexOfArray(arr, arr2) {
//     let index = arr.findIndex((elem) => {
//         if (isEqual(elem, arr2)) {
//             return true;
//         } else {
//             return false;
//         }
//     })
//     return index;
// }

// function isEqual(arr1, arr2) {
//     let result = true;

//     if (arr1.length !== arr2.length) {
//         result = false;
//     } else {
//         result = arr1.every((elem, index) => elem === arr2[index]);
//     }

//     return result;
// }

// -------------


const twoDimArray = [[7, 5, 2, 5, 2], [2, 5, 7], [2, 7]];
const query1 = [2, 7];
const result = indexOfArray(twoDimArray, query1);
console.log(result);

function indexOfArray(arr, arr2) {
    return arr.findIndex((elem) => isEqual(elem, arr2));
}

function isEqual(arr1, arr2) {
    let result = true;

    if (arr1.length !== arr2.length) {
        result = false;
    } else {
        result = arr1.every((elem, index) => elem === arr2[index]);
    }

    return result;
}

