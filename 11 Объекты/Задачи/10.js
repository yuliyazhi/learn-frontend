// Даны два массива, в первом перечислены по порядку названия фильмов, во втором - режиссёры этих фильмов.Написать функцию, которая будет принимать эти два массива, возвращать массив объектов со свойствами: название фильма и режиссёр.

// // input
// const movieTitles = ["Зеленая миля", "Побег из Шоушенка", "Форрест Гамп", "1+1", "Список Шиндлера"];
// const movieDirectors = ["Фрэнк Дарабонт", "Фрэнк Дарабонт","Роберт Земекис", "Оливье Накаш", "Стивен Спилберг"];

// // output
// [
// 	{title: "Зеленая миля", director: "Фрэнк Дарабонт"},
// 	{title: "Побег из Шоушенка", director: "Фрэнк Дарабонт"},
// 	{title: "Форрест Гамп", director: "Роберт Земекис"},
// 	{title: "1+1", director: "Оливье Накаш"},
// 	{title: "Список Шиндлера", director: "Стивен Спилберг"},
// ]


const movieTitles = ["Зеленая миля", "Побег из Шоушенка", "Форрест Гамп", "1+1", "Список Шиндлера"];
const movieDirectors = ["Фрэнк Дарабонт", "Фрэнк Дарабонт", "Роберт Земекис", "Оливье Накаш", "Стивен Спилберг"];

// не подходит т.к. elem = {} вносит изменения в параметр, это ошибка
// let showList = movieTitles.map((elem, index) => (elem = { title: elem, director: movieDirectors[index] }));


let showList = movieTitles.map((elem, index) => ({ title: elem, director: movieDirectors[index] }));

console.log(showList);


// аналогично, с созданием переменной
// const movieTitles = ["Зеленая миля", "Побег из Шоушенка", "Форрест Гамп", "1+1", "Список Шиндлера"];
// const movieDirectors = ["Фрэнк Дарабонт", "Фрэнк Дарабонт", "Роберт Земекис", "Оливье Накаш", "Стивен Спилберг"];


// let showList = movieTitles.map((elem, index) => {
//  let x = {
//    title: elem,
//    director: movieDirectors[index]
//  };
// return x;
// });

// console.log(showList);


let list = movieTitles.map((elem, index) => (`{title: "${elem}", director: "${movieDirectors[index]}"}`));
list.forEach((elem) => console.log(elem)) 