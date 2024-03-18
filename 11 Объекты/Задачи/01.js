// Даны переменные. На их основе создать объект.
// const firstName = "Иван";
// const lastName = "Иванов";
// const age = 23;
// const email = "ivanov@mail.ru";


const firstName = "Иван";
const lastName = "Иванов";
const age = 23;
const email = "ivanov@mail.ru";

const user = {
    "first-name": firstName,
    "last-name": lastName,
    age,
    email,
};

console.log(user);

const user2 = {};
user2["first-name"] = firstName;
user2["last-name"] = lastName;
user2.age = age;
user2.email = email;

console.log(user2);