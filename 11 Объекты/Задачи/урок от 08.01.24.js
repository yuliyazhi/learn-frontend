const users = [
    {
        name: "Василий",
        age: 34,
    },
    {
        name: "Марина",
        age: 12,
    },
    {
        name: "Иван",
        age: 67,
    },
];

// 1. 
users.forEach((elem) => console.log(elem.name));

//2.
let usersWithEmail = users.map((elem) => {
    let newUser = {
        ...elem,
        email: "",
    };
    return newUser;
});
console.log(usersWithEmail);

//3.
let oldUsers = users.filter((elem) => elem.age >= 18);
console.log(oldUsers);

//4.
let user = users.find((elem) => elem.age < 18)
console.log(user);

//5.
let isOld = users.every((elem) => elem.age >= 18);
console.log(isOld);


const users = [
    {
        id: 1,
        name: "Василий",
        age: 34,
        addresID: 12,
    },
    {
        id: 2,
        name: "Марина",
        age: 12,
        addresID: 14,
    },
    {
        id: 3,
        name: "Иван",
        age: 67,
        addresID: 13,
    },
    {
        id: 4,
        name: "Александр",
        age: 9,
        addresID: 11,
    },
];

const usersAddres = [
    {
        id: 11,
        addres: "Москва",
    },
    {
        id: 12,
        addres: "СПБ",
    },
    {
        id: 13,
        addres: "Ростов",
    },
    {
        id: 14,
        addres: "НСК",
    }
];

//newUsers = [
//	{
//    id: 1,
//    name: "Василий",
//    age: 34,
//    addres: "СПБ",
//  },
// ...
// ]

let newUsers = users.map((user) => {
    let newUser = {
        ...user,

        addres: usersAddres.find((addres) => user.addresID === addres.id).addres,

        addresID: undefined,
    };

    return newUser;
});

console.log(newUsers);