// Метод join() объединяет все элементы массива(или массивоподобного объекта) в строку.

// Интерактивный пример


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


const a = ["Ветер", "Дождь", "Огонь"];
let myVar1 = a.join(); // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
let myVar2 = a.join(", "); // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
let myVar3 = a.join(" + "); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
let myVar4 = a.join(""); // присвоит 'ВетерДождьОгонь' переменной myVar4


