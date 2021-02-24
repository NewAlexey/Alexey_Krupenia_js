let buttonRequest = document.querySelector("#buttonRequest");
buttonRequest.addEventListener("click", sendRequest);

function sendRequest() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let responseData = data;
            createHTMLDivs(responseData);
        });
}

function createHTMLDivs(data) {
    let divUsers = document.createElement("div");
    divUsers.classList.add("content_users");
    let j = 0;
    for (let i = 1; i <= data.length; i++) {
        let button = document.createElement("button");
        button.classList.add("users");
        let userName = data[j]["name"];
        button.innerHTML = userName;
        j++;
        button.id = `user_${i}`;
        button.addEventListener("click", () => {
            sendRequestAdditionInfo(i);
        });
        divUsers.append(button);
    }
    deleteButton();
    let allUsers = document.createElement('p');
    allUsers.innerHTML = 'All users:';
    allUsers.classList.add('infoAboutSection');
    document.body.querySelector(".container_content").prepend(allUsers);
    document.body.querySelector(".container_content").append(divUsers);
}

function deleteButton() {
    document.querySelector('.content_buttonRequest').remove();
}

function sendRequestAdditionInfo(userId) {
    let url = "https://jsonplaceholder.typicode.com/users/";
    url += userId;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let responseAdditionData = data;
            // clearPosts();
            createHTMLTable(responseAdditionData);
        });
}

function createHTMLTable(data) {
    let user = [
        "Name:",
        `${data.name}`,
        "Username:",
        `${data.username}`,
        "Address:",
        `${data.address.city}, ${data.address.street}`,
        "Email:",
        `${data.email}`,
        "Phone:",
        `${data.phone}`,
        "Website:",
        `${data.website}`,
    ];
    let div = document.querySelector(".container_content");
    let divTable = document.querySelector(".content_table");
    if (!divTable) {
        let divNew = document.createElement("div");
        divNew.classList.add("content_table");
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        let j = 0;
        for (let i = 1; i <= 6; i++) {
            let tr = document.createElement("tr");
            for (let i = 1; i <= 2; i++) {
                let th = document.createElement("th");
                th.innerHTML = user[j];
                j++;
                tr.append(th);
            }
            tbody.append(tr);
        }
        let userInfo = document.createElement('p');
        userInfo.innerHTML = "User info:";
        userInfo.classList.add('infoAboutSection');
        document.querySelector('.content_users').after(userInfo);
        table.append(tbody);
        divNew.append(table);
        div.append(divNew);
    } else {
        let arrWithTh = document.querySelectorAll("th");
        for (let i = 0; i < arrWithTh.length; i++) {
            arrWithTh[i].innerHTML = user[i];
        }
    }
    let id = data.id;
    createButtonShowPost();
    sendRequestPosts(id);
}

function createButtonShowPost(id) {
    let divTable = document.querySelector(".content_table");
    let buttonShowPost = document.querySelector(".buttonShow");
    if (!buttonShowPost) {
        let buttonShow = document.createElement("button");
        buttonShow.classList.add("buttonShow");
        buttonShow.innerHTML = "Show posts";
        buttonShow.addEventListener("click", () => {
            hideAllPosts();
        });
        divTable.after(buttonShow);
    } else {
        buttonShowPost.remove();
        let buttonShow = document.createElement("button");
        buttonShow.classList.add("buttonShow");
        buttonShow.innerHTML = "Show posts";
        buttonShow.addEventListener("click", () => {
            hideAllPosts();
        });
        divTable.after(buttonShow);
    }
}

function hideAllPosts() {
    let divForAllPosts = document.querySelector(".content_shownPosts");
    divForAllPosts.classList.toggle("hidden");
    let usersPosts = document.querySelector("#usersPosts");
    usersPosts.classList.toggle('hidden');
}

function sendRequestPosts(userId) {
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let responsePosts = data;
            showPosts(responsePosts);
        });
}

function showPosts(posts) {
    let div = document.querySelector(".container_content");
    let divsForPosts = document.querySelector(".content_post");
    if (!divsForPosts) {
        let divWithInfoAndPosts = document.createElement("div");
        divWithInfoAndPosts.classList.add("content_posts_info")
        let divForAllPosts = document.createElement("div");
        divForAllPosts.classList.add("content_shownPosts");
        for (let i = 0; i < posts.length; i++) {
            let divsForPosts = document.createElement("div");
            let h1Post = document.createElement("h1");
            let paragraphPost = document.createElement("p");
            divsForPosts.classList.add("content_post");
            divForAllPosts.classList.toggle("hidden");
            h1Post.innerHTML = posts[i].title;
            paragraphPost.innerHTML = posts[i].body;
            divsForPosts.append(h1Post);
            divsForPosts.append(paragraphPost);
            divForAllPosts.append(divsForPosts);
            divWithInfoAndPosts.append(divForAllPosts)
        }
        let usersPosts = document.createElement('p');
        usersPosts.id = "usersPosts";
        usersPosts.innerHTML = "User's posts:";
        div.append(divWithInfoAndPosts);
        document.querySelector('.content_posts_info').prepend(usersPosts);
    } else {
        let arrWith_h1 = document.querySelectorAll('h1');
        let arrWith_p = document.querySelector(".content_shownPosts").querySelectorAll('p');
        for (let i = 0; i < posts.length; i++) {
            arrWith_h1[i].innerHTML = posts[i].title;
            arrWith_p[i].innerHTML = posts[i].body;
        }
    }
}