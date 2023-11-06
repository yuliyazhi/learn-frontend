// Метод toSpliced немного отличается от своей исходной версии splice.

// Метод splice изменяет существующий массив путем удаления и добавления элементов по указанному индексу и возвращает массив, содержащий удаленные элементы из массива.

// toSpliced возвращает новый массив без удаленных элементов и с добавленными элементами. Вот как это работает:

// Пример


const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]

// *****************

const a = [2, 3, 6, 1];

const d = a.toSpliced(0, 1);

console.log(a) // вывод: [2, 3, 6, 1]
console.log(d) // вывод: [3, 6, 1]

// *****************

const languages = ['Russian', 'English', 'Deutsch'];
const spliced = languages.toSpliced(2, 1, 'Chinese', 'Spanish');
console.log(spliced); // ['Russian', 'English', 'Chinese', 'Spanish']
console.log(Object.is(languages, spliced)); // false
// Если вы используете splice из-за его возвращаемого значения, то toSpliced не будет полностью совместимым заменителем. Если вы хотите получить удаленные элементы без изменения исходного массива, то вам следует использовать метод slice.

// К сожалению, у splice и slice разные аргументы.

// splice принимает индекс и количество элементов после этого индекса, которые нужно удалить.
// slice принимает два индекса - начальный и конечный. Если вы хотите использовать toSpliced вместо splice, но также получить удаленные элементы, вы можете применить toSpliced и slice к исходному массиву, вот так:

const languages1 = ['Russian', 'English', 'Deutsch'];
const startDeletingAt = 2;
const deleteCount = 1;
const spliced1 = languages1.toSpliced(startDeletingAt, deleteCount, 'Chinese', 'Spanish');
const removed = languages1.slice(startDeletingAt, startDeletingAt + deleteCount);
console.log(spliced); // ['Russian', 'English', 'Chinese', 'Spanish']
console.log(removed); // ['De1