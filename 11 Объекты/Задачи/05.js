
// Дан массив объектов. Вывести в консоль все эти объекты.
// const movies = [
//     { title: "Зеленая миля", director: "Фрэнк Дарабонт" },
//     { title: "Побег из Шоушенка", director: "Фрэнк Дарабонт" },
//     { title: "Форрест Гамп", director: "Роберт Земекис" },
//     { title: "1+1", director: "Оливье Накаш" },
//     { title: "Список Шиндлера", director: "Стивен Спилберг" },
// ];

// //output
// '{title: "Зеленая миля", director: "Фрэнк Дарабонт"}'
// '{title: "Побег из Шоушенка", director: "Фрэнк Дарабонт"}'
// '{title: "Форрест Гамп", director: "Роберт Земекис"}'
// '{title: "1+1", director: "Оливье Накаш"}'
// '{title: "Список Шиндлера", director: "Стивен Спилберг"}'


const movies = [
    { title: "Зеленая миля", director: "Фрэнк Дарабонт" },
    { title: "Побег из Шоушенка", director: "Фрэнк Дарабонт" },
    { title: "Форрест Гамп", director: "Роберт Земекис" },
    { title: "1+1", director: "Оливье Накаш" },
    { title: "Список Шиндлера", director: "Стивен Спилберг" },
];
movies.forEach((elem) => console.log(`'{title: "${elem.title}", director: "${elem.director}"}'`));