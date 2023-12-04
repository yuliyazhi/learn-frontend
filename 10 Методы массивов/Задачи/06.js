// Задача 10.6*
// Напишите функцию, которая разделяет массив на части заданного размера.
// const arr = [1, 2, 3, 4, 5];
// console.log(chunks(arr, 2)); // [[1, 2], [3, 4], [5]]
// console.log(chunks(arr, 3)); // [[1, 2, 3], [4, 5]]

const arr = [1, 2, 3, 4, 5, 9, 8, 7];
function chunks(array, num) {
    let newArr = [];
    let bigArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i])
        if (newArr.length === num) {
            bigArr.push(newArr);
            newArr = [];
        }
    } if (newArr.length !== 0)
        bigArr.push(newArr);
    return bigArr;
}

console.log(chunks(arr, 2)); // [[1, 2], [3, 4], [5]]
console.log(chunks(arr, 3)); // [[1, 2, 3], [4, 5]]

// c методом slice
const arr = [1, 5, 3, 4, 8];

function chunks(array, num) {
    const newArray = [];
    for (let i = 0; i < arr.length; i += num) {
        let a = array.slice(i, num + i);
        newArray.push(a);
    }

    return newArray;

}
console.log(chunks(arr, 2));
console.log(chunks(arr, 3));