// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.


// Примеры

// Пример: отображение массива чисел на массив квадратных корней
// Следующий код берёт массив чисел и создаёт новый массив, содержащий квадратные корни чисел из первого массива.
const numbers1 = [1, 4, 9];
const roots = numbers1.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]


// Пример: отображение массива чисел с использованием функции, содержащей аргумент
// Следующий код показывает, как работает отображение, когда функция требует один аргумент. Аргумент будет автоматически присваиваться каждому элементу массива, когда map проходит по оригинальному массиву.

const numbers2 = [1, 4, 9];
const doubles = numbers2.map((num) => num * 2);
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]


//  Пример: обобщённое использование map
// Этот пример показывает, как использовать map на объекте строки String для получения массива байт в кодировке ASCII, представляющего значения символов:

const map = Array.prototype.map;
const charCodes = map.call("Hello World", (x) => x.charCodeAt(0));
// теперь charCodes равен [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]


// Пример: обобщённое использование map вместе с querySelectorAll
// Этот пример показывает, как пройтись по коллекции объектов, собранных с помощью querySelectorAll. В данном случае мы получаем все выбранные опции на экране и печатаем их в консоль:

const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
// Более простым способом будет использование метода Array.from().


// Пример: использование map для переворачивания строки
const string = "12345";
const reversed = Array.prototype.map
    .call(string, (x) => x)
    .reverse()
    .join("");
// reversed равен '54321'

