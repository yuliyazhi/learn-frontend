// ***Задача 5.4***

// Дано n - размер матрицы. Пользуясь двумя циклами и одним ветвлением выведете на экран:

// ```jsx
// 1 0 0 0 0 0 0 0 0 0
// 0 1 0 0 0 0 0 0 0 0
// 0 0 1 0 0 0 0 0 0 0
// 0 0 0 1 0 0 0 0 0 0
// 0 0 0 0 1 0 0 0 0 0
// 0 0 0 0 0 1 0 0 0 0
// 0 0 0 0 0 0 1 0 0 0
// 0 0 0 0 0 0 0 1 0 0
// 0 0 0 0 0 0 0 0 1 0
// 0 0 0 0 0 0 0 0 0 1
// ```

// Решение:

let n = 10;
for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j < n; j++)
        if (i == j) {
            str = str + "1";
        } else { str = str + "0" }
    console.log(str)
}