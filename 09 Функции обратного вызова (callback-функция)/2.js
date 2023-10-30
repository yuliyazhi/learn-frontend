// *** Задача 9.2 ***

//     Используйте функцию `forEach` из предыдущей задача.
//  Напишите callback - функцию, которая будет для каждого элемента числового массива рассчитывать сумму элемента с его индексом и выводить в консоль.
//     Callback - функцию можно создавать стрелочным способом.
//     const arr = [1, 2, 3, 4, 5];
// forEach(arr, myCallbackFunc);
// // "1 + 0 = 1"
// // "2 + 1 = 3"
// // "3 + 2 = 5"
// // "4 + 3 = 7"
// // "5 + 4 = 9"

function forEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let elem = array[index];
        callback(elem, index);
    }
}

// function calc(elem, index) {
//     let sum = elem + index;
//     console.log(`"${elem} + ${index} = ${sum}"`);

// }
// const array = [1, 2, 3, 4, 5];
// forEach(array, calc);



//***********
//стрелочная функция



const array = [1, 2, 3, 4, 5];

forEach(array, (elem, index) => {
    let sum = elem + index;
    console.log(`"${elem} + ${index} = ${sum}"`);

});
