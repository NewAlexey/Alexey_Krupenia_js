let changeValue = "";

const inputToDo = document.querySelector("#input_toDo");
const toDoList = document.querySelector("#ol_list");

const buttonOkModal = document.querySelector("#okModal");
buttonOkModal.addEventListener("click", insertNewData);
const buttonCancelModal = document.querySelector("#cancelModal");
buttonCancelModal.addEventListener("click", closeModal);

const buttonToDO = document.querySelector("#button_toDo");
buttonToDO.addEventListener("click", addDataInList);

function addElemInDom(domElem, insertElem, data, event, func) {
    let elem = document.createElement(insertElem);
    elem.addEventListener(event, func);
    elem.textContent = data;
    domElem.append(elem);
}

function addButtonsInList(up, down, del) {
    let arrLi = document.querySelectorAll("li");
    let li = arrLi[arrLi.length - 1];
    addElemInDom(li, "button", up, "click", moveUp);
    addElemInDom(li, "button", down, "click", moveDown);
    addElemInDom(li, "button", del, "click", delElem);
    disableButtons();
}

function addDataInList() {
    let inputContent = inputToDo.value;
    if (inputContent !== "") {
        addElemInDom(toDoList, "li", inputContent, "dblclick", changeContent);
        addButtonsInList("Up", "Down", "Delete");
        clearInput();
        addInfoAfterInput();
    }
}

function clearInput() {
    inputToDo.value = "";
}

function addInfoAfterInput() {
    let p = document.querySelectorAll("p");
    if (p.length === 0) {
        let input = document.querySelector(".content_input");
        let p = document.createElement("p");
        p.innerHTML = "Double click on list to change content";
        input.after(p);
    }
}

function moveUp(e) {
    let currentLi = e.path[1].childNodes[0];
    let currentLiData = currentLi.data;
    let supData = currentLiData;
    let topLi = e.path[1].previousSibling.childNodes[0];
    let topLiData = topLi.data;
    currentLi.textContent = topLiData;
    topLi.textContent = supData;
}

function moveDown(e) {
    let currentLi = e.path[1].childNodes[0];
    let currentLiData = currentLi.data;
    let supData = currentLiData;
    let botLi = e.path[1].nextSibling.childNodes[0];
    let botLiData = botLi.data;
    currentLi.textContent = botLiData;
    botLi.textContent = supData;
}

function delElem(e) {
    e.path[1].remove();
    let arrLi = document.querySelectorAll("li");
    if (arrLi.length === 0) {
        document.querySelector("p").remove();
    }
    disableButtons();
}

function disableButtons() {
    let arrLi = document.querySelectorAll("li");
    if (arrLi.length > 0) {
        arrLi[0].children[0].setAttribute("disabled", "disabled");
        if (arrLi.length > 1) {
            for (let i = 0; i <= arrLi.length - 1; i++) {
                if (arrLi[i].children[1].hasAttribute("disabled")) {
                    arrLi[i].children[1].removeAttribute("disabled");
                }
            }
        }
        arrLi[arrLi.length - 1].children[1].setAttribute("disabled", "disabled");
    }
}

function changeContent(e) {
    let data = getLiData(e);
    showChangeWinwod();
    insertLiDataInInput(data);
    changeValue = data;
}

function getLiData(e) {
    return e.path[0].childNodes[0].data;
}

function showChangeWinwod() {
    let modal = document.querySelector(".modal_content");
    modal.style.top = 220 + "px";
    modal.classList.toggle("hidden");
}

function insertLiDataInInput(data) {
    let inputModal = document.querySelector("#input_modal");
    inputModal.value = data;
}

function insertNewData() {
    let arrLi = document.querySelectorAll("li");
    let inputModalData = document.querySelector("#input_modal").value;
    for (let i = 0; i < arrLi.length; i++) {
        if (arrLi[i].firstChild.data === changeValue) {
            arrLi[i].firstChild.textContent = inputModalData;
            break;
        }
    }
    changeValue = inputModalData;
}
function closeModal() {
    let modal = document.querySelector(".modal_content");
    modal.classList.toggle("hidden");
}
