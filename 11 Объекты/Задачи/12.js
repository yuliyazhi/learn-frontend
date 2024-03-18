// Задача 11.12
// Допустим, что с бекенда приходит массив объектов, в которых одним из свойств является объект пользователей user. Написать функцию, которая будет принимать данный массив и возвращать массив объектов user. При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.
// Посмотреть данные
// // input
// [
// 	{
// 		id: 1,
// 		user: {
// 			id: 101,
// 			name: "Юрий",
// 			age: 28,
// 		},
// 		city: "Москва",
// 		role: "author",
// 	},
// 	{
// 		id: 2,
// 		user: {
// 			id: 102,
// 			name: "Юлия",
// 			age: 20,
// 		},
// 		city: "Санкт-Петербург",
// 		role: "reader",
// 	},
// 	...
// ]

// // output
// [
// 	{
// 		id: 101,
// 		name: "Юрий",
// 		age: 28,
// 	},
//  {
// 		id: 102,
// 		name: "Юлия",
// 		age: 20,
// 	},
// 	...
// ]

let list = [
    {
        id: 1,
        user: {
            id: 101,
            name: "Юрий",
            age: 28,
        },
        city: "Москва",
        role: "author",
    },
    {
        id: 2,
        user: {
            id: 102,
            name: "Юлия",
            age: 20,
        },
        city: "Санкт-Петербург",
        role: "reader",
    },
]
list[2] = {
    id: 3,
    user: {
        id: 103,
        name: "Юрий",
        age: 26,
    },
    city: "Минск",
    role: "reader",
},
    list[3] = {
        id: 4,
        user: {
            id: 104,
            name: "Семён",
            age: 34,
        },
        city: "Омск",
        role: "author",
    },
    list[4] = {
        id: 5,
        user: {
            id: 105,
            name: "Жанна",
            age: 34,
        },
        city: "Улан-Удэ",
        role: "reader",
    },
    list[5] = {
        id: 6,
        user: {
            id: 106,
            name: "Олег",
            age: 41,
        },
        city: "Улан-Удэ",
        role: "author",
    },

    list[6] = {
        id: 7,
        user: {
            id: 107,
            name: "Андрей",
            age: 30,
        },
        city: "Новосибирск",
        role: "author",
    }


let users = list.map((elem) => elem.user);
console.log(users);