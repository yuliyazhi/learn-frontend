// Метод includes() определяет, содержит ли массив определённый элемент, 
// возвращая в зависимости от этого true или false.

// Интерактивный пример



const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


// Примеры


[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true  -1 с конца
[1, 2, NaN].includes(NaN); // true


