// Дан объект. Вывести в консоль названия всех его свойств.
const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};

//output  name  age  breed  city  address


let a = Object.keys(dog);
a.forEach((elem) => console.log(elem));