const engLet = `qwertyuiop[]asdfghjkl;'\\zxcvbnm,./`.split("");
const ruLet = `йцукенгшщзхъфывапролджэячсмитьбю.\\`.split("");
const engNum = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const ruNum = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const leftSideButtons = ["Tab", "Caps Lock", "Shift"];
const rightSideButtons = ["Enter", "Shift"];
const bottomLineButtons = ["Ctrl", "W", "Alt", "Space", "Alt", "W", "Clear", "Ctrl"];
const specialButtonsRightSide = ["Insert", "Home", "Page Up", "Delete", "End", "Page Down"];
const arrowsButtons = [
    '<i class="fas fa-arrow-up"></i>',
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-down"></i>',
    '<i class="fas fa-arrow-right"></i>',
];

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
    specialButtons: specialButtonsRightSide,
    arrows: arrowsButtons,
    engLang: true,
    capsLock: false,
    shift: false,
    alt: false,
};

createKeyword(keyword);

function createKeyword(obj) {
    const keyword = document.querySelector(".keyword");
    const keywordMain = createElem("div", "keyword-wrapper_main-buttons");
    const keywordTopLine = createElem("div", "keyword_top_line");
    const keywordMiddleLine = createElem("div", "keyword_middle_line");
    const keywordBotLine = createElem("div", "keyword_bot_line");

    const keywordSpecial = createElem("div", "keyword-wrapper_special-buttons");
    const keywordSpecialTopButtons = createElem("div", "special-buttons");
    const keywordSpecialArrowButtons = createElem("div", "arrow-buttons");
    createNumbersKeys(obj, keywordTopLine);
    createMainKeys(obj, keywordMiddleLine);
    createBottomKeys(obj, keywordBotLine);
    createSpecialKeys(obj, keywordSpecialTopButtons);
    createArrowKeys(obj, keywordSpecialArrowButtons);
    keywordMain.append(keywordTopLine);
    keywordMain.append(keywordMiddleLine);
    keywordMain.append(keywordBotLine);
    keywordSpecial.append(keywordSpecialTopButtons);
    keywordSpecial.append(keywordSpecialArrowButtons);
    keyword.append(keywordMain);
    keyword.append(keywordSpecial);
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
    path.append(fillInKeys(obj.rightSideButtons, elemRight, "enter", "right_shift"));
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
    obj.bottomButtons.forEach((item) => {
        const div = createElem("div", "bottom_line_buttons");
        div.innerHTML = item;
        if (div.innerHTML === "Space") {
            div.classList.add("space");
        }
        path.append(div);
    });
}

function createSpecialKeys(obj, path) {
    obj.specialButtons.forEach((item) => {
        const div = createElem("div", "buttons-cursor-control");
        div.innerHTML = item;
        path.append(div);
    });
}

function createArrowKeys(obj, path) {
    obj.arrows.forEach((item) => {
        const div = createElem("div", "buttons-cursor-control");
        div.innerHTML = item;
        if (div.innerHTML === '<i class="fas fa-arrow-up"></i>') {
            div.classList.add("arrow_up");
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

const bottomLineLetters = Array.from(document.querySelectorAll(".bottom_line_buttons"));
let rightAltIndex = findRightAlt();

function findRightAlt() {
    let altIndex;
    bottomLineLetters.forEach((item, index) => {
        if (item.innerHTML === "Alt") altIndex = index;
    });
    return altIndex;
}

const leftAlt = bottomLineLetters.find((elem) => elem.innerHTML === "Alt");
const rightAlt = bottomLineLetters[rightAltIndex];
leftAlt.addEventListener("click", altToggle);
rightAlt.addEventListener("click", altToggle);

function altToggle() {
    rightAlt.classList.toggle("active");
    leftAlt.classList.toggle("active");
    keyword.alt ? (keyword.alt = false) : (keyword.alt = true);
    if (keyword.alt === true && keyword.shift === true) changeLang();
}

const leftShift = arraySpecialButtons.find((elem) => elem.innerHTML === "Shift");
const rightShift = document.querySelector(".right_shift");
leftShift.addEventListener("click", shiftToggle);
rightShift.addEventListener("click", shiftToggle);

function shiftToggle() {
    textAreaOnFocus();
    changeLettersOnKeyboad();
    if (keyword.alt === true && keyword.shift === true) {
        changeLang();
    }
}

function changeLettersOnKeyboad() {
    leftShift.classList.toggle("active");
    rightShift.classList.toggle("active");
    keyword.shift ? (keyword.shift = false) : (keyword.shift = true);
    keyword.shift ? changeLettersOnShiftClick() : reverseLettersOnShiftClick();
    changeLetterCase();
}

function changeLang() {
    leftShift.classList.toggle("active");
    rightShift.classList.toggle("active");
    leftAlt.classList.toggle("active");
    rightAlt.classList.toggle("active");
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
    const lettArr = document.querySelectorAll(".keywords_div");
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
    const arrNum = document.querySelectorAll(".numbers_div");
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
    const arrLet = document.querySelectorAll(".keywords_div");
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
    const arrLet = document.querySelectorAll(".keywords_div");
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
    const arrNum = document.querySelectorAll(".numbers_div");
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
    textAreaOffFocus(e);
    if (e.target.classList.contains("keywords_div")) insertLettIntoTextArea(e);
    if (e.target.classList.contains("numbers_div")) insertLettIntoTextArea(e);
}
const textarea = document.querySelector(".input_textarea");

let selectTextArea = 0;
function insertLettIntoTextArea(e) {
    const textareaStart = textarea.selectionStart;
    const textareaEnd = textarea.selectionEnd;
    const valueLength = textarea.value.length;
    if (textareaStart === textareaEnd && textareaStart === valueLength) {
        let value = e.target.innerHTML;
        value = checkValue(value);
        textarea.value += value;
        textAreaOnFocus();
        if (keyword.shift === true) {
            changeLettersOnKeyboad();
        }
    } else if (textareaStart === textareaEnd) {
        let value = e.target.innerHTML;
        const valueStart = textarea.value.slice(0, textarea.selectionStart);
        const valueEnd = textarea.value.slice(textarea.selectionEnd, textarea.value.length);
        value = checkValue(value);
        textarea.value = valueStart + value + valueEnd;
        textAreaOnFocus();
        textarea.setSelectionRange(textareaStart + 1, textareaEnd + 1);
        if (keyword.shift === true) {
            changeLettersOnKeyboad();
        }
    } else {
        let value = e.target.innerHTML;
        value = checkValue(value);
        textarea.setRangeText(value);
        textAreaOnFocus();
        textarea.setSelectionRange(textareaStart + 1, textareaEnd + 1);
    }
}

function checkValue(val) {
    if (val === "&amp;") val = "&";
    if (val === "&lt;") val = "<";
    if (val === "&gt;") val = ">";
    return val;
}

let space = document.querySelector(".space");
space.addEventListener("click", addSpaceIntoTextarea);

function addSpaceIntoTextarea() {
    textarea.value += " ";
    textAreaOnFocus();
}

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", deleteElementsInTextarea);

textarea.addEventListener("select", deleteRange);
let coordsSelectValue = [];
function deleteRange() {
    coordsSelectValue[0] = textarea.selectionStart;
    coordsSelectValue[1] = textarea.selectionEnd;
}

function deleteElementsInTextarea() {
    if (textarea.selectionStart === 0 && textarea.selectionEnd === 0) return;
    if (textarea.selectionStart === textarea.selectionEnd) {
        const textareaCursor = textarea.selectionStart;
        const valueStart = textarea.value.slice(0, textarea.selectionStart - 1);
        const valueEnd = textarea.value.slice(textarea.selectionStart, textarea.value.length);
        textarea.value = valueStart + valueEnd;
        coordsSelectValue.length = 0;
        textAreaOnFocus();
        textarea.setSelectionRange(textareaCursor - 1, textareaCursor - 1);
    } else {
        textarea.value = textarea.value.slice(0, coordsSelectValue[0]) + textarea.value.slice(coordsSelectValue[1]);
        coordsSelectValue.length = 0;
        textAreaOnFocus();
        textarea.setSelectionRange(textarea.selectionStart - 1, textarea.selectionStart - 1);
    }
}

const arrayBottomLetters = Array.from(document.querySelectorAll(".bottom_line_buttons"));
const clear = arrayBottomLetters.find((elem) => elem.innerHTML === "Clear");
clear.addEventListener("click", clearTextArea);

function clearTextArea() {
    textarea.value = "";
    textAreaOnFocus();
}

function textAreaOnFocus() {
    if (!textarea.classList.contains("focused")) {
        textarea.classList.add("focused");
        textarea.focus();
    }
    textarea.focus();
}

function textAreaOffFocus(e) {
    const target = e.target.classList;
    if (
        e.target.nodeName === "HTML" ||
        target.contains("container") ||
        target.contains("body") ||
        target.contains("keyword") ||
        target.contains("middle_right") ||
        target.contains("keyword_bot_line") ||
        target.contains("arrow-buttons") ||
        target.contains("keyword-wrapper_special-buttons") ||
        target.contains("keyword_top_line")
    ) {
        textarea.blur();
        textarea.classList.remove("focused");
    }
}

const buttonsCursorControl = document.querySelectorAll(".buttons-cursor-control");
buttonsCursorControl.forEach(item => {
    if (item.innerHTML === "Home") {
        item.addEventListener("click", goHomeButton)
    }
    if (item.innerHTML === "End") {
        item.addEventListener("click", goEndButton)
    }
})

function goHomeButton() {
    textAreaOnFocus()
    textarea.setSelectionRange(0, 0);
}

function goEndButton() {
    textAreaOnFocus()
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
}

const arrowsArr = document.querySelectorAll(".buttons-cursor-control");
arrowsArr[7].addEventListener("click", changePositionTextareaLeft)
arrowsArr[9].addEventListener("click", changePositionTextareaRight)

function changePositionTextareaLeft() {
    textAreaOnFocus()
    const textareaStart = textarea.selectionStart;
    if (textareaStart === 0) {
        textarea.setSelectionRange(0, 0);
    } else {
        textarea.setSelectionRange(textareaStart - 1,textareaStart - 1);
    }
}

function changePositionTextareaRight() {
    textAreaOnFocus()
    textarea.setSelectionRange(textarea.selectionEnd + 1, textarea.selectionEnd + 1);
}