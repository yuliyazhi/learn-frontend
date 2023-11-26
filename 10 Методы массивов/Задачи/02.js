
// Задача 10.2
// Напишите функцию, которая сравнивает два массива, если они равны, вернуть true, иначе false.
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// console.log(isEqual(arr1, arr2)); // true

const arr1 = [1, 2, 3, "4"]
const arr2 = [1, 2, 3, "4"];


function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    } return true
}
console.log(isEqual(arr1, arr2));


// или
const result = isEqual(arr1, arr2);

function isEqual(array1, array2) {
    let result = false;

    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
    }

    return result;
}

console.log(result); // true



function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}



function isEqual(arr1, arr2) {
    let result = true;

    if (arr1.length !== arr2.length) {
        result = false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            result = false;
            break;
        }
    }

    return result;
}


function isEqual(arr1, arr2) {
    let result = true;

    if (arr1.length !== arr2.length) {
        result = false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                result = false;
                break;
            }
        }
    }

    return result;
}

// метод every
function isEqual(arr1, arr2) {
    let result = true;

    if (arr1.length !== arr2.length) {
        result = false;
    } else {
        result = arr1.every((elem, index) => {
            if (elem !== arr2[index]) {
                return false;
            } else {
                return true;
            }
        });
    }

    return result;
}

// сокращаем

function isEqual(arr1, arr2) {
    let result = true;

    if (arr1.length !== arr2.length) {
        result = false;
    } else {
        result = arr1.every((elem, index) => elem === arr2[index]);
    }

    return result;
}