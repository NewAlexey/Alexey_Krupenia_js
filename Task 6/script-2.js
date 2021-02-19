//Task 1
let buttonCounter = document.getElementById("buttonCounter");

let count = function () {
    let divCounter = document.getElementById("divCounter");
    let count = +divCounter.innerHTML;
    count += 1;
    divCounter.innerHTML = count;
};
buttonCounter.addEventListener("click", count);

//Task 2
let buttonPlus = document.getElementById("buttonPlus");
let divPlusMinus = document.getElementById("divPlusMinus");
let buttonMinus = document.getElementById("buttonMinus");

let countPlus = function () {
    let count = +divPlusMinus.innerHTML;
    count += 1;
    divPlusMinus.innerHTML = count;
};

let countMinus = function () {
    let count = +divPlusMinus.innerHTML;
    count -= 1;
    divPlusMinus.innerHTML = count;
};
buttonPlus.addEventListener("click", countPlus);
buttonMinus.addEventListener("click", countMinus);

//Task 3
let buttonToDo = document.getElementById("buttonToDo");

let addListItem = function () {
    let inputToDo = document.getElementById("inputToDo");
    valueInput = inputToDo.value;
    inputToDo.value = "";
    let divToDo = document.getElementById("divToDo");
    if (valueInput !== "") {
        if (!document.querySelector("ul")) {
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            li.innerHTML = valueInput;
            divToDo.appendChild(ul);
            ul.append(li);
        } else {
            let ul = document.querySelector("ul");
            let li = document.createElement("li");
            li.innerHTML = valueInput;
            ul.appendChild(li);
        }
    }
};
buttonToDo.addEventListener("click", addListItem);

//Task 4
let buttonCalc = document.getElementById("buttonCalc");
let divCalc = document.getElementById("divCalc");
let inputFirstNumber = document.getElementById("inputFirstNumber");
let inputSecondNumber = document.getElementById("inputSecondNumber");
let inputOperator = document.getElementById("inputOperator");

let calcObject = {
    "+": findSum,
    "-": findDiff,
    "*": findMult,
    "/": findQuotient,
};

function findSum(a, b) {
    return a + b;
}

function findDiff(a, b) {
    return a - b;
}

function findMult(a, b) {
    return a * b;
}

function findQuotient(a, b) {
    return (a / b).toFixed(4);
}

function checkOperator(operator) {
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        return false;
    }
    else return true;
}
function checkNumber(num) {
    if (num === '') {
        return false;
    } else return true;
}

function check() {
    let firstNumber = inputFirstNumber.value;
    let secondNumber = inputSecondNumber.value;
    let operator = inputOperator.value;    
    if ((operator === '/') && (+firstNumber === 0) && (+secondNumber === 0)) {
        divCalc.classList.remove('green_circle');
        divCalc.classList.add('red_circle');
        divCalc.innerHTML = '';
    } else if (checkNumber(firstNumber) && checkNumber(secondNumber) && checkOperator(operator)) {
        divCalc.classList.remove('red_circle');
        divCalc.classList.add('green_circle')
        calcNumbers();
    } else {
        divCalc.classList.remove('green_circle');
        divCalc.classList.add('red_circle');
        divCalc.innerHTML = '';
    }
}
function calcNumbers() {
    let firstNumber = +inputFirstNumber.value;
    let secondNumber = +inputSecondNumber.value;
    let operator = inputOperator.value;
    let res;
    res = calcObject[operator](firstNumber, secondNumber);
    divCalc.innerHTML = res;
}

buttonCalc.addEventListener("click", check);
