
// *** Задача 5.10 ****

// Дано n - размер матрицы. Выведете на экран:

// ```jsx
// 0 1 1 1 1 1 1 1 1 0
// 0 0 1 1 1 1 1 1 0 0
// 0 0 0 1 1 1 1 0 0 0
// 0 0 0 0 1 1 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0
// ```

// Решение:

// let n = 10;
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//         if (i < n / 2 && j > i && j + i < n - 1) {
//             str = str + "1 ";
//         } else {
//             str = str + "0 ";
//         }
//     }
//     console.log(str)
// }


// ещё лучше и короче

let n = 10;
for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
        if (j > i && i + j < n - 1) {
            str = str + "0 ";
        } else {
            str = str + "1 ";
        }
    }
    console.log(str)
}


x = 28;
prev1 = 1;
prev2 = 1;
num = 0;

while (num < x) {
    if (prev1 <= 1) {
        console.log(`${prev1} - нечётное число`)
    } else if (num % 2 === 0) {
        console.log(`${num} - чётное число`)
    } else {
        console.log(`${num} - нечётное число`)
    }
    num = prev1 + prev2;
    prev1 = prev2;
    prev2 = num;


}