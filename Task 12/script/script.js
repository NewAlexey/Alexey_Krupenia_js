const engLet = `qwertyuiop[]asdfghjkl;'\\zxcvbnm,./`.split("");
const ruLet = `йцукенгшщзхъфывапролджэячсмитьбю.\\`.split("");
const engNum = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const ruNum = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const leftSideButtons = ["Tab", "CapsLock", "Shift"];
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
  inputType: false,
};

// function createButtonsSpecial(object, path) {
//   for (const [key, value] of Object.entries(object)) {
//     keyword[key].forEach((el) => {
//       const div = createDivWithClass(value);
//       div.innerHTML = el;
//       if (el === "Space") div.id = "space";
//       if (el === "Insert") div.id = "insert";
//       path.append(div)
//     });
//   }
// }

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
      if (item === "Shift") {
        div.id = `shift_1`;
      }
      path.append(div);
    });
    return path;
  } else {
    let div1 = createElem("div", cls);
    let div2 = createElem("div", args[0]);
    if (cls === "enter") {
      div1.id = "enter";
    }
    div2.id = "shift_2";
    div1.innerHTML = objKey[0];
    div2.innerHTML = objKey[1];
    path.append(div1);
    path.append(div2);
    return path;
  }
}

function createBottomKeys(obj, path) {
  obj.bottomButtons.forEach((item, i) => {
    const div = createElem("div", "bottom_line_buttons");
    div.innerHTML = item;
    if (item === "Space") {
      div.id = "space";
    }
    if (item === "Alt") {
      div.id = `alt_${i}`;
    }
    path.append(div);
  });
}

function createSpecialKeys(obj, path) {
  obj.specialButtons.forEach((item) => {
    const div = createElem("div", "buttons_cursor_control");
    div.innerHTML = item;
    if (item === "Insert") {
      div.id = "insert";
    }
    path.append(div);
  });
}

function createArrowKeys(obj, path) {
  obj.arrows.forEach((item) => {
    const div = createElem("div", "buttons_cursor_control");
    div.innerHTML = item;
    if (div.innerHTML === '<i class="fas fa-arrow-up"></i>') {
      div.classList.add("arrow_up");
      div.id = "arrowUp";
    }
    if (div.innerHTML === '<i class="fas fa-arrow-down"></i>') {
      div.id = "arrowDown";
    }
    if (div.innerHTML === '<i class="fas fa-arrow-left"></i>') {
      div.id = "arrowLeft";
    }
    if (div.innerHTML === '<i class="fas fa-arrow-right"></i>') {
      div.id = "arrowRight";
    }
    path.append(div);
  });
}

const valuesOfButtons = ["Clear", "Backspace", "Alt", "Shift", "CapsLock", "Home", "End", "Space", "Delete"];
const namesOfFunction = [
  "pushButtonBackspace",
  "altToggle",
  "goHomeButton",
  "goEndButton",
  "shiftToggle",
  "addSpaceIntoTextarea",
  "clearTextArea",
  "changeCaseCapsLock",
  "pushButtonDelete",
];

function addListenerForKeys(obj) {
  const arrWithButtons = document.querySelectorAll("div");
  arrWithButtons.forEach((div) => {
    valuesOfButtons.forEach((valueOfBtn) => {
      if (div.innerHTML === valueOfBtn) {
        div.addEventListener("click", obj[div.innerHTML]);
      }
    });
  });
}

const specialFunctions = {
  Clear: clearTextArea,
  Backspace: pushButtonBackspace,
  Alt: altToggle,
  Shift: shiftToggle,
  CapsLock: changeCaseCapsLock,
  Home: goHomeButton,
  End: goEndButton,
  Space: addSpaceIntoTextarea,
  Delete: pushButtonDelete,
};

addListenerForKeys(specialFunctions);

function clearTextArea() {
  textarea.value = "";
  textAreaOnFocus();
}

function goHomeButton() {
  textAreaOnFocus();
  textarea.setSelectionRange(0, 0);
}

function goEndButton() {
  textAreaOnFocus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
}

function changeCaseCapsLock() {
  this.classList.toggle("active");
  changeLetterCase();
}

function changeLetterCase() {
  !keyword.capsLock ? (keyword.capsLock = true) : (keyword.capsLock = false);
  keyword.capsLock ? changeCase("toUpperCase") : changeCase("toLowerCase");
}

function changeCase(param) {
  const lettArr = document.querySelectorAll(".keywords_div");
  lettArr.forEach((item) => {
    item.innerHTML = item.innerHTML[param]();
  });
  keyword.capsLock ? (keyword.capsLock = true) : (keyword.capsLock = false);
}

function altToggle() {
  alt_2.classList.toggle("active");
  alt_4.classList.toggle("active");
  keyword.alt ? (keyword.alt = false) : (keyword.alt = true);
  if (checkAltAndShift()) changeKeyboard();
}

function shiftToggle() {
  shift_1.classList.toggle("active");
  shift_2.classList.toggle("active");
  keyword.shift ? (keyword.shift = false) : (keyword.shift = true);
  changeKeysOnKeyboard();
  changeLetterCase();
  if (checkAltAndShift()) changeKeyboard();
  textAreaOnFocus();
}

function checkAltAndShift() {
  if (keyword.alt && keyword.shift) return true;
  else return false;
}

function changeKeyboard() {
  shift_1.classList.toggle("active");
  shift_2.classList.toggle("active");
  alt_2.classList.toggle("active");
  alt_4.classList.toggle("active");
  keyword.alt = false;
  keyword.shift = false;
  keyword.engLang ? changeLang("ru") : changeLang("eng");
}

function changeLang(param) {
  keyword.engLang ? (keyword.engLang = false) : (keyword.engLang = true);
  const lettArr = document.querySelectorAll(".keywords_div");
  keyword[param].forEach((item, i) => {
    lettArr[i].innerHTML = item;
  });
  changeLetterCase();
  changeKeysOnKeyboard();
}

function changeKeysOnKeyboard() {
  if (keyword.engLang) {
    keyword.shift ? changeKeys(engNumShift, ".numbers_div") : changeKeys(engNum, ".numbers_div");
    keyword.shift ? changeKeys(engLetShift, ".keywords_div") : changeKeys(engLet, ".keywords_div");
  } else {
    keyword.shift ? changeKeys(ruNumShift, ".numbers_div") : changeKeys(ruNum, ".numbers_div");
    keyword.shift ? changeKeys(ruLetShift, ".keywords_div") : changeKeys(ruLet, ".keywords_div");
  }
}

function changeKeys(lang, nameClassOfBtns) {
  const arrNum = document.querySelectorAll(nameClassOfBtns);
  arrNum.forEach((item, i) => {
    item.innerHTML = lang[i];
  });
}

document.addEventListener("click", handleClick);
function handleClick(e) {
  textAreaOffFocus(e);
  if (e.target.classList.contains("keywords_div")) insertLettIntoTextArea(e);
  if (e.target.classList.contains("numbers_div")) insertLettIntoTextArea(e);
}
const textarea = document.querySelector(".input_textarea");

function insertLettIntoTextArea(e) {
  let value = e.target.innerHTML;
  value = checkValue(value);
  if (!keyword.inputType) {
    textarea.setRangeText(value, textarea.selectionStart, textarea.selectionEnd, "end");
    if (keyword.shift) shiftToggle();
  } else {
    textarea.setRangeText(value, textarea.selectionStart, textarea.selectionEnd + 1, "end");
  }
  textAreaOnFocus();
}

function checkValue(val) {
  if (val === "&amp;") val = "&";
  if (val === "&lt;") val = "<";
  if (val === "&gt;") val = ">";
  return val;
}

function addSpaceIntoTextarea() {
  !keyword.inputType
    ? textarea.setRangeText(" ", textarea.selectionStart, textarea.selectionEnd, "end")
    : textarea.setRangeText(" ", textarea.selectionStart, textarea.selectionEnd + 1, "end");
  textAreaOnFocus();
}

function pushButtonBackspace() {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  if (start === end && start === 0) {
    textAreaOnFocus();
    return;
  }
  start !== end ? textarea.setRangeText("", start, end, "end") : textarea.setRangeText("", start - 1, end, "end");
  textAreaOnFocus();
}

function pushButtonDelete() {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  if (start !== end) {
    textarea.setRangeText("", start, end, "end");
  } else {
    textarea.value = textarea.value.slice(0, start) + textarea.value.slice(start + 1, textarea.value.length);
  }
  textarea.setSelectionRange(start, start);
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

arrowLeft.addEventListener("click", changePositionTextareaLeft);
arrowRight.addEventListener("click", changePositionTextareaRight);

function changePositionTextareaLeft() {
  textAreaOnFocus();
  const textareaStart = textarea.selectionStart;
  textareaStart === 0
    ? textarea.setSelectionRange(0, 0)
    : textarea.setSelectionRange(textareaStart - 1, textareaStart - 1);
}

function changePositionTextareaRight() {
  textAreaOnFocus();
  textarea.setSelectionRange(textarea.selectionEnd + 1, textarea.selectionEnd + 1);
}

enter.addEventListener("click", addLineBreak);
function addLineBreak() {
  textAreaOnFocus();
  textarea.setRangeText("\n", textarea.selectionStart, textarea.selectionEnd, "end");
}

arrowUp.addEventListener("click", setCursorUpper);
arrowDown.addEventListener("click", setCursorBelow);

function setCursorUpper() {
  const cursorIndex = textarea.selectionEnd;
  const upLine = textarea.value.lastIndexOf("\n", cursorIndex - 1);
  const upperUpLine = textarea.value.lastIndexOf("\n", upLine - 1);
  textAreaOnFocus();
  if (upperUpLine > 0) {
    cursorIndex + upperUpLine - upLine > upLine
      ? textarea.setSelectionRange(upLine, upLine)
      : textarea.setSelectionRange(cursorIndex + upperUpLine - upLine, cursorIndex + upperUpLine - upLine);
    return;
  }
  if (upperUpLine < 0 && upLine < 0) {
    return textarea.setSelectionRange(0, 0);
  }
  if (upperUpLine < 0) {
    cursorIndex - upLine - 1 > upLine
      ? textarea.setSelectionRange(upLine, upLine)
      : textarea.setSelectionRange(cursorIndex - upLine - 1, cursorIndex - upLine - 1);
    return;
  }
}

function setCursorBelow() {
  const cursorIndex = textarea.selectionEnd;
  const upLine = textarea.value.lastIndexOf("\n", cursorIndex - 1);
  const downLine = textarea.value.indexOf("\n", cursorIndex + 1);
  const underDownLine = textarea.value.indexOf("\n", downLine + 1);
  textAreaOnFocus();
  console.log(upLine, "upLine");
  console.log(downLine, "downLine");
  console.log(underDownLine, "underDownLine");

  if (textarea.value[cursorIndex] === "\n") {
    if (upLine < 0) {
      if (cursorIndex + cursorIndex > downLine) return textarea.setSelectionRange(downLine, downLine);
      return textarea.setSelectionRange(cursorIndex * 2 + 1, cursorIndex * 2 + 1);
    } else if (downLine < 0) {
      if (cursorIndex - upLine > textarea.value.length - cursorIndex) {
        return textarea.setSelectionRange(downLine, downLine);
      } else return textarea.setSelectionRange(cursorIndex - upLine + cursorIndex, cursorIndex - upLine + cursorIndex);
    } else {
      if (cursorIndex - upLine > downLine - cursorIndex) return textarea.setSelectionRange(downLine, downLine);
      return textarea.setSelectionRange(cursorIndex - upLine + cursorIndex - 1, cursorIndex - upLine + cursorIndex - 1);
    }
  }
  if (downLine < 0) {
    return textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }
  if (upLine < 0) {
    if (downLine > underDownLine - downLine + 1) return textarea.setSelectionRange(downLine, downLine);
    else return textarea.setSelectionRange(cursorIndex + downLine + 1, cursorIndex + downLine + 1);
  }
  if (underDownLine < 0) {
    if (downLine - upLine - 1 < textarea.value.length - downLine - 1)
      return textarea.setSelectionRange(downLine - upLine + cursorIndex, downLine - upLine + cursorIndex);
    else return textarea.setSelectionRange(downLine - upLine + cursorIndex, downLine - upLine + cursorIndex);
  }
  if (downLine > 0) {
    if (cursorIndex - upLine - 1 >= underDownLine - downLine)
      return textarea.setSelectionRange(underDownLine, underDownLine);
    return textarea.setSelectionRange(downLine - upLine + cursorIndex, downLine - upLine + cursorIndex);
  }
}

insert.addEventListener("click", changeInputType);
function changeInputType() {
  keyword.inputType ? (keyword.inputType = false) : (keyword.inputType = true);
  insert.classList.toggle("active");
  textAreaOnFocus();
}

textarea.addEventListener("click", () => {
  console.log(textarea.selectionStart);
});
