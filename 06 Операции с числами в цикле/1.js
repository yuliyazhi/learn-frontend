// ** Задача 6.1 ***

//     ---

//     Выведите n первых членов последовательности Фибоначчи, где каждый следующий член равен сумме двух предыдущих:

// 1, 1, 2, 3, 5, 8, 13

// ---

//     Нам уже хорошо знаком цикл `for`: он делает заранее известное количество шагов.Но что если нам нужно сделать несколько шагов, но мы не знаем заранее сколько ? Для этого существует цикл`while`.

// Давайте решим такую задачу: выведем все степени числа x пока они не превысят 1000. Для `x = 3` это должно выглядеть так:

// ```
// 1
// 3
// 9
// 27
// 81
// 243
// 729

// ```

// Давайте построим алгоритм: берём единицу - это`x^0`, заметем умножаем её на`x` - это`x^1`, затем ещё раз умножаем на`x` - это`x^2`, и так далее пока результат не превысит 1000. Теперь запишем алгоритм на языке JavaScript:

let x = 3;
let result = 1; // в этой переменной будет храниться результат - степень x

// пока условие в скобках верно (result < 1000) - цикл продолжает исполняться.
// Как только result превысит 1000 - цикл сразу прервётся.
while (result < 1000) {
    console.log(result); // на каждом шагу выводим результат
    result *= x; // на каждом шагу умножаем результат на x, повышая степень
}