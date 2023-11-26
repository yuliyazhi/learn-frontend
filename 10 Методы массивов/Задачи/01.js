
// Даны два массива. Написать функцию, которая будет из первого массива удалять все значения второго, возвращая новый массив. Порядок оставшихся элементов должен сохраняться.

const arr = arrayDiff([1, 2], [1]);
console.log(arr); // [2]

const arr2 = arrayDiff([1, 2, 2, 4, 4, 3], [2, 4]);
console.log(arr2); // [1, 3]

// [2, 4].includes(1) = false
// [2, 4].includes(2) = true
// [2, 4].includes(2) = true
// [2, 4].includes(4) = true

function arrayDiff(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            continue;
        } else {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

const arr1 = [1].includes([1, 2]);


console.log(arr); // [2]

// _________________________________ cvt
function arrayDiff(arr1, arr2) {
    let newArr = arr1.filter((elem) => {
        if (!arr2.includes(elem)) {
            return true;
        } else {
            return false
        }
    });
    return newArr;
}


function arrayDiff(arr1, arr2) {
    let newArr = arr1.filter((elem) => {
        return !arr2.includes(elem);
    });
    return newArr;
}



function arrayDiff(arr1, arr2) {
    let newArr = arr1.filter((elem) => !arr2.includes(elem));
    return newArr;
}

//самое короткое решение

function arrayDiff(arr1, arr2) {
    return arr1.filter((elem) => !arr2.includes(elem));
}