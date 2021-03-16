const engLet = `qwertyuiop[]asdfghjkl;'\\zxcvbnm,./`.split("");
const ruLet = `йцукенгшщзхъфывапролджэячсмитьбю.\\`.split("");
const engNum = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const ruNum = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const leftSideButtons = ["Tab", "Caps Lock", "Shift"];
const rightSideButtons = ["Enter", "Shift"];
const bottomLineButtons = ["Ctrl", "W", "Alt", "Space", "Alt", "W", "Clear", "Ctrl"];

const ruNumShift = ["Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"];
const engNumShift = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"];

const engLetShift = `qwertyuiop{}asdfghjkl:"|zxcvbnm<>?`.split("");
const ruLetShift = `йцукенгшщзхъфывапролджэячсмитьбю,/`.split("");

let keyword = {
    eng: engLet,
    ru: ruLet,
    engNumber: engNum,
    ruNumber: ruNum,
    leftSideButtons: leftSideButtons,
    rightSideButtons: rightSideButtons,
    bottomButtons: bottomLineButtons,
    engLang: true,
    capsLock: false,
    shift: false,
    alt: false,
};

createKeyword(keyword);

function createKeyword(obj) {
    let keyword = document.querySelector(".keyword");
    let keywordTopLine = createElem("div", "keyword_top_line");
    let keywordMiddleLine = createElem("div", "keyword_middle_line");
    let keywordBotLine = createElem("div", "keyword_bot_line");
    createNumbersKeys(obj, keywordTopLine);
    createMainKeys(obj, keywordMiddleLine);
    createBottomKeys(obj, keywordBotLine);
    keyword.append(keywordTopLine);
    keyword.append(keywordMiddleLine);
    keyword.append(keywordBotLine);
}

function createElem(elem, cls) {
    let element = document.createElement(elem);
    element.classList.add(cls);
    return element;
}

function createNumbersKeys(obj, path) {
    let elem = createElem("div", "numbers_container");
    obj.engNumber.forEach((item, index) => {
        let div = createElem("div", "numbers_div");
        div.innerHTML = item;
        if (index === obj.engNumber.length - 1) {
            div.classList.remove("numbers_div");
            div.classList.add("backspace");
        }
        elem.append(div);
    });
    path.append(elem);
}

function createMainKeys(obj, path) {
    let elemLeft = createElem("div", "middle_left");
    let elemMiddle = createElem("div", "middle_mid");
    let elemRight = createElem("div", "middle_right");
    path.append(fillInKeys(obj.leftSideButtons, elemLeft, "special_buttons"));
    path.append(fillInKeys(obj.eng, elemMiddle, "keywords_div"));
    path.append(fillInKeys(obj.rightSideButtons, elemRight, "middle_enter", "middle_shift"));
}

function fillInKeys(objKey, path, cls, ...args) {
    if (args.length !== 1) {
        objKey.forEach((item) => {
            let div = createElem("div", cls);
            div.innerHTML = item;
            path.append(div);
        });
        return path;
    } else {
        let div1 = createElem("div", cls);
        let div2 = createElem("div", args[0]);
        div1.innerHTML = objKey[0];
        div2.innerHTML = objKey[1];
        path.append(div1);
        path.append(div2);
        return path;
    }
}

function createBottomKeys(obj, path) {
    obj.bottomButtons.forEach((item, index) => {
        let div = createElem("div", "bottom_line_buttons");
        div.innerHTML = item;
        if (div.innerHTML === "Space") {
            div.classList.add("space");
        }
        path.append(div);
    });
}

const arraySpecialButtons = Array.from(document.querySelectorAll(".special_buttons"));
const capsLock = arraySpecialButtons.find((elem) => elem.innerHTML === "Caps Lock");
capsLock.addEventListener("click", changeCaseCapsLock);

function changeCaseCapsLock() {
    capsLock.classList.toggle("active");
    changeLetterCase();
}

function changeLetterCase() {
    !keyword.capsLock ? (keyword.capsLock = true) : (keyword.capsLock = false);
    keyword.capsLock ? changeCaseUp() : changeCaseDown();
}

function changeCaseUp() {
    let lettArr = document.querySelectorAll(".keywords_div");
    lettArr.forEach((item) => {
        item.innerHTML = item.innerHTML.toUpperCase();
    });
    keyword.capsLock = true;
}
function changeCaseDown() {
    let lettArr = document.querySelectorAll(".keywords_div");
    lettArr.forEach((item) => {
        item.innerHTML = item.innerHTML.toLowerCase();
    });
    keyword.capsLock = false;
}

const altLeft = document.querySelectorAll(".bottom_line_buttons")[2];
altLeft.addEventListener("click", altLeftToggle);

function altLeftToggle() {
    altLeft.classList.toggle("active");
    keyword.alt ? (keyword.alt = false) : (keyword.alt = true);
    if (keyword.alt === true && keyword.shift === true) changeLang();
}

const shift = arraySpecialButtons.find((elem) => elem.innerHTML === "Shift");
shift.addEventListener("click", shiftToggle);

function shiftToggle() {
    shift.classList.toggle("active");
    keyword.shift ? (keyword.shift = false) : (keyword.shift = true);
    keyword.shift ? changeLettersOnShiftClick() : reverseLettersOnShiftClick();
    changeLetterCase();
    if (keyword.alt === true && keyword.shift === true) {
        changeLang();
    }
}

function changeLang() {
    shift.classList.toggle("active");
    altLeft.classList.toggle("active");
    keyword.alt = false;
    keyword.shift = false;
    keyword.engLang ? changeLangRu(keyword) : changeLangEng(keyword);
}

function changeLangRu(obj) {
    keyword.engLang = false;
    let lettArr = document.querySelectorAll(".keywords_div");
    let i = 0;
    obj.ru.forEach((item) => {
        lettArr[i].innerHTML = item;
        i++;
    });
    changeLetterCase();
    reverseLettersOnShiftClick();
}

function changeLangEng(obj) {
    keyword.engLang = true;
    let lettArr = document.querySelectorAll(".keywords_div");
    let i = 0;
    obj.eng.forEach((item) => {
        lettArr[i].innerHTML = item;
        i++;
    });
    changeLetterCase();
    reverseLettersOnShiftClick();
}

function changeLettersOnShiftClick() {
    changeShiftNumbers();
    changeShiftLetters();
}

function changeShiftNumbers() {
    let arrNum = document.querySelectorAll(".numbers_div");
    let i = 0;
    if (keyword.engLang) {
        arrNum.forEach((item) => {
            item.innerHTML = engNumShift[i];
            i++;
        });
    } else {
        arrNum.forEach((item) => {
            item.innerHTML = ruNumShift[i];
            i++;
        });
    }
}

function changeShiftLetters() {
    let arrLet = document.querySelectorAll(".keywords_div");
    let i = 0;
    if (keyword.engLang) {
        arrLet.forEach((item) => {
            item.innerHTML = engLetShift[i];
            i++;
        });
    } else {
        arrLet.forEach((item) => {
            item.innerHTML = ruLetShift[i];
            i++;
        });
    }
}

function reverseLettersOnShiftClick() {
    reverseShiftLetters();
    reverseShiftNumbers();
}

function reverseShiftLetters() {
    let arrLet = document.querySelectorAll(".keywords_div");
    let i = 0;
    if (keyword.engLang) {
        arrLet.forEach((item) => {
            item.innerHTML = engLet[i];
            i++;
        });
    } else {
        arrLet.forEach((item) => {
            item.innerHTML = ruLet[i];
            i++;
        });
    }
}

function reverseShiftNumbers() {
    let arrNum = document.querySelectorAll(".numbers_div");
    let i = 0;
    if (keyword.engLang) {
        arrNum.forEach((item) => {
            item.innerHTML = engNum[i];
            i++;
        });
    } else {
        arrNum.forEach((item) => {
            item.innerHTML = ruNum[i];
            i++;
        });
    }
}

document.addEventListener("click", handleClick);
function handleClick(e) {
    if (e.target.classList.contains("keywords_div")) insertLettIntoTextArea(e);
    if (e.target.classList.contains("numbers_div")) insertLettIntoTextArea(e);
}
const textarea = document.querySelector(".input_textarea");
function insertLettIntoTextArea(e) {
    let value = e.target.innerHTML;
    textarea.value += value;
}

let space = document.querySelector(".space");
space.addEventListener("click", addSpaceIntoTextarea);

function addSpaceIntoTextarea() {
    textarea.value += " ";
}

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", deleteElementsInTextarea);

function deleteElementsInTextarea() {
    if (coordsSelectValue.length === 0) {
        let value = textarea.value;
        textarea.value = "";
        textarea.value = value.slice(0, value.length - 1);
    } else {
        textarea.value = textarea.value.slice(0, coordsSelectValue[0]) +  textarea.value.slice(coordsSelectValue[1]);
        coordsSelectValue.length = 0;
    }
}

const arrayBottomLetters = Array.from(document.querySelectorAll(".bottom_line_buttons"));
const clear = arrayBottomLetters.find((elem) => elem.innerHTML === "Clear");
clear.addEventListener("click", clearTextArea);

function clearTextArea() {
    textarea.value = "";
}

textarea.addEventListener("select", consol);

let coordsSelectValue = [];

function consol() {
    coordsSelectValue[0] = textarea.selectionStart;
    coordsSelectValue[1] = textarea.selectionEnd;
}
