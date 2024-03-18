// Задача 11.14
// Дан объект. Написать функцию, которая будет возвращать новый объект, в котором имена и значения свойств поменяются местами. Для решения задачи потребуется метод объектов, который в практикуме не описывался, его можно найти в документации.
// Посмотреть данные
// // input
// const dog = {
// 	name: "Рекс",
// 	age: 3,
// 	home: "Москва",
// };

// // output
// const newDog = {
// 	"Рекс": "name",
// 	"3": "age",
// 	"Москва": "home",
// };

const dog = {
    name: "Рекс",
    age: 3,
    home: "Москва",
};

let x = Object.entries(dog);
console.log(x);

//[["name","Рекс"],["age",3],["home","Москва"]]
let xChange = x.map((arr) => {
    let newArr = [arr[1], arr[0]];
    return arr;
})
console.log(xChange);

const newDog = Object.fromEntries(xChange);
console.log(newDog);
//[["Рекс", "name"],[3, "age"],["Москва", "home"]]