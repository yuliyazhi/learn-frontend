// Используя объект из предыдущего задания, вывести в консоль все значения его свойств.
const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};

//output  name  age  breed  city  address


let b = Object.values(dog);
b.forEach((elem) => console.log(elem)) 