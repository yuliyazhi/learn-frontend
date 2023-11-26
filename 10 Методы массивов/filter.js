// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// Callback возвращает  true или false
//Если ни один элемент не удовл усвлоию -  filter вернет пустой массив

// Интерактивный пример

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

// Expected output: Array ["exuberant", "destruction", "present"]
