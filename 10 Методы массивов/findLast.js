
// FindLast обходит массив с конца, возвращая первый элемент, который удовлетворяет переданной в метод функции(или undefined, если не нашел).

// Пример

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130


// Пример 
// Давайте найдем элемент массива, соответствующий условиям, прописанным в функции:

let arr = [1, 2, 3, 4, 5];

let res = arr.findLast(function (elem) {
    return elem > 0;
});

console.log(res);
// Результат выполнения кода: 5


