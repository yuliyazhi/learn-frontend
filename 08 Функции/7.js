
// *** Задача 8.7 ***

//     Написать функцию, принимающую массив чисел.Она должна возвращать сумму всех элементов.
//     console.log(sum([1, 2, 3, 4])); // 10
//     console.log(sum([-5, -10, 15])); // 0


function sum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum = sum + elem;

    } return sum;
}
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([-5, -10, 15])); // 0
