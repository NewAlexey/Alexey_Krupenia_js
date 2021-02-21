selector = false;

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
    let valueInfo = info.innerHTML;
    if (valueInfo.search(/=/) > 0) clearScreen();
    // if (valueInfo[valueInfo.length - 1] !== ' =') clearScreen();
}

function insertInJournal() {
    let result = info.innerHTML;
    let journal = document.getElementById('journal');
    let journalInfo = document.getElementById('journal').innerHTML;
    if (journal.innerHTML === '') journal.innerHTML = `${result} ${screen.innerHTML}`
    else journal.innerHTML = `${journalInfo}\n${result} ${screen.innerHTML}`;
}


let buttonClearJournal = document.getElementById("trash");
buttonClearJournal.addEventListener("click", clearJournal);
function clearJournal() {
    let journal = document.getElementById('journal');
    journal.innerHTML = '';
}

//Buttons for operators
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let buttonDel = document.getElementById("buttonDel");
buttonDel.addEventListener("click", clickButtonDel);
function clickButtonDel() {
    let num = screen.innerHTML;
    if (info.innerHTML.indexOf("=") < 0) {
        if (num.length === 1) return (screen.innerHTML = "0");
        num = num.slice(0, num.length - 1);
        screen.innerHTML = num;
    }
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

function calculateValues() {
    let resultScreen = screen.innerHTML;
    let resultInfo = info.innerHTML;
    let arrValue = (resultInfo + " " + resultScreen).split(" ");
    let calcValue = +arrValue[0];
    for (let i = 1; i < arrValue.length; i += 2) {
        if (arrValue[i] === "+") calcValue += +arrValue[i + 1];
        else if (arrValue[i] === "-") calcValue -= +arrValue[i + 1];
        else if (arrValue[i] === "*") calcValue *= +arrValue[i + 1];
        else calcValue /= +arrValue[i + 1];
    }
    selector = true;
    return [calcValue, arrValue];
}

let buttonCalculate = document.getElementById("buttonCalculate");
buttonCalculate.addEventListener("click", clickButtonCalculate);
function clickButtonCalculate() {
    let arrCalcValue = calculateValues();
    selector = false;
    if (info.innerHTML.indexOf("=") < 0) {
        info.innerHTML = arrCalcValue[1].join(" ") + " =";
        screen.innerHTML = arrCalcValue[0];
    }
    insertInJournal();
}

let buttonPlus = document.getElementById("buttonPlus");
buttonPlus.addEventListener("click", clickButtonPlus);
function clickButtonPlus() {
    let valueScreen = screen.innerHTML;
    let valueInfo = info.innerHTML;
    if (valueInfo === "") {
        screen.innerHTML = "0";
        info.innerHTML = valueScreen + " +";
    } else if (valueInfo.search(/=/) > 0) {
        info.innerHTML = valueScreen + " +";
        screen.innerHTML = "0";
    } else if (valueScreen !== "0") {
        let arrCalcValue = calculateValues();
        info.innerHTML = arrCalcValue[1].join(" ") + " +";
        screen.innerHTML = arrCalcValue[0];
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
    } else if (valueInfo.search(/=/) > 0) {
        info.innerHTML = valueScreen + " -";
        screen.innerHTML = "0";
    } else if (valueScreen !== "0") {
        let arrCalcValue = calculateValues();
        info.innerHTML = arrCalcValue[1].join(" ") + " -";
        screen.innerHTML = arrCalcValue[0];
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
    } else if (valueInfo.search(/=/) > 0) {
        info.innerHTML = valueScreen + " *";
        screen.innerHTML = "0";
    } else if (valueScreen !== "0") {
        let arrCalcValue = calculateValues();
        info.innerHTML = arrCalcValue[1].join(" ") + " *";
        screen.innerHTML = arrCalcValue[0];
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
    } else if (valueInfo.search(/=/) > 0) {
        info.innerHTML = valueScreen + " /";
        screen.innerHTML = "0";
    } else if (valueScreen !== "0") {
        let arrCalcValue = calculateValues();
        info.innerHTML = arrCalcValue[1].join(" ") + " /";
        screen.innerHTML = arrCalcValue[0];
    } else {
        info.innerHTML = valueInfo.slice(0, valueInfo.length - 1) + "/";
    }
}

//Buttons for Number
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let buttonOne = document.getElementById("buttonOne");
buttonOne.addEventListener("click", clickButtonOne);
function clickButtonOne() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "1";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "1";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "1";
    } else screen.innerHTML = num + "1";
}

let buttonTwo = document.getElementById("buttonTwo");
buttonTwo.addEventListener("click", clickButtonTwo);
function clickButtonTwo() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "2";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "2";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "2";
    } else screen.innerHTML = num + "2";
}

let buttonThree = document.getElementById("buttonThree");
buttonThree.addEventListener("click", clickButtonThree);
function clickButtonThree() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "3";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "3";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "3";
    } else screen.innerHTML = num + "3";
}

let buttonFour = document.getElementById("buttonFour");
buttonFour.addEventListener("click", clickButtonFour);
function clickButtonFour() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "4";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "4";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "4";
    } else screen.innerHTML = num + "4";
}

let buttonFive = document.getElementById("buttonFive");
buttonFive.addEventListener("click", clickButtonFive);
function clickButtonFive() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "5";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "5";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "5";
    } else screen.innerHTML = num + "5";
}

let buttonSix = document.getElementById("buttonSix");
buttonSix.addEventListener("click", clickButtonSix);
function clickButtonSix() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "6";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "6";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "6";
    } else screen.innerHTML = num + "6";
}

let buttonSeven = document.getElementById("buttonSeven");
buttonSeven.addEventListener("click", clickButtonSeven);
function clickButtonSeven() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "7";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "7";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "7";
    } else screen.innerHTML = num + "7";
}

let buttonEight = document.getElementById("buttonEight");
buttonEight.addEventListener("click", clickButtonEight);
function clickButtonEight() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "8";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "8";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "8";
    } else screen.innerHTML = num + "8";
}

let buttonNine = document.getElementById("buttonNine");
buttonNine.addEventListener("click", clickButtonNine);
function clickButtonNine() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "9";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "9";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "9";
    } else screen.innerHTML = num + "9";
}

let buttonZero = document.getElementById("buttonZero");
buttonZero.addEventListener("click", clickButtonZero);
function clickButtonZero() {
    isEqualInInfo();
    checkZero();
    let num = screen.innerHTML;
    if (screen.innerHTML === "") {
        screen.innerHTML = num + "0";
    } else if (info.innerHTML.length > 0 && selector === true) {
        selector = false;
        screen.innerHTML = "0";
    } else if (info.innerHTML.length > 0) {
        screen.innerHTML = num + "0";
    } else screen.innerHTML = num + "0";
}
