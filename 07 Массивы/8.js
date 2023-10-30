// ***Задача 7.8***

// Дан массив `a`. Поменяйте местами его минимальный и максимальный элементы и выведете на экран.

// Пример: `let a = [7, 2, 3, 0];`

// Решение:

let a = [3, 2, 7, 0];

let min = a[0];
let max = a[0];
let iMin;
let iMax;

for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        iMin = i;
    }

    if (a[i] > max) {
        max = a[i];
        iMax = i;
    }
}

a[iMin] = max;
a[iMax] = min;

console.log(`min: ${min}, iMin: ${iMin}, max: ${max}, iMax: ${iMax}`);
console.log(a);