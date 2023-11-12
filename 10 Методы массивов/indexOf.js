// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или - 1, если такого индекса нет.

// Примеры
// Пример: использование indexOf()
// В следующем примере indexOf() используется для поиска значений в массиве.



const array = [2, 5, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0


// Пример: нахождение всех вхождений элемента
// В следующем примере indexOf() используется для поиска всех индексов элемента в указанном массиве, которые с помощью push() добавляются в другой массив.



const indices = [];
var array1 = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array1.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array1.indexOf(element, idx + 1);
}

console.log(indices);
// [0, 2, 4]
