//Task 1
let trafficLight = document.querySelector("#button_trafficLight");
trafficLight.addEventListener("click", changeLight);

function changeLight() {
    let redLight = document.querySelector("#red_light");
    let yellowLight = document.querySelector("#yellow_light");
    let greenLight = document.querySelector("#green_light");
    if (redLight.classList.contains("red_light_on")) {
        redLight.classList.remove("red_light_on");
        yellowLight.classList.add("yellow_light_on");
    } else if (yellowLight.classList.contains("yellow_light_on")) {
        yellowLight.classList.remove("yellow_light_on");
        greenLight.classList.add("green_light_on");
    } else if (greenLight.classList.contains("green_light_on")) {
        greenLight.classList.remove("green_light_on");
        redLight.classList.add("red_light_on");
    }
}

//Task 2
let eventBody;
let eventLi = 1;
let arrLi = document.querySelector("#olList").querySelectorAll("li");
arrLi.forEach((item) => {
    item.addEventListener("click", () => {
        createBackground();
    });
});

let body = document.body;
body.addEventListener("click", clearHighlight);
function clearHighlight() {
    eventBody = event;
    let eventInOl = eventLi.screenX;
    if (eventInOl) {
        if (eventBody.screenX !== eventLi.screenX) {
            arrLi.forEach((item) => {
                item.classList.remove("shineBackground");
            });
        }
    }
}

function createBackground() {
    eventLi = event;
    arrLi.forEach((item) => {
        item.classList.remove("shineBackground");
    });
    let elemLi = event.target;
    elemLi.classList.toggle("shineBackground");
}

//Task 3
function createTooltip() {
    let divTooltip = document.createElement("div");
    divTooltip.classList.add("tooltip2");
    divTooltip.innerHTML = "Tooltip";
    document.body.append(divTooltip);
}

function hideTooltip() {
    divTooltip = document.querySelector(".tooltip2").remove();
}

let buttonTooltipTop = document.querySelector("#button_top");
buttonTooltipTop.addEventListener("mouseover", showTooltipTop);
buttonTooltipTop.addEventListener("mouseout", hideTooltip);

function showTooltipTop() {
    createTooltip();
    let tooltip = buttonTooltipTop.getBoundingClientRect();
    let divTooltip = document.querySelector(".tooltip2");
    let top = tooltip.top - 45;
    if (top < 0) top = tooltip.bottom + 10;
    let left = tooltip.left + 15;
    divTooltip.style.top = top + "px";
    divTooltip.style.left = left + "px";
}

let buttonTooltipBot = document.querySelector("#button_bot");
buttonTooltipBot.addEventListener("mouseover", showTooltipBot);
buttonTooltipBot.addEventListener("mouseout", hideTooltip);

function showTooltipBot() {
    createTooltip();
    let tooltip = buttonTooltipBot.getBoundingClientRect();
    let divTooltip = document.querySelector(".tooltip2");
    let top = tooltip.bottom + 10;
    let documentHeight = document.documentElement.clientHeight;
    if (top > documentHeight - 30) top = tooltip.bottom - 70;
    let left = tooltip.left + 15;
    divTooltip.style.top = top + "px";
    divTooltip.style.left = left + "px";
}

let buttonTooltipLeft = document.querySelector("#button_left");
buttonTooltipLeft.addEventListener("mouseover", showTooltipLeft);
buttonTooltipLeft.addEventListener("mouseout", hideTooltip);

function showTooltipLeft() {
    createTooltip();
    let tooltip = buttonTooltipLeft.getBoundingClientRect();
    let divTooltip = document.querySelector(".tooltip2");
    let left = tooltip.left - 80;
    if (left < 0) left = tooltip.right + 10;
    divTooltip.style.top = tooltip.top + "px";
    divTooltip.style.left = left + "px";
}

let buttonTooltipRight = document.querySelector("#button_right");
buttonTooltipRight.addEventListener("mouseover", showTooltipRight);
buttonTooltipRight.addEventListener("mouseout", hideTooltip);

function showTooltipRight() {
    createTooltip();
    let tooltip = buttonTooltipRight.getBoundingClientRect();
    let documentWidth = document.documentElement.clientWidth;
    console.log(documentWidth);
    let divTooltip = document.querySelector(".tooltip2");
    let right = tooltip.right + 100;
    let left = tooltip.left + 110;
    console.log(left);
    console.log(tooltip);
    if (right > documentWidth) left = tooltip.left - 80;
    divTooltip.style.top = tooltip.top + "px";
    divTooltip.style.left = left + "px";
}

let buttonRandomNum = document.querySelector("#button_random_number");
buttonRandomNum.addEventListener("click", generateRandomNumber);

//Task 4
function generateRandomNumber() {
    let divWithRandomNumber = document.querySelector("#div_random_number");
    divWithRandomNumber.innerHTML = "";
    let randomNum = getRandomIntInclusive(1, 100);
    divWithRandomNumber.innerHTML = randomNum;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Task 5
let divCoords = document.querySelector("#mouseInside");
divCoords.addEventListener("mousemove", showCoords);
divCoords.addEventListener("click", showLeft);
divCoords.addEventListener("contextmenu", showRight);

function showCoords(event) {
    let coordX = event.clientX;
    let coordY = event.clientY;
    let info = document.querySelector(".coordinates");
    info.innerHTML = `X = ${coordX}, Y = ${coordY}`;
    console.log(event.type);
}

function showLeft() {
    let pLeft = document.querySelector("#pLeft");
    let pRight = document.querySelector("#pRight");
    if (pRight) {
        pRight.remove();
    }
    if (!pLeft) {
        let pLeft = document.createElement("p");
        pLeft.id = "pLeft";
        divCoords.append(pLeft);
        pLeft.innerHTML = "Left";
    }
}

function showRight() {
    let pRight = document.querySelector("#pRight");
    let pLeft = document.querySelector("#pLeft");
    if (pLeft) {
        pLeft.remove();
    }
    if (!pRight) {
        let pRight = document.createElement("p");
        pRight.id = "pRight";
        divCoords.append(pRight);
        pRight.innerHTML = "Right";
    }
    event.preventDefault();
}

//Task 6
let paragraphText = document.querySelector(".showHideText");
paragraphText.addEventListener("contextmenu", preventEvent);
paragraphText.addEventListener("mousedown", preventEvent);

function preventEvent(e) {
    e.preventDefault();
}

let buttonShowHide = document.querySelector("#buttonShowHide");
buttonShowHide.addEventListener("click", showHideText);

function showHideText() {
    let hiddenText = document.querySelector(".showHideText");
    hiddenText.classList.toggle("hidden");
}

//Task 7
let buttonHTML = document.querySelector("#buttonHMTL");
buttonHTML.addEventListener("click", showHTMLContent);
let buttonCSS = document.querySelector("#buttonCSS");
buttonCSS.addEventListener("click", showCSSContent);
let buttonJS = document.querySelector("#buttonJS");
buttonJS.addEventListener("click", showJSContent);

function showHTMLContent() {
    let arrP = document.querySelector(".content_task-7").querySelectorAll("p");
    arrP.forEach((item) => {
        item.classList.add("display-invisible");
    });
    let pHTML = document.querySelector("#divHTML");
    pHTML.classList.toggle("display-invisible");
    let arrButtons = document.querySelector(".buttons-task-7").querySelectorAll("button");
    arrButtons.forEach((item) => {
        item.classList.remove("button-background");
    });
    buttonHTML.classList.add("button-background");
}

function showCSSContent() {
    let arrP = document.querySelector(".content_task-7").querySelectorAll("p");
    arrP.forEach((item) => {
        item.classList.add("display-invisible");
    });
    let pCSS = document.querySelector("#divCSS");
    pCSS.classList.toggle("display-invisible");
    let arrButtons = document.querySelector(".buttons-task-7").querySelectorAll("button");
    arrButtons.forEach((item) => {
        item.classList.remove("button-background");
    });
    buttonCSS.classList.add("button-background");
}

function showJSContent() {
    let arrP = document.querySelector(".content_task-7").querySelectorAll("p");
    arrP.forEach((item) => {
        item.classList.add("display-invisible");
    });
    let pJS = document.querySelector("#divJS");
    pJS.classList.toggle("display-invisible");
    let arrButtons = document.querySelector(".buttons-task-7").querySelectorAll("button");
    arrButtons.forEach((item) => {
        item.classList.remove("button-background");
    });
    buttonJS.classList.add("button-background");
}

//Task 8

let arrButtonsRemove = document.querySelector(".div_task-8").querySelectorAll("button");
arrButtonsRemove.forEach((item) => {
    item.addEventListener("click", removePost);
});

function removePost(e) {
    let parentNode = e.path[2];
    parentNode.classList.add("remove-from-DOM");
}

//Task 9
let buttonAddPercent = document.querySelector("#buttonAddPercents");
buttonAddPercent.addEventListener("click", add5Percents);
let inputPercent = document.querySelector("#input_range");
inputPercent.addEventListener("mousedown", preventEvent);

function add5Percents() {
    let value = +inputPercent.value;
    inputPercent.value = value + 5;
}

//Task 10
let arrTdTable = document.querySelector(".div_table").querySelectorAll("td");
arrTdTable.forEach((item) => {
    item.addEventListener("mouseover", hoverWhileMouse);
    item.addEventListener("mouseout", unhoverWhileMouse);
});

let usersArray = [
    { Firstname: "Bill", Lastname: "Gates", Age: 62, Company: "Microsoft" },
    { Firstname: "Timothy", Lastname: "Cook", Age: 57, Company: "Apple" },
    { Firstname: "Mark", Lastname: "Zuckerberg", Age: 34, Company: "Facebook" },
    { Firstname: "Larry", Lastname: "Page", Age: 45, Company: "Google" },
];

function createTable() {
    let existTable = document.querySelector(".div_table").querySelector("table");
    if (existTable) existTable.remove();
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    for (key in usersArray[0]) {
        let th = document.createElement("th");
        th.innerHTML = key;
        th.addEventListener("click", sortTable);
        tr.append(th);
    }
    tbody.append(tr);
    for (i = 0; i < usersArray.length; i++) {
        let tr = document.createElement("tr");
        for (key in usersArray[i]) {
            let td = document.createElement("td");
            td.addEventListener("mouseover", hoverWhileMouse);
            td.addEventListener("mouseout", unhoverWhileMouse);
            td.innerHTML = usersArray[i][key];
            tr.append(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);
    document.querySelector(".div_table").append(table);
}
createTable();

function hoverWhileMouse(e) {
    let td = e.target;
    td.classList.add("td_hover");
}

function unhoverWhileMouse(e) {
    let td = e.target;
    td.classList.remove("td_hover");
}

function sortTable(e) {
    let value = e.path[0].innerHTML;
    if (value === "Age") {
        usersArray.sort((a, b) => {
            return a.Age - b.Age;
        });
    } else if (value === "Company") {
        usersArray.sort((a, b) => {
            if (a.Company > b.Company) return 1;
            if (a.Company < b.Company) return -1;
            return 0;
        });
    } else if (value === "Firstname") {
        usersArray.sort((a, b) => {
            if (a.Firstname > b.Firstname) return 1;
            if (a.Firstname < b.Firstname) return -1;
            return 0;
        });
    } else {
        usersArray.sort((a, b) => {
            if (a.Lastname > b.Lastname) return 1;
            if (a.Lastname < b.Lastname) return -1;
            return 0;
        });
    }
    createTable();
}

//Task 11
let divTextareaTask11 = document.querySelector("#div_textarea_task-11");
document.addEventListener("keydown", removeDivCreateTextarea);
let arrKey = [];

function removeDivCreateTextarea(event) {
    let key = event.key;
    arrKey.push(key);
    let div = document.querySelector(".content_task-11");
    let divInsteadTextarea = document.querySelector(".div_textarea_task-11");
    if (divInsteadTextarea) {
        if (arrKey[arrKey.length - 2] === "Control" && arrKey[arrKey.length - 1] === "e") {
            let textareaInsteadDiv = document.createElement("textarea");
            let value = divInsteadTextarea.innerHTML;
            textareaInsteadDiv.innerHTML = value;
            textareaInsteadDiv.setAttribute("cols", "110");
            textareaInsteadDiv.setAttribute("rows", "8");
            textareaInsteadDiv.classList.add("textarea_task-11");
            divInsteadTextarea.remove();
            div.append(textareaInsteadDiv);
        }
    } else {
        if (arrKey[arrKey.length - 2] === "Control" && arrKey[arrKey.length - 1] === "s") {
            let divInsteadTextarea = document.createElement("div");
            let textareaInsteadDiv = document.querySelector(".textarea_task-11");
            let value = textareaInsteadDiv.value;
            divInsteadTextarea.innerHTML = value;
            divInsteadTextarea.classList.add("div_textarea_task-11");
            textareaInsteadDiv.remove();
            div.append(divInsteadTextarea);
        }
    }
    if (arrKey[arrKey.length - 2] === "Control" && arrKey[arrKey.length - 1] === "s") {
        event.preventDefault();
    }
    if (arrKey[arrKey.length - 2] === "Control" && arrKey[arrKey.length - 1] === "e") {
        event.preventDefault();
    }
    if (arrKey.length > 100) arrKey = [];
}

//Task 12
let buttonLike = document.querySelector(".content_button_like");
buttonLike.addEventListener("click", plusOneLike);

function plusOneLike() {
    let divCountLike = document.querySelector(".button_like_number");
    let value = divCountLike.innerHTML;
    value = +value + 1;
    divCountLike.innerHTML = value;
    buttonLike.classList.add("button_like_transform");
    setTimeout(removeScale, 100);
}

function removeScale() {
    buttonLike.classList.remove("button_like_transform");
}

//Task 13
let divHeader = document.querySelector("#header_home");
divHeader.addEventListener("click", showMenuHome);
let divCategories = document.querySelector("#header_categories");
divCategories.addEventListener("click", showMenuHome);
let divAbout = document.querySelector("#header_about");
divAbout.addEventListener("click", showMenuHome);
let divContact = document.querySelector("#header_contact");
divContact.addEventListener("click", showMenuHome);

const categories = {
    Dresser: true,
    Shirts: true,
    Jeans: true,
    Shoes: true,
};

document.addEventListener("mouseover", removeMenu);
function removeMenu(e) {
    let target = e.target;
    if (!target.classList.contains("div_children")) {
        let div = document.querySelector(".div_parent");
        if (div) {
            document.querySelector(".div_parent").remove();
        }
    } else return true;
}

function showMenuHome(e) {
    let idElem = e.path[0].id
    let headerHome = document.querySelector(`#${idElem}`);
    let coordsHome = headerHome.getBoundingClientRect();
    let divParent = document.createElement("div");
    divParent.classList.add("div_parent");
    for (let key in categories) {
        let div = document.createElement("div");
        div.innerHTML = key;
        div.classList.add("div_children");
        divParent.append(div);
    }
    divParent.style.top = coordsHome.bottom + "px";
    divParent.style.left = coordsHome.left + "px";
    headerHome.prepend(divParent);
}