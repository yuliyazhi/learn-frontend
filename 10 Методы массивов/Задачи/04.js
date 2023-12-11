// Напишите функцию, которая убирает повторяющиеся элементы в массиве. Постараться сохранить исходный порядок элементов в массиве.
// const arr = [1, 2, 2, 3, 3, 4, 5, 6, 6];
// const newArr = unique(arr);
// console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

const arr = [1, 2, 2, 3, 3, 4, 3, 5, 6, 6];
const newArr = unique(arr);
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

function unique(array) {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i])
        }
    }

    return newArr;
}

// ------- с помощью метода forEach

const arr1 = [1, 2, 2, 3, 3, 4, 3, 5, 6, 6];
const newArr1 = unique(arr1);
console.log(newArr1); // [ 1, 2, 3, 4, 5, 6 ]

function unique(arr1) {
    const newArr = [];
    arr1.forEach(elem => {
        if (!newArr.includes(elem)) {
            newArr.push(elem);
        }
    });

    return newArr;
}

// ------- с помощью метода filter
function unique(arr1) {
    const newArr = arr1.filter((elem, index) => {
        if (arr1.indexOf(elem) === index) {
            return true;
        } else {
            return false;
        }
    });

    return newArr;
}

// --------------
function unique(arr1) {
    const newArr = arr1.filter((elem, index) => arr1.indexOf(elem) === index
    );

    return newArr;
}

// --------------


function unique(arr1) {
    return arr1.filter((elem, index) => arr1.indexOf(elem) === index);
}