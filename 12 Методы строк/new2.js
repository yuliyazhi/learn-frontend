// находим "главный" элемент нашей страницы и сохраняем ссылку на него в константу
const task1 = document.querySelector(".task-1"); // поиск по class

// находим другие необходимые эелменты внутри "главного" элементы
// и ссылки на них сохраняем в константы
const input = task1.querySelector("#input"); // поиск по id
const btn = task1.querySelector(".btn");
const result = task1.querySelector('.result');

// Теперь необходимо добавить обработку введённых данных в поле ввода по нажатию на кнопку,
//  т.е. по нажатию на кнопку `"Отправить"` нужно получать данные (строку) из поля ввода, выполнить над этими некоторые манипуляции с помощью JavaScript,
//  получить результат и вывести его пользователя на экран внутрь элемента `<p>`.

// Событие нажатия на кнопку обрабатывается методом `addEventListener`. Добавим в `index.js` следующий код:

// на элемент <button> по ссылке btn с помощью метода addEventListener
// добавляется обработчик события "click" (нажатие на кнопку) - первый аргумент метода
// второй аргумент - callback-функция, которая будет вызваться каждый раз при клике на кнопку
// в данном случае callback-функция - это анонимная стрелочная функция
btn.addEventListener("click", () => {
    // ниже код, который выполняется при каждом клике на кнопку "Отправить"


    // из элемента <input> по ссылке input через свойство value
    // получаем введённые данные из поля ввода 
    const text = input.value;

    // проверяем, введён ли номер
    if (text) {
        // разделяем текст на элементы и записываем их в массив 
        const textSplit = text.split("");

        // преобразуем строку в число, получаем 
        let textMap = textSplit.map((num) => parseInt(num));
        console.log(textMap)

        // соединеям в строку элементы массива
        let textJoin = textMap.join("");
        // console.log(textJoin)

        // делим строку по разделтьелю Nan и получаем массив строк
        let textSplit2 = textJoin.split("NaN");
        // console.log(textSplit2)

        // фильтруем только числа
        let numbers = textSplit2.filter((elem) => Boolean(elem));
        // console.log(numbers)


        result.textContent = numbers;

        // очищаем поле ввода
        input.value = "";

    }
}

);

// btn2.addEventListener("click", () => {
//     const text = input2.value;

//     if (text) {
//         const textSplit = text.split("");

//         let textMap = textSplit.map((char) => parseInt(char));
//         console.log(textMap);

//         let numbers = [];
//         let str = "";
//         for (let elem of textMap) {
//             if (!isNaN(elem)) {
//                 str += elem;
//             } else if (str != "") {
//                 numbers.push(parseInt(str));
//                 str = "";
//             }

//             if (elem == textMap.at(-1) && str != "") {
//                 numbers.push(parseInt(str));
//                 str = "";
//             }
//         }

// let textJoin = textMap.join("");

// let textSplit2 = textJoin.split(NaN);

// let numbers = textSplit2.filter((elem) => Boolean(elem));

// result2.textContent = numbers;

// input2.value = "";
//     }
// });

