// находим "главный" элемент нашей страницы и сохраняем ссылку на него в константу
const task = document.querySelector(".task-1"); // поиск по class

// находим другие необходимые эелменты внутри "главного" элементы
// и ссылки на них сохраняем в константы
const input = task.querySelector("#input"); // поиск по id
const btn = task.querySelector(".btn");
const result = task.querySelector('.result');

// Теперь необходимо добавить обработку введённых данных в поле ввода по нажатию на кнопку,
//  т.е. по нажатию на кнопку `"Отправить"` нужно получать данные (строку) из поля ввода, выполнить над этими некоторые манипуляции с помощью JavaScript,
//  получить результат и вывести его пользователя на экран внутрь элемента `<p>`.

// Событие нажатия на кнопку обрабатывается методом `addEventListener`. Добавим в `index.js` следующий код:

// на элемент <button> по ссылке btn с помощью метода addEventListener
// добавляется обработчик события "click" (нажатие на кнопку) - первый аргумент метода
// второй аргумент - callback-функция, которая будет вызваться каждый раз при клике на кнопку
// в данном случае callback-функция - это анонимная стрелочная функция
// btn.addEventListener("click", () => {
//     // ниже код, который выполняется при каждом клике на кнопку "Отправить"


//     // из элемента <input> по ссылке input через свойство value
//     // получаем введённые данные из поля ввода 
//     const numbers = input_1.value;

//     // проверяем, введён ли номер
//     if (numbers) {
//         console.log(numbers)

//         // разделяем номер на элементы и записываем их в массив 
//         const numSplit = numbers.split("");

//         // преобразуем в строку элементы массива
//         let numMap = numSplit.map((num) => parseInt(num));
//         // фильтруем по типу данных
//         let numFilter = numMap.filter((elem) => Boolean(elem) || elem === 0);
//         // ??? почему не работает typeof elem === 'number'

//         // соединяем все цифры массива b в одну строку без пробелов
//         let numJoin = numFilter.join("");

//         // оставляем 10 последних цифр номера
//         let newNum = numJoin.slice(-10);

//         // добавляем +7 
//         let phone = "+7" + newNum;
//         // проверяем длину номера
//         if (phone.length < 11) {
//             alert(`Введите верный номер`)
//         }
//         // добавляем в элемент <p> по ссылке result c помощью свойства textContent текст revText
//         result.textContent = phone;

//         // очищаем поле ввода
//         input.value = "";

//     }
// }

// );

btn.addEventListener("click", () => {
    const phone = input.value;

    if (phone) {
        let b = phone.match(/[a-z]/g)
        let x = phone.match(/[A-Z]/g)



        result.textContent = `строчных букв: ${b.length}, прописных букв: ${x.length}`;

        input.value = "";
    }
});