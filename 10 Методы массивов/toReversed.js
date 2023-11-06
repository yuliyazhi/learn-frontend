// Метод toReversed() меняет порядок элементов в массиве на обратный, как и метод reverse(), но возвращает новый массив:

// пример

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]