
const text = [null, 7, 9, 0, 8, null, 8, 5, 9, null, 9, 7, null, 9, 2];

let b = text.filter((elem) => typeof elem === 'number');
console.log(b); 