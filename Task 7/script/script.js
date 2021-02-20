let screen = document.getElementById("screen");
screen.innerHTML = "0";

let clearButton = document.getElementById("buttonClear");
clearButton.addEventListener("click", clearScreen);

let info = document.getElementById("info");

function clearScreen() {
    screen.innerHTML = "0";
    info.innerHTML = "";
}

function checkZero() {
    let check = screen.innerHTML;
    if (check === "0") screen.innerHTML = "";
}

function isEqualInInfo() {
    let infoValue = info.innerHTML;
    if (infoValue.search(/=/) > 0) clearScreen();
}

//Buttons for operators
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let buttonDel = document.getElementById("buttonDel");
buttonDel.addEventListener("click", clickButtonDel);
function clickButtonDel() {
    let screenNumber = document.getElementById("screen");
    let num = screenNumber.innerHTML;
    if (num.length === 1) return (screenNumber.innerHTML = "0");
    num = num.slice(0, num.length - 1);
    return (screenNumber.innerHTML = num);
}

let buttonDot = document.getElementById("buttonDot");
buttonDot.addEventListener("click", clickButtonDot);
function clickButtonDot() {
    let num = screen.innerHTML;
    screen.innerHTML = num + ".";
}

let buttonRevers = document.getElementById("buttonRevers");
buttonRevers.addEventListener("click", clickButtonRevers);
function clickButtonRevers() {
    let num = screen.innerHTML;
    num === "0" ? true : (screen.innerHTML = num * -1);
}

let buttonCalculate = document.getElementById("buttonCalculate");
buttonCalculate.addEventListener("click", clickButtonCalculate);
function clickButtonCalculate() {
    let resultScreen = screen.innerHTML;
    let resultInfo = info.innerHTML;
    let arrValue = (resultInfo + " " + resultScreen).split(" ");
    let operator = arrValue[1];
    let calcValue = 0;
    if (operator === "+") calcValue = +arrValue[0] + +arrValue[2];
    else if (operator === "-") calcValue = +arrValue[0] - +arrValue[2];
    else if (operator === "*") calcValue = +arrValue[0] * +arrValue[2];
    else calcValue = +arrValue[0] / +arrValue[2];
    info.innerHTML = arrValue.join(" ") + " =";
    screen.innerHTML = calcValue;
}

let buttonPlus = document.getElementById("buttonPlus");
buttonPlus.addEventListener("click", clickButtonPlus);
function clickButtonPlus() {
    let valueScreen = screen.innerHTML;
    let valueInfo = info.innerHTML;
    if (valueInfo === "") {
        screen.innerHTML = "0";
        info.innerHTML = valueScreen + " +";
    } else {
        info.innerHTML = valueInfo.slice(0, valueInfo.length - 1) + "+";
    }
}

let buttonMinus = document.getElementById("buttonMinus");
buttonMinus.addEventListener("click", clickButtonMinus);
function clickButtonMinus() {
    let valueScreen = screen.innerHTML;
    let valueInfo = info.innerHTML;
    if (valueInfo === "") {
        screen.innerHTML = "0";
        info.innerHTML = valueScreen + " -";
    } else {
        info.innerHTML = valueInfo.slice(0, valueInfo.length - 1) + "-";
    }
}

let buttonMult = document.getElementById("buttonMult");
buttonMult.addEventListener("click", clickButtonMult);
function clickButtonMult() {
    let valueScreen = screen.innerHTML;
    let valueInfo = info.innerHTML;
    if (valueInfo === "") {
        screen.innerHTML = "0";
        info.innerHTML = valueScreen + " *";
    } else {
        info.innerHTML = valueInfo.slice(0, valueInfo.length - 1) + "*";
    }
}

let buttonDivide = document.getElementById("buttonDivide");
buttonDivide.addEventListener("click", clickButtonDivide);
function clickButtonDivide() {
    let valueScreen = screen.innerHTML;
    let valueInfo = info.innerHTML;
    if (valueInfo === "") {
        screen.innerHTML = "0";
        info.innerHTML = valueScreen + " /";
    } else {
        info.innerHTML = valueInfo.slice(0, valueInfo.length - 1) + "/";
    }
}

//Buttons for Number
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let buttonOne = document.getElementById("buttonOne");
buttonOne.addEventListener("click", clickButtonOne);
function clickButtonOne() {
        isEqualInInfo()
        checkZero();
        let num = screen.innerHTML;
        screen.innerHTML = num + "1";
}

let buttonTwo = document.getElementById("buttonTwo");
buttonTwo.addEventListener("click", clickButtonTwo);
function clickButtonTwo() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "2";
}

let buttonThree = document.getElementById("buttonThree");
buttonThree.addEventListener("click", clickButtonThree);
function clickButtonThree() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "3";
}

let buttonFour = document.getElementById("buttonFour");
buttonFour.addEventListener("click", clickButtonFour);
function clickButtonFour() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "4";
}

let buttonFive = document.getElementById("buttonFive");
buttonFive.addEventListener("click", clickButtonFive);
function clickButtonFive() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "5";
}

let buttonSix = document.getElementById("buttonSix");
buttonSix.addEventListener("click", clickButtonSix);
function clickButtonSix() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "6";
}

let buttonSeven = document.getElementById("buttonSeven");
buttonSeven.addEventListener("click", clickButtonSeven);
function clickButtonSeven() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "7";
}

let buttonEight = document.getElementById("buttonEight");
buttonEight.addEventListener("click", clickButtonEight);
function clickButtonEight() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "8";
}

let buttonNine = document.getElementById("buttonNine");
buttonNine.addEventListener("click", clickButtonNine);
function clickButtonNine() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "9";
}

let buttonZero = document.getElementById("buttonZero");
buttonZero.addEventListener("click", clickButtonZero);
function clickButtonZero() {
    isEqualInInfo()
    checkZero();
    let num = screen.innerHTML;
    screen.innerHTML = num + "0";
}
