// Задача 10.3
// Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки (””), ноль (0), null.
// const arr = [1, false, "42", "", null, 67, undefined, -45, 0, "apple"];
// const newArr = withoutEmpty(arr);
// console.log(newArr); // [1, "42", 67, -45, "apple"]

const arr1 = [1, false, "42", "", null, 67, undefined, -45, 0, "apple"];
// const result = arr1.filter((elem) => { return (elem) });
const result = arr1.filter((elem) => Boolean(elem));
// более понятно что логич смысл уточняем
// const result = arr.filter((elem) => { return (typeof elem === "string" || typeof elem === "number") && elem !== "" && elem !== 0 });

console.log(result);
console.log(arr1);

// ---------------------------------


const arr = [1, false, "42", "", null, 67, undefined, -45, 0, "apple"];
function withoutEmpty(arr) {
    const newArr = [];
    for (let elem of arr) {
        if (elem) {
            // т.к.когда if, он все пробует преобразовать  в true  или false (булевое значение)
            newArr.push(elem);
        }
        // if ((elem !== "" && elem !== 0) && typeof elem === "number" || typeof elem === "string") {
        //     newArr.push(elem);
        // }
    }
    return newArr;
}

const newArr = withoutEmpty(arr);
console.log(newArr); // [1, "42", 67, -45, "apple"]

