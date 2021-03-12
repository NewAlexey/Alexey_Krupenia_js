// Reduce
// Task 1 - Find sum of array
let array = [1, 2, 3, 0, 4, 5, 6];
let sumTask1 = array.reduce((acc, item) => {
    return (acc += item);
});

// console.log(sumTask1);

//Task 2 - find sum of N elem, from first to zero-element
// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let indexZeroTask2 = array.length;
let sumTask2 = array.reduce((acc, item, index) => {
    if (item === 0) {
        indexZeroTask2 = index;
    }
    if (index < indexZeroTask2) {
        return (acc += item);
    }
    return acc;
});

// console.log(sumTask2);

//Task 3 - find sum last N elements of array from end to element-zero
// Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.

let indexZeroTask3 = array.length;
let sumTask3 = array.reduce((acc, item, index) => {
    if (item === 0) {
        indexZeroTask3 = index;
    }
    if (index > indexZeroTask3) {
        return (acc += item);
    }
    return acc;
}, 0);

// console.log(sumTask3);

//Task 4 - find count elements of array from start, which sum > 10;
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let sumElemTask4 = 0;
let countELemTask4 = array.reduce((acc, item) => {
    if (sumElemTask4 > 10) return acc;
    else {
        sumElemTask4 += item;
        return acc += 1;
    }
}, 0);

console.log(countELemTask4);

//Task 5 - find count elements of array from end, which sum > 10;
// Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.
let sumElemTask5 = 0;
let countELemTask5 = array.reverse().reduce((acc, item) => {
    if (sumElemTask5 > 10) return acc;
    else {
        sumElemTask5 += item;
        return acc += 1;
    }
}, 0);

console.log(countELemTask5);
