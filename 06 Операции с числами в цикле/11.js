// ***Задача 5.11****

// Дано n - размер матрицы. Выведете на экран:

// ```jsx
// 0 1 1 1 1 1 1 1 1 0
// 4 0 1 1 1 1 1 1 0 2
// 4 4 0 1 1 1 1 0 2 2
// 4 4 4 0 1 1 0 2 2 2
// 4 4 4 4 0 0 2 2 2 2
// 4 4 4 4 0 0 2 2 2 2
// 4 4 4 0 3 3 0 2 2 2
// 4 4 0 3 3 3 3 0 2 2
// 4 0 3 3 3 3 3 3 0 2
// 0 3 3 3 3 3 3 3 3 0

// ```

// Решение:

// let n = 10;
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//         if ((j < i && i !== 0 && i < n / 2) || (j < i && j + i >= n / 2 && j + i < n - 1)) {
//             str = str + "4 ";
//         } if (i < n / 2 && j > i && j + i < n - 1) {
//             str = str + "1 ";
//         } if (i > n / 2 - 1 && j < i && j + i > n - 1) {
//             str = str + "3 ";
//         } if (i == j || i + j === n - 1) {
//             str = str + "0 ";
//         } if ((j > i && j > n / 2 && i >= n / 2) || (j > n / 2 && i !== 0 && j + i >= n && i < n / 2)) {
//             str = str + "2 ";
//         }

//     }
//     console.log(str)

//     // короче

//     let n = 10;
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         for (let j = 0; j < n; j++) {
//             if ((j < i && i !== 0 && i < n / 2) || (j < i && j + i >= n / 2 && j + i < n - 1)) {
//                 str = str + "4 ";
//             } else if (i < n / 2 && j > i && j + i < n - 1) {
//                 str = str + "1 ";
//             } else if (i > n / 2 - 1 && j < i && j + i > n - 1) {
//                 str = str + "3 ";
//             } else if (i == j || i + j === n - 1) {
//                 str = str + "0 ";
//             } else {
//                 str = str + "2 ";
//             }

//         }
//         console.log(str)
//     }

// }

отлично


let n = 10;
for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
        if (i == j || i + j === n - 1) {
            str = str + "0 ";
        } else if (j > i && i + j < n - 1) {
            str = str + "1 ";
        } else if (j < i && i + j > n - 1) {
            str = str + "3 ";
        } else if (j < i && i + j < n - 1) {
            str = str + "4 ";
        } else {
            str = str + "2 ";
        }

    }
    console.log(str)
}

