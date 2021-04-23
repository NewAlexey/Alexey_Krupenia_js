let buttonSearch = document.querySelector(".button_search");
buttonSearch.addEventListener("click", sendNewRequest);

let totalResult;

function sendNewRequest() {
    let inputSearch = document.querySelector("#inputSearch").value;
    if (inputSearch.length >= 2) {
        let selectValue = document.querySelector("#selectType").value;
        inputSearch = inputSearch.trim().split(" ").join("+");
        let url = `http://www.omdbapi.com/?s=${inputSearch}&type=${selectValue}&apikey=24c773c2`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.Response === "False") {
                    let searchResults = document.querySelector(".content_search_results");
                    searchResults.remove();
                    document.querySelector(".error_info").innerHTML = data.Error;
                    let pagination = document.querySelector(".containerPaginator");
                    if (pagination) document.querySelector(".containerPaginator").remove();
                } else {
                    document.querySelector(".error_info").innerHTML = "";
                    totalResult = data.totalResults / 10;
                    showFindResult(data, url);
                }
            });
    }
}

function sendPaginationRequest(newUrl) {
    let detailInfo = document.querySelector(".container_filmInfo");
    if (detailInfo) document.querySelector(".container_filmInfo").remove();
    fetch(newUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.Response === "False") {
                let searchResults = document.querySelector(".content_search_results");
                searchResults.remove();
                document.querySelector(".error_info").innerHTML = data.Error;
                let pagination = document.querySelector(".containerPaginator");
                if (pagination) document.querySelector(".containerPaginator").remove();
            } else {
                document.querySelector(".error_info").innerHTML = "";
                totalResult = data.totalResults / 10;
                showFindResult(data, newUrl);
            }
        });
}

function showFindResult(result, url) {
    let searchResults = document.querySelector(".content_search_results");
    if (!searchResults) {
        createDivsForResult(result, url);
    } else {
        searchResults.remove();
        createDivsForResult(result, url);
    }
}

function createDivsForResult(resultSearch, url) {
    let result = resultSearch.Search;
    let errorInfo = document.querySelector(".error_info");
    let divForAllResults = document.createElement("div");
    divForAllResults.classList.add("content_search_results");
    for (let i = 0; i < result.length; i++) {
        let divForResult = document.createElement("div");
        divForResult.classList.add("search_result");
        let divForImgs = document.createElement("div");
        divForImgs.classList.add("search_div_img");
        let img = document.createElement("img");
        let way = result[i].Poster;
        img.setAttribute("src", `${way}`);
        img.setAttribute("alt", "poster (sorry, didn't find)");
        img.setAttribute("width", "220px");
        img.setAttribute("height", "300px");
        let infoMovies = document.createElement("p");
        let typeAndYear = result[i].Type;
        typeAndYear = typeAndYear.charAt(0).toUpperCase() + typeAndYear.slice(1, typeAndYear.length);
        infoMovies.innerHTML = `${typeAndYear}, ${result[i].Year}`;
        let title = document.createElement("p");
        title.classList.add("movies_title");
        title.innerHTML = result[i].Title;
        let buttonDetails = document.createElement("button");
        buttonDetails.innerHTML = "Details";
        buttonDetails.addEventListener("click", () => {
            showAdditionInfo(result, i);
        });
        divForImgs.append(img);
        divForResult.append(divForImgs);
        divForResult.append(infoMovies);
        divForResult.append(title);
        divForResult.append(buttonDetails);
        divForAllResults.append(divForResult);
    }
    errorInfo.after(divForAllResults);
    let isButtonsForPagination = document.querySelector(".content_paginatorButton");
    if (!isButtonsForPagination) {
        createPaginatorButtons(resultSearch, url);
    }
}

function showAdditionInfo(result, i) {
    let filmInfo = document.querySelector(".container_filmInfo");
    if (filmInfo) {
        insertInformation(result, i);
    } else {
        createDetailInfo();
        insertInformation(result, i);
    }
}

function insertInformation(result, i) {
    let fimlId = result[i].imdbID;
    let url = `http://www.omdbapi.com/?i=${fimlId}&apikey=24c773c2`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            insertDetailInfo(data);
        });
}

function insertDetailInfo(data) {
    let arrWithTh = document.querySelectorAll("th");
    let titleOfTable = {
        0: ["Title", data.Title],
        1: ["Released", data.Released],
        2: ["Genre", data.Genre],
        3: ["Country", data.Country],
        4: ["Director", data.Director],
        5: ["Writer", data.Writer],
        6: ["Actors", data.Actors],
        7: ["Awards", data.Awards],
    };
    document.querySelector("#imgDetails").setAttribute("src", `${data.Poster}`);
    let k = 0;
    let i = 0;
    for (let g = 0; g <= 7; g++) {
        let j = 0;
        while (j < 2) {
            arrWithTh[i].innerHTML = titleOfTable[k][j];
            j++;
            i++;
        }
        k++;
    }
}

function createDetailInfo() {
    let divPaginator = document.querySelector(".containerPaginator");
    let containerFilmInfo = document.createElement("div");
    containerFilmInfo.classList.add("container_filmInfo");
    let fimlInfo = document.createElement("p");
    fimlInfo.innerHTML = "Film info:";
    let divContentFimlInfo = document.createElement("div");
    divContentFimlInfo.classList.add("content_filmInfo");
    let contentImg = document.createElement("div");
    contentImg.classList.add("content_img");
    let img = document.createElement("img");
    img.setAttribute("alt", "poster (sorry, didn't find)");
    img.setAttribute("width", "300px");
    img.setAttribute("height", "447px");
    img.setAttribute("id", "imgDetails");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement("tr");
        for (let i = 0; i < 2; i++) {
            let th = document.createElement("th");
            tr.append(th);
        }
        tbody.append(tr);
    }
    table.append(tbody);
    contentImg.append(img);
    divContentFimlInfo.append(contentImg);
    divContentFimlInfo.append(table);
    containerFilmInfo.append(fimlInfo);
    containerFilmInfo.append(divContentFimlInfo);
    divPaginator.after(containerFilmInfo);
}

function createPaginatorButtons(result, url) {
    let isExistPaginator = document.querySelector(".containerPaginator");
    if (isExistPaginator) isExistPaginator.remove();
    let totalResult = result.totalResults / 10;
    if (totalResult > 1 && totalResult < 2) createTwoButtons(url);
    else if (totalResult > 2 && totalResult <= 3) createThreePaginatorButtons(url);
    else if (totalResult > 3) createAllPaginatorButtons(url);
    else throw new Error("IDK WHAT HAPPEND");
    let firstButtonPagination = document.querySelector("#button_1");
    firstButtonPagination.classList.add("pagination_press_button");
}

function createTwoPaginatorButtons(url) {
    let contentSearch = document.querySelector(".content_search_results");
    let containerPaginator = document.createElement("div");
    containerPaginator.classList.add("containerPaginator");
    let contentPaginator = document.createElement("div");
    contentPaginator.classList.add("content_paginatorButton");
    for (let i = 0; i < 2; i++) {
        let button = document.createElement("button");
        button.classList.add("pagination");
        button.id = `button_${i}`;
        contentPaginator.append(button);
        button.addEventListener("click", () => {
            showNewListOfFilms(url);
        });
    }
    containerPaginator.append(contentPaginator);
    contentSearch.after(containerPaginator);
    let arrButtons = document.querySelector(".content_paginatorButton").querySelectorAll("button");
    arrButtons[0].innerHTML = "1";
    arrButtons[1].innerHTML = "2";
}

function createThreePaginatorButtons(url) {
    let contentSearch = document.querySelector(".content_search_results");
    let containerPaginator = document.createElement("div");
    containerPaginator.classList.add("containerPaginator");
    let contentPaginator = document.createElement("div");
    contentPaginator.classList.add("content_paginatorButton");
    for (let i = 0; i < 3; i++) {
        let button = document.createElement("button");
        button.classList.add("pagination");
        button.id = `button_${i}`;
        contentPaginator.append(button);
        button.addEventListener("click", () => {
            showNewListOfFilms(url);
        });
    }
    containerPaginator.append(contentPaginator);
    contentSearch.after(containerPaginator);
    let arrButtons = document.querySelector(".content_paginatorButton").querySelectorAll("button");
    for (let i = 0; i < arrButtons.length; i++) {
        arrButtons[i].innerHTML = `${i}`;
    }
    arrButtons[0].innerHTML = "1";
    arrButtons[1].innerHTML = "2";
    arrButtons[2].innerHTML = "3";
}

function createAllPaginatorButtons(url) {
    let contentSearch = document.querySelector(".content_search_results");
    let containerPaginator = document.createElement("div");
    containerPaginator.classList.add("containerPaginator");
    let contentPaginator = document.createElement("div");
    contentPaginator.classList.add("content_paginatorButton");
    for (let i = 0; i < 5; i++) {
        let button = document.createElement("button");
        button.classList.add("pagination");
        button.id = `button_${i}`;
        contentPaginator.append(button);
        button.addEventListener("click", () => {
            showNewListOfFilms(url, button.id);
        });
    }
    containerPaginator.append(contentPaginator);
    contentSearch.after(containerPaginator);
    let arrButtons = document.querySelector(".content_paginatorButton").querySelectorAll("button");
    arrButtons[0].innerHTML = "<<";
    arrButtons[4].innerHTML = ">>";
    for (let i = 1; i < arrButtons.length - 1; i++) {
        arrButtons[i].innerHTML = `${i}`;
    }
}

function showNewListOfFilms(url, id) {
    if (id === "button_0") {
        id = id.slice(0, id.length - 1) + 1;
    }
    if (id === "button_4") {
        id = id.slice(0, id.length - 1) + 3;
    }
    let pressedButton = document.querySelector(`#${id}`);
    let pageNumber = pressedButton.innerHTML;

    if (url.lastIndexOf("=") === url.length - 2) {
        url = url.slice(0, url.length - 7);
    }
    if (url.lastIndexOf("=") === url.length - 3) {
        url = url.slice(0, url.length - 8);
    }
    if (url.lastIndexOf("=") === url.length - 4) {
        url = url.slice(0, url.length - 9);
    }
    let newUrl = `${url}&page=${pageNumber}`;
    newUrl.lastIndexOf("=");
    sendPaginationRequest(newUrl);
    if (id === "button_1") {
        minusOnePage();
    } else if (id === "button_3") {
        plusOnePage();
    }
    let firstButtonPagination = document.querySelector("#button_1");
    firstButtonPagination.classList.remove("pagination_press_button");
    document.querySelector("#button_2").classList.add("pagination_press_button");
}

function minusOnePage() {
    let arrButtonNumber = document.querySelector(".content_paginatorButton").querySelectorAll("button");
    for (let i = 1; i <= 3; i++) {
        if (arrButtonNumber[3].innerHTML !== "3") {
            arrButtonNumber[i].innerHTML = +arrButtonNumber[i].innerHTML - 1;
        }
    }
    if (arrButtonNumber[1].innerHTML === "1") {
        let firstButtonPagination = document.querySelector("#button_1");
        firstButtonPagination.classList.add("pagination_press_button");
    }
}

function plusOnePage() {
    let arrButtonNumber = document.querySelector(".content_paginatorButton").querySelectorAll("button");
    for (let i = 1; i <= 3; i++) {
        arrButtonNumber[i].innerHTML = +arrButtonNumber[i].innerHTML + 1;
    }
    let firstButtonPagination = document.querySelector("#button_1");
    firstButtonPagination.classList.remove("pagination_press_button");
}
