// Допустим, что с бекенда приходит массив объектов со свойствами: {n: “Алексей”, a: 24, h: “Москва”, p: “курьер”, c: “Toyota”}. Написать функцию, которая будет возвращать новый массив объектов, в которых имена свойств будут соответствовать их значениям, например, n заменится на name и т.д. При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.
// Посмотреть данные
// // input
// [
// 	{n: "Алексей", a: 24, h: "Москва", p: "курьер", c: "Toyota"},
// 	{n: "Евгения", a: 32, h: "Тюмень", p: "юрист", c: "Nissan"},
// 	...
// ]


let list = [
    { n: "Алексей", a: 24, h: "Москва", p: "курьер", c: "Toyota" },
    { n: "Евгения", a: 32, h: "Тюмень", p: "юрист", c: "Nissan" },
]

list[2] = { n: "Арина", a: 26, h: "Пермь", p: "дизайнер", c: "Nissan" },
    list[3] = { n: "Максим", a: 34, h: "Омск", p: "врач", c: "Skoda" },
    list[4] = { n: "Сергей", a: 41, h: "Иркутск", p: "экспедитор", c: "Opel" },
    list[5] = { n: "Олег", a: 30, h: "Тюмень", p: "продавец", c: "Lada" },
    list[5] = { n: "Жанна", a: 27, h: "Абакан", p: "кондитер", c: "Toyota" },

    // этот способ изменяет исходный массив, так не надо.
    //     list.forEach((elem) => {
    //         elem.name = elem.n;
    //         elem.age = elem.a;
    //         elem["home-city"] = elem.h;
    //         elem.profession = elem.p;
    //         elem.car = elem.c;

    //         elem.n = undefined;
    //         elem.a = undefined;
    //         elem.h = undefined;
    //         elem.p = undefined;
    //         elem.c = undefined;
    //     }

    //     );



    // console.log(list)

    let newList = list.map((elem) => {
        let newObj = {};
        newObj.name = elem.n;
        newObj.age = elem.a;
        newObj.homeCity = elem.h;
        newObj.profession = elem.p;
        newObj.car = elem.c;
        return newObj;
    });



console.log(newList)

// сократили
let newList = list.map((elem) => ({
    name: elem.n,
    age: elem.a,
    homeCity: elem.h,
    profession: elem.p,
    car: elem.c,
}));

console.log(newList) 