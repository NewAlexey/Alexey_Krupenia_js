//1.1 Create shop list. Create function: first show only bought products, then - not bought

let shopList = [
    { title: "milk", count: 5, isBuy: true },
    { title: "bread", count: 2, isBuy: false },
    { title: "butter", count: 1, isBuy: false },
    { title: "cheese", count: 4, isBuy: false },
    { title: "chips", count: 3, isBuy: true },
];

//first method
let newList = "";
function isBought(object) {
    for (let i = 0; i < object.length; i++) {
        if (object[i].isBuy == true) {
            newList += object[i].title + " ";
        }
    }
    for (let i = 0; i < object.length; i++) {
        if (object[i].isBuy !== true) {
            newList += object[i].title + " ";
        }
    }
}

//check
// isBought(shopList);
// console.log(newList);

//second method
function isBought(object) {
    let newArr = object.sort((a, b) => b.isBuy - a.isBuy);
    let newList = "";
    newArr.forEach((element) => {
        newList += element.title + " ";
    });
    console.log(newList);
}

//check
// isBought(shopList);

//1.2 Add product in a list. If product exist - add count;

function addProduct(product) {
    let productOfList = shopList.find((item) => item.title === product);
    if (productOfList) {
        productOfList.count++;
    } else {
        shopList.push({ title: product, count: 1, isBuy: false });
    }
}

//check
// addProduct("wine");
// console.log(shopList);

//1.3 Function takes product and marks as "purchased"

function markProduct(product) {
    shopList.forEach(element => {
        if (element.title === product) {
            element.isBuy = true;
        }
    });
}
markProduct('milk');
console.log(shopList);

//1.1 Show index of minimal item of array ++++++++

let myArray = [10, -20, 8, 7, 2, 10, -7];

function showIndexMinItem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item < resultItem) resultItem = item;
    });
    let res = arr.findIndex((item) => item === resultItem);
    console.log(res);
}
//check
// showIndexMinItem(myArray);

// 1.2 Fint sum all item of array after index [0] ++++++

function showAbsSum(arr) {
    let result = 0;
    for (let i = 1; i < arr.length; i++) {
        result += Math.abs(arr[i]);
    }
    console.log(result);
}
//check
// showAbsSum(myArray);

// 2.1 Show index of maximum item of array +++++

function showIndexMaxItem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item > resultItem) resultItem = item;
    });
    let res = arr.findIndex((item) => item === resultItem);
    console.log(res);
}
//check
// showIndexMaxItem(myArray);

//2.2 Show summ all items after first positive +++++

let indexOfMinItem = function (arr) {
    return arr.findIndex((item) => item > 0);
};
// check
// console.log(indexOfMinItem(myArray));

let sumItemsAfterFirstPositive = function (index, arr) {
    let sum = 0;
    for (index++; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
};
let showSumAfterFirstPositive = function (arr) {
    let c = indexOfMinItem(arr);
    return sumItemsAfterFirstPositive(c, arr);
};
// check
// console.log(showSumAfterFirstPositive(myArray));

let myArray = [1, -70, 30, 14, 5, -10, 6, 10];

// 3.1 Find sum from a to B in array +++
function sumItem(arr) {
    let a = 0;
    let b = 3;
    let sum = 0;
    for (a; a <= b; a++) {
        sum += arr[a];
    }
    return sum;
}
//check
// console.log(sumItem(myArray));

// 3.2 Find sum all Item of array after the biggest item of array ++++++

let maxItemOfArray = function (arr) {
    let maxItem = arr[0];
    arr.forEach((item) => {
        if (item >= maxItem) maxItem = item;
    });
    return maxItem;
};

let indexOfMaxItem = function (max, arr) {
    return arr.findIndex((item) => item === max);
};

let sumItemAfterBiggest = function (arr) {
    let a = maxItemOfArray(arr);
    let maxIndex = indexOfMaxItem(a, arr)
    let sumAfterMax = 0;
    for (maxIndex++; maxIndex < arr.length; maxIndex++) {
        sumAfterMax += arr[maxIndex];
    }
    return sumAfterMax;
};
//check
// console.log(sumItemAfterBiggest(myArray));

//4.1 Find sum count element of array which = 0 ++++

function countElemEqualZero(arr) {
    let count = 0;
    arr.forEach((item) => {
        if (item === 0) {
            count++;
        }
    });
    return count;
}
// //check
// console.log(countElemEqualZero(myArray));

// 4.2 Find sum all Item of array after the lesser item of array ++++++

let minItemOfArray = function (arr) {
    let minItem = arr[0];
    arr.forEach((item) => {
        if (item <= minItem) minItem = item;
    });
    return minItem;
};
// //check
// // console.log(minItemOfArray(myArray));

let indexOfMinItem = function (min, arr) {
    return arr.findIndex((item) => item === min);
};
//check
// console.log(indexOfMinItem(minItemOfArray(myArray), myArray))

let sumItemAfterBiggest = function (arr) {
    let a = minItemOfArray(arr);
    let minIndex = indexOfMinItem(a, arr)
    let sumAfterMin = 0;
    for (minIndex++; minIndex < arr.length; minIndex++) {
        sumAfterMin += arr[minIndex];
    }
    return sumAfterMin;
};
// // // check
// // console.log(sumItemAfterBiggest(myArray));

let myArray = [3, 7, 5, 2, 3, 35, 7, 3];

// // 5.1 Count items in array which < C ++++++

let c = 80;
let countItemLessC = function (arr, c) {
    let count = 0;
    arr.forEach(item => {
        if (item < c) count++;
    });
    return count;
}
//check
// console.log(countItemLessC(myArray, c));

// // 5.2 Multiply items in array after biggest item +++++++++++

let maxItemOfArray = function (arr) {
    let maxItem = arr[0];
    arr.forEach(item => {
        if (item >= maxItem) maxItem = item;
    });
    return maxItem;
};

let indexOfMaxItem = function (max, arr) {
    return arr.findIndex(item => item === max);
};

let multItemAfterBiggest = function (arr) {
    let a = maxItemOfArray(arr);
    let maxIndex = indexOfMaxItem(a, arr)
    let multAfterMax = 1;
    for (maxIndex++; maxIndex < arr.length; maxIndex++) {
        multAfterMax *= arr[maxIndex];
    }
    return Math.abs(multAfterMax);
};
// // check
// console.log(multItemAfterBiggest(myArray));

//6.1 Count negative items of array  +++++++

let countNegItems = function(arr) {
    let count = 0;
    arr.forEach((items) => {
        if (items < 0) count++
    });
    return count;
}
// //check
// console.log(countNegItems(myArray));

//6.2 Find |sum| item of array after min item   +++++

let minItemOfArray = function (arr) {
    let minItem = arr[0];
    arr.forEach((item) => {
        if (Math.abs(item) <= Math.abs(minItem)) minItem = item;
    });
    return Math.abs(minItem);
};

let indexOfMinItem = function (min, arr) {
    return arr.findIndex((item) => item === min);
};

let sumAbsItemAfterMin = function (arr) {
    let a = minItemOfArray(arr);
    let minIndex = indexOfMinItem(a, arr)
    let sumAbsAfterMin = 0;
    for (minIndex++; minIndex < arr.length; minIndex++) {
        sumAbsAfterMin += Math.abs(arr[minIndex]);
    }
    return Math.abs(sumAbsAfterMin);
};
// //check
// console.log(sumAbsItemAfterMin(myArray));

// 7.1 Count positive items of array   +++++

let countPosItemArray = function(arr) {
    let count = 0;
    arr.forEach(item => {
        if (item > 0) count++;
    });
    return count;
}
//check
// console.log(countPosItemArray(myArray));

// 7.2 Find sum items of array after item = 0   +++++

let indexOfZero = function (arr) {
    return arr.findIndex(item => item === 0);
};

let sumAbsItemAfterMin = function (arr) {
    let zeroIndex = indexOfZero(arr);
    let sumAfterZero = 0;
    for (zeroIndex++; zeroIndex < arr.length; zeroIndex++) {
        sumAfterZero += arr[zeroIndex];
    }
    return sumAfterZero;
};
// //check
// console.log(sumAbsItemAfterMin(myArray));

let myArray = [10, 7, 5, 2, 3, 36, 7, -3, 1];

// 8.1 Find count items in array which > C   ++++++++++++++

let c = 4;
let countItemLessC = function (arr, c) {
    let count = 0;
    arr.forEach(item => {
        if (item < c) count++;
    });
    return count;
}
//check
// console.log(countItemLessC(myArray, c));

//8.2 Find sum of integer part of number after last negative number  ++++++++

let negElemOfArray = function (arr) {
    let negElem = arr[0];
    arr.forEach((item) => {
        if (item < negElem) negElem = item;
    });
    return negElem;
};

let indexOfNegItem = function (neg, arr) {
    return arr.findIndex((item) => item === neg);
};

let sumIntPartOfElemAfterNeg = function (arr) {
    let a = negElemOfArray(arr);
    let index = indexOfNegItem(a, arr)
    let sumIntPartOfElem = 0;
    for (index++; index < arr.length; index++) {
        sumIntPartOfElem += Math.trunc(arr[index]);
    }
    return Math.abs(sumIntPartOfElem);
};
// //check
// console.log(sumIntPartOfElemAfterNeg(myArray));

//9.1 Find mult of negative elements of array +++++++++++++

let multNegElem = function(arr) {
    let mult = 1;
    arr.forEach(item => {
        if(item < 0) mult *= item;
    });
    return mult;
}

// console.log(multNegElem(myArray));

//9.2 Find sum of positive elem, which located before max elements ++++++++++++++

let findMaxElem = function(arr) {
    let maxElem = arr[0];
    arr.forEach(item => {
        if (item > maxElem) maxElem = item;
    });
    return maxElem;
}

let findIndexOfMaxElem = function(elem, arr) {
    return arr.findIndex(item => item === elem);
}

let findSumPosElemOfArr = function(arr) {
    let max = findMaxElem(arr);
    let indexOfMaxElem = findIndexOfMaxElem(max, arr);
    let sumOfPosElem = 0;
    for (let i = 0; i < indexOfMaxElem; i++) {
        if (arr[i] > 0) {
            sumOfPosElem += arr[i];
        }
    }
    return sumOfPosElem;
}
// //check
// console.log(findSumPosElemOfArr(myArray));

//10.1 Find index of max element of array   ++++++++++

let findMaxElem = function(arr) {
    let maxElem = arr[0];
    arr.forEach(item => {
        if (item > maxElem) maxElem = item;
    });
    return maxElem;
}

let findIndexOfMaxElem = function(arr) {
    let maxItem = findMaxElem(arr);
    return arr.findIndex(item => item === maxItem);
}
// //check
// console.log(findIndexOfMaxElem(myArray));

//10.2 Find sum of positive elem, which located before min elements

let findMinElem = function(arr) {
    let minElem = arr[0];
    arr.forEach(item => {
        if (item < minElem) minElem = item;
    });
    return minElem;
}

let findIndexOfMinElem = function(elem, arr) {
    return arr.findIndex(item => item === elem);
}

let findSumBeforeNegElem = function(arr) {
    let min = findMinElem(arr);
    let indexOfMinElem = findIndexOfMinElem(min, arr);
    let sumElemOfArr = 0;
    for (let i = 0; i < indexOfMinElem; i++) {
        if (arr[i] > 0) {
            sumElemOfArr += arr[i];
        }
    }
    return sumElemOfArr;
}
// //check
// console.log(findSumBeforeNegElem(myArray));

// 1) Create array with 10 random numbers.
// 2) Show it on a screen.
// 3) Show only even numbers.
// 4) Show sum all elem of array.
// 5) Show max elem of array.
// 6) Add shown elem in shown index.
// 7) Delete elem from shown index.

//1, 2  Create array with 10 random numbers, show it on a screen

let countOfElemInArray = 9;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let addElemInArr = function (a) {
    let arr = [];
    for (let i = 0; i <= a; i++) {
        arr.push(getRandomIntInclusive(1, 9));
    }
    return arr;
};
let myArr = addElemInArr(countOfElemInArray);
//check
console.log(myArr);

//3 Show only even numbers

function showEvenElem(arr) {
    arr.forEach((element) => {
        if (element % 2 === 0) console.log(`Even element of array - ${element}`);
    });
}
//check
showEvenElem(myArr);

//4 Show sum all elem of array

function getSumElemOfArray(arr) {
    let sum = 0;
    arr.forEach((element) => (sum += element));
    return console.log(`Sum all elements of array - ${sum}`);
}
//check
getSumElemOfArray(myArr);

//5 Show max elem of array

function showMaxElemOfArray(arr) {
    let max = arr[0];
    arr.forEach((element) => {
        if (element > max) max = element;
    });
    return console.log(`Max element of array - ${max}`);
}
//check
showMaxElemOfArray(myArr);

//6 Add shown elem in shown index.
let newElement = 666;
let newIndex = 6;
let arrayWithNewElement = function(elem, index, arr) {
    let newArr = arr.splice(0, index, elem);
    return (newArr);
}

// first way
// let newArray1 = [...arrayWithNewElement(newElement, newIndex, myArr), ...myArr];
// console.log(newArray1);

// second way
// let newArray2 = arrayWithNewElement(newElement, newIndex, myArr).concat(myArr);
// console.log(newArray2);

//7 Delete element from shown index
let deleteIndex = 2;
let arrayAfterSplice = function(arr, index) {
    arr.splice(index, 1);
}

arrayAfterSplice(myArr, deleteIndex);
console.log(myArr);