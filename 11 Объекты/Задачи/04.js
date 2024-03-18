// Используя объект из предыдущего задания, вывести в консоль имя и значение каждого свойства.

const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};
console.log(Object.entries(dog));

// output
// "name: Рекс"
// "age: 3"
// "breed: Немецкая овчарка"
// "city: Москва"
// "address: ул. Ленина, 2"

const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};
let a = Object.entries(dog);
//a.forEach((elem) => console.log(`"${elem[0]}: ${elem[1]}"`));

let firstName = "first-name"
dog[firstName] = "dfgdfg";

// смотреть, понять!!!!!!!!!!!!! ниже

for (let nameProp in dog) {
    console.log(`${nameProp}: ${dog[nameProp]}`);
}
//let arr = ["name","Рекс"];
//let name = "name";
//let value = "Рекс";
//let newWord = `${arr[0]}: ${arr[1]}`;
//outpu
//"name: Рекс"