//1.1 Create shop list. Create function: first show only bought products, then - not bought

let shopList = [
    { title: "milk", count: 5, isBuy: true, price: 1.5 },
    { title: "bread", count: 2, isBuy: false, price: 1.3 },
    { title: "butter", count: 1, isBuy: false, price: 2.9 },
    { title: "cheese", count: 4, isBuy: false, price: 12.5 },
    { title: "chips", count: 3, isBuy: true, price: 2.7 },
];

//first method
let newList = "";
function isBought(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isBuy == true) {
            newList += arr[i].title + " ";
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isBuy !== true) {
            newList += arr[i].title + " ";
        }
    }
}
// isBought(shopList);
// console.log(newList);

//second method
function isBought(arr) {
    let newArr = arr.sort((a, b) => b.isBuy - a.isBuy);
    let newList = "";
    newArr.forEach((element) => {
        newList += element.title + " ";
    });
    console.log(newList);
}
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
// addProduct("wine");
// console.log(shopList);

//1.3 Function takes product and marks as "purchased

function markProduct(product) {
    shopList.forEach((element) => {
        if (element.title === product) {
            element.isBuy = true;
        }
    });
}
// markProduct("bread");
// console.log(shopList);

//1.4 Function for sort by price
function sortByPrice(arr) {
    arr.sort((a, b) => b.price - a.price);
    console.log(arr);
}
// sortByPrice(shopList);

//1.5 Function for sort by name
function sortByName(arr) {
    arr.sort((a, b) => {
        if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
    });
    console.log(arr);
}
sortByName(shopList);

let myArray = [10, 20, 8, 0, -2, 0, -7, 3];

//1.1 Find index of min element of array
function showIndexMinItem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item < resultItem) {
            resultItem = item;
        }
    });
    let indexOfMinElem = arr.findIndex((item) => item === resultItem);
    console.log(`Index of min element - "${indexOfMinElem}"`);
}
showIndexMinItem(myArray);

// 1.2 Calc sum of elements after first negative elem of array
function calcSumAfterFirstNeg(arr) {
    let firstNegElem = arr.find((item) => item < 0);
    let indexNegElem = arr.findIndex((item) => item === firstNegElem);
    let sum = arr.reduce((acc, elem, index) => {
        if (index > indexNegElem) {
            return (acc += elem);
        }
        return acc;
    }, 0);
    console.log(`Sum all element after first negative element - "${sum}"`);
}
calcSumAfterFirstNeg(myArray);

//2.1 Find index of max element of array
function showIndexMaxItem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item > resultItem) {
            resultItem = item;
        }
    });
    let indexOfMaxElem = arr.findIndex((item) => item === resultItem);
    console.log(`Index of max element - "${indexOfMaxElem}"`);
}
showIndexMaxItem(myArray);

//2.2 Find sum of elements after first positive elem of array
function calcSumAfterFirstPos(arr) {
    let firstPosElem = arr.find((item) => item > 0);
    let indexPosElem = arr.findIndex((item) => item === firstPosElem);
    let sum = arr.reduce((acc, elem, index) => {
        if (index > indexPosElem) {
            return (acc += elem);
        }
        return acc;
    }, 0);
    console.log(`Sum all element after first positive element - "${sum}"`);
}
calcSumAfterFirstPos(myArray);

//3.1 Find count of elements which are between A and B

function findElemBetween(arr) {
    let a = -5;
    let b = 50;
    count = arr.reduce((acc, item) => {
        if (item > a && item < b) {
            return (acc += 1);
        }
        return acc;
    }, 0);
    console.log(`Count elements of array between A and B - "${count}"`);
}
findElemBetween(myArray);

//3.2 Find sum of elements after max elem of array
function calcSumAfterMaxElem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item > resultItem) resultItem = item;
    });
    let indexOfMaxElem = arr.findIndex((item) => item === resultItem);
    let sum = arr.reduce((acc, item, index) => {
        if (index > indexOfMaxElem) {
            return (acc += item);
        }
        return acc;
    });
    console.log(`Sum all element after max element - "${sum}"`);
}
calcSumAfterMaxElem(myArray);

//4.1 Find count elements of array which = 0
function calcElemZero(arr) {
    let count = arr.reduce((acc, item) => {
        if (item === 0) {
            return (acc += 1);
        }
        return acc;
    }, 0);
    console.log(`Count elements which = 0 - "${count}"`);
}
calcElemZero(myArray);

//4.2 Find sum all elements of array after min element of array
function sumElemAfterMin(arr) {
    let minElem = arr[0];
    arr.forEach((item) => {
        if (item < minElem) {
            minElem = item;
        }
    });
    let indexMinElem = arr.findIndex((item) => item === minElem);
    let sumAfterMin = arr.reduce((acc, item, index) => {
        if (index > indexMinElem) {
            return (acc += item);
        }
        return acc;
    }, 0);
    console.log(`Sum elements after min element of array - "${sumAfterMin}"`);
}
sumElemAfterMin(myArray);

//5.1 Find count of elements which larger than C
function countElemLargerC(arr) {
    let C = 7;
    let count = arr.reduce((acc, item) => {
        if (item > C) {
            return (acc += 1);
        }
        return acc;
    }, 0);
    console.log(`Count elements which larger than C - "${count}"`);
}
countElemLargerC(myArray);

//5.2 Mult of elements after larger |element|
function multElemAfterLargerAbs(arr) {
    let resultItem = Math.abs(arr[0]);
    arr.forEach((item) => {
        if (Math.abs(item) > resultItem) {
            resultItem = Math.abs(item);
        }
    });
    let indexOfMaxAbs = arr.findIndex((item) => item === resultItem);
    let mult = arr.reduce((acc, item, index) => {
        if (index > indexOfMaxAbs) {
            return (acc *= item);
        }
        return acc;
    }, 1);
    console.log(`Mult elements after the larget |element| - "${mult}"`);
}
multElemAfterLargerAbs(myArray);

//6.1 Count of elements which < 0
function countElemLesserZero(arr) {
    let count = arr.reduce((acc, item) => {
        if (item < 0) {
            return (acc += 1);
        }
        return acc;
    }, 0);
    console.log(`Count of elements which < 0 - "${count}"`);
}
countElemLesserZero(myArray);

//6.2 Sum |elements| after min |elements|
function sumAfterMinElemAbs(arr) {
    let minElemAbs = Math.abs(arr[0]);
    arr.forEach((item) => {
        if (Math.abs(item) < minElemAbs) {
            minElemAbs = Math.abs(item);
        }
    });
    let indexMinElemAbs = arr.findIndex((item) => Math.abs(item) === minElemAbs);
    let sumAbs = arr.reduce((acc, item, index) => {
        if (index > indexMinElemAbs) {
            return (acc += Math.abs(item));
        }
        return acc;
    }, 0);
    console.log(`Sum |elements| after min |elements| - "${sumAbs}"`);
}
sumAfterMinElemAbs(myArray);

//7.1 Count of elements which > 0
function countElemLargerZero(arr) {
    let count = arr.reduce((acc, item) => {
        if (item > 0) {
            return (acc += 1);
        }
        return acc;
    }, 0);
    console.log(`Count of elements which > 0 - "${count}"`);
}
countElemLargerZero(myArray);

//7.2 Count elements after last zero-element
function countElemAfterLastZero(arr) {
    let count = arr.length - arr.lastIndexOf(0) - 1;
    console.log(`Count elements after last zero-element - "${count}"`);
}
countElemAfterLastZero(myArray);

//8.1 Find count of elements which lesser than C
function countElemLesserC(arr) {
    let C = 7;
    let count = arr.reduce((acc, item) => {
        if (item < C) {
            return (acc += 1);
        }
        return acc;
    }, 0);
    console.log(`Count elements which lesser than C - "${count}"`);
}
countElemLesserC(myArray);

//8.2 Sum integer part of elements after last negative element of array
function sumIntPartOfElemAfterLastNeg(arr) {
    let lastNegElem;
    arr.forEach((item) => {
        if (item < 0) {
            lastNegElem = item;
        }
    });
    let indexLastNegElem = arr.lastIndexOf(lastNegElem);
    let sumIntPart = arr.reduce((acc, item, index) => {
        if (index > indexLastNegElem) {
            return (acc += Math.trunc(item));
        }
        return acc;
    }, 0);
    console.log(`Sum of elements after last negative element - "${sumIntPart}"`);
}
sumIntPartOfElemAfterLastNeg(myArray);

//9.1 Mult of negative element of array
function multNegElem(arr) {
    let mult = arr.reduce((acc, item) => {
        if (item < 0) {
            acc *= item;
            return acc;
        }
        return acc;
    });
    console.log(`Mult negative element of array - "${mult}"`);
}
multNegElem(myArray);

//9.2 Sum positive elements before max element
function calcSumBeforeMaxElem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item > resultItem) resultItem = item;
    });
    let indexOfMaxElem = arr.findIndex((item) => item === resultItem);
    let sum = arr.reduce((acc, item, index) => {
        if (index < indexOfMaxElem && item > 0) {
            return (acc += item);
        }
        return acc;
    }, 0);
    console.log(`Sum positive elements before max element - "${sum}"`);
}
calcSumBeforeMaxElem(myArray);

//10.1 Find index of max element of array
function showIndexMaxItem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item > resultItem) {
            resultItem = item;
        }
    });
    let indexOfMaxElem = arr.findIndex((item) => item === resultItem);
    console.log(`Index of max element - "${indexOfMaxElem}"`);
}
showIndexMaxItem(myArray);

//10.2 Sum positive elements before min element
function calcSumBeforeMinElem(arr) {
    let resultItem = arr[0];
    arr.forEach((item) => {
        if (item < resultItem) resultItem = item;
    });
    let indexOfMinElem = arr.findIndex((item) => item === resultItem);
    let sum = arr.reduce((acc, item, index) => {
        if (index < indexOfMinElem) {
            return (acc += item);
        }
        return acc;
    }, 0);
    console.log(`Sum elements before min element - "${sum}"`);
}
calcSumBeforeMinElem(myArray);

// 1) Create array with 10 random numbers.
// 2) Show it on a screen.
// 3) Show only even numbers.
// 4) Show sum all elem of array.
// 5) Show max elem of array.
// 6) Add shown elem in shown index.
// 7) Delete elem from shown index.

//1, 2  Create array with 10 random numbers, show it on a screen

let countOfElemInArray = 10;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let addElemInArr = function (countElem) {
    let arr = [];
    for (let i = 0; i < countElem; i++) {
        arr.push(getRandomIntInclusive(1, 9));
    }
    return arr;
};
let myArr = addElemInArr(countOfElemInArray);
console.log(myArr);

//3 Show only even numbers

function showEvenElem(arr) {
    arr.forEach((element) => {
        if (element % 2 === 0) console.log(`Even element of array - ${element}`);
    });
}
// showEvenElem(myArr);

//4 Show sum all elem of array

function getSumElemOfArray(arr) {
    let sum = 0;
    arr.forEach((element) => (sum += element));
    return console.log(`Sum all elements of array - ${sum}`);
}
// getSumElemOfArray(myArr);

//5 Show max elem of array

function showMaxElemOfArray(arr) {
    let max = arr[0];
    arr.forEach((element) => {
        if (element > max) max = element;
    });
    return console.log(`Max element of array - ${max}`);
}
// showMaxElemOfArray(myArr);

//6 Add shown elem in shown index.
let newElement = 666;
let newIndex = 6;
let arrayWithNewElement = function (elem, index, arr) {
    let newArr = arr.splice(0, index, elem);
    return newArr;
};

// first way
// let newArray1 = [...arrayWithNewElement(newElement, newIndex, myArr), ...myArr];
// console.log(newArray1);

// second way
// let newArray2 = arrayWithNewElement(newElement, newIndex, myArr).concat(myArr);
// console.log(newArray2);

//7 Delete element from shown index
let deleteIndex = 2;
let arrayAfterSplice = function (arr, index) {
    arr.splice(index, 1);
};
arrayAfterSplice(myArr, deleteIndex);
console.log(myArr);

////////////////////////////////////////////////////////////////////////////////////

let array = [15, -2, 0, 14, -50];

let a = 2;
let b = 40;
let c = 5;

let fun_1_1 = function (a, b, x) {
    return a * Math.pow(x, 2) + b;
};
let fun_1_2 = function (a, x, c) {
    return (x - a) / (x - c);
};
let fun_1_3 = function (c, x) {
    return x / c;
};
let result1 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (x < 0 && b !== 0) return console.log(`1) ${fun_1_1(a, b, x)}`);
        else if (x > 0 && b === 0) return console.log(`2) ${fun_1_2(a, x, c)}`);
        else console.log(`3) ${fun_1_3(c, x)}`);
    });
};
// result1(a, b, c, array);

let fun_2_1 = function (a, b, c, x) {
    return a * Math.pow(x, 2) + b * x + c;
};
let fun_2_2 = function (a, x) {
    return -a / (x - c);
};
let fun_2_3 = function (c, x) {
    return a * (x + c);
};
let result2 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (a < 0 && c !== 0) return console.log(`1) ${fun_2_1(a, b, c, x)}`);
        else if (a > 0 && c === 0) return console.log(`2) ${fun_2_2(a, c, x)}`);
        else console.log(`3) ${fun_2_3(a, c, x)}`);
    });
};
// result2(a, b, c, array);

let fun_3_1 = function (a, b, x) {
    return a - x / (10 + b);
};
let fun_3_2 = function (a, c, x) {
    return (x - a) / (x - c);
};
let fun_3_3 = function (c, x) {
    return 3 * x + 2 / c;
};
let result3 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (x - a < 0 && c !== 0) return console.log(`1) ${fun_3_1(a, b, x)}`);
        else if (x - a > 0 && b === 0) return console.log(`2) ${fun_3_2(a, c, x)}`);
        else console.log(`3) ${fun_3_3(c, x)}`);
    });
};
// result3(a, b, c, array);

let fun_4_1 = function (a, b, x) {
    return -a * Math.pow(x, 2) - b;
};
let fun_4_2 = function (a, x) {
    return (x - a) / x;
};
let fun_4_3 = function (c, x) {
    return -x / c;
};
let result4 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (x < 5 && c !== 0) return console.log(`1) ${fun_4_1(a, b, c, x)}`);
        else if (x > 5 && c === 0) return console.log(`2) ${fun_4_2(a, x)}`);
        else console.log(`3) ${fun_4_3(c, x)}`);
    });
};
// result4(a, b, c, array);

let fun_5_1 = function (a, b, x) {
    return a * Math.pow(x, 2) + Math.pow(b, 2) * x;
};
let fun_5_2 = function (a, c, x) {
    return x - a / (x - c);
};
let fun_5_3 = function (c, x) {
    return 1 + x / c;
};
let result5 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (a < 0 && x !== 0) return console.log(`1) ${fun_5_1(a, b, x)}`);
        else if (a > 0 && x === 0) return console.log(`2) ${fun_5_2(a, c, x)}`);
        else console.log(`3) ${fun_5_3(c, x)}`);
    });
};
// result5(a, b, c, array);

let fun_6_1 = function (a, b, x) {
    return 1 / (a * x) - b;
};
let fun_6_2 = function (a, x) {
    return (x - a) / x;
};
let fun_6_3 = function (c, x) {
    return (10 * x) / (c - 4);
};
let result6 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (x + 5 < 0 && c === 0) return console.log(`1) ${fun_6_1(a, b, x)}`);
        else if (x + 5 > 0 && x !== 0) return console.log(`2) ${fun_6_2(a, x)}`);
        else console.log(`3) ${fun_6_3(c, x)}`);
    });
};
// result6(a, b, c, array);

let fun_7_1 = function (a, c, x) {
    return -a * x - c;
};
let fun_7_2 = function (a, c, x) {
    return (x - a) / (a - c);
};
let fun_7_3 = function (a, b, c, x) {
    return b * x * (c - a);
};
let result7 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (c < 0 && x !== 0) return console.log(`1) ${fun_7_1(a, c, x)}`);
        else if (c > 0 && x === 0) return console.log(`2) ${fun_7_2(a, c, x)}`);
        else console.log(`3) ${fun_7_3(a, b, c, x)}`);
    });
};
// result7(a, b, c, array);

let fun_8_1 = function (a, b, x) {
    return a * Math.pow(x, 2) + Math.pow(b, 2) * x;
};
let fun_8_2 = function (a, c, x) {
    return (x + a) / (x + c);
};
let fun_8_3 = function (a, b, c, x) {
    return ((a * x) / c) * Math.pow(b, 2);
};
let result8 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (c < 0 && b !== 0) return console.log(`1) ${fun_8_1(a, b, x)}`);
        else if (c > 0 && b === 0) return console.log(`2) ${fun_7_2(a, c, x)}`);
        else console.log(`3) ${fun_8_3(a, b, c, x)}`);
    });
};
// result8(a, b, c, array);

let fun_9_1 = function (a, x) {
    return -a * Math.pow(x, 2);
};
let fun_9_2 = function (a, c, x) {
    return ((a - x) / c) * x;
};
let fun_9_3 = function (a, c, x) {
    return -x / (c - a * x);
};
let result9 = function (a, c, arr) {
    arr.forEach((x) => {
        if (c < 0 && a !== 0) return console.log(`1) ${fun_9_1(a, x)}`);
        else if (c > 0 && a === 0) return console.log(`2) ${fun_9_2(a, c, x)}`);
        else console.log(`3) ${fun_9_3(a, c, x)}`);
    });
};
// result9(a, b, c, array);

let fun_10_1 = function (a, b, c, x) {
    return a * Math.pow(x, 2) - b * x + c;
};
let fun_10_2 = function (a, c, x) {
    return (x - a) / (x - c);
};
let fun_10_3 = function (c, x) {
    return x / c;
};
let result10 = function (a, b, c, arr) {
    arr.forEach((x) => {
        if (x < 3 && b !== 0) return console.log(`1) ${fun_10_1(a, b, c, x)}`);
        else if (x > 3 && b === 0) return console.log(`2) ${fun_10_2(a, c, x)}`);
        else console.log(`3) ${fun_10_3(c, x)}`);
    });
};
result10(a, b, c, array);

//1 Create an array with elements "Jazz", "Blues"
//2 Add "Rock-n-roll" to the end
//3 Replace element from middle of array on "Classic".
//4 Delete first element of array and show it
//5 Add "Rap" and "Reggae" to the begin of array

//1 Create an array with elements "Jazz", "Blues"
let music = ["Jazz", "Blues"];

//2 Add "Rock-n-roll" to the end
music.push("Rock-n-roll");
console.log(music);

//3 Remove element from middle of array and add "Classic"
let middleElem = Math.trunc(music.length / 2);
music.splice(middleElem, 1, "Classic");
console.log(music);

//4 Delete first element of array and show it
let deleteElem = music.splice(0, 1);
console.log(deleteElem);

//5 Add "Rap" and "Reggae" to the begin of array
music.unshift("Rap", "Reggae");
console.log(music);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Make Output: =
// {'50':[{name: 'BBB', enrollment:50 }, {name: 'CCC, enrollment: 50 }],
// {'100':[{name: 'AAA', enrollment: 100 }]}

let student = [
    { name: "AAA", enrollment: 100 },
    { name: "BBB", enrollment: 50 },
    { name: "AAA", enrollment: 50 },
    { name: "ССС", enrollment: 100 },
    { name: "BBB", enrollment: 100 },
    { name: "CCC", enrollment: 50 },
    { name: "CCC", enrollment: 150 },
];

function sortByEnrollment(arr) {
    arr.sort((a, b) => a.enrollment - b.enrollment);
}

function addNewEnr(arr) {
    let newArr = arr.slice(0, 0);
    let enr = arr[0].enrollment;
    newArr.push(enr);
    arr.reduce((acc, item) => {
        if (item.enrollment !== newArr[acc]) {
            acc += 1;
            newArr.push(item.enrollment);
            return acc;
        }
        return acc;
    }, 0);
    return newArr;
}

function createNewObject(arr) {
    sortByEnrollment(arr);
    let newArr = addNewEnr(arr);
    let arrr = {};
    newArr.forEach((element) => {
        let arrElem = [];
        arr.reduce((acc, item) => {
            if (item.enrollment === element) {
                arrElem[acc] = item;
                arrr[String(item.enrollment)] = arrElem;
                acc += 1;
                return acc;
            }
            return acc;
        }, 0);
    });
    newArr.forEach((item) => {
        arrr[item].sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            else return 1;
        });
    });
    return arrr;
}
let newObj = createNewObject(student);
console.log(newObj);

for (key in newObj) {
    console.log(typeof(key));
}