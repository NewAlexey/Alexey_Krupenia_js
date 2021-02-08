//1.1 Create shop list. Create function: first show only bought products, then - not bought

// let shopList = [
//     { title: "milk", count: 5, isBuy: true },
//     { title: "bread", count: 2, isBuy: false },
//     { title: "butter", count: 1, isBuy: false },
//     { title: "cheese", count: 4, isBuy: false },
//     { title: "chips", count: 3, isBuy: true },
// ];

//first method
// let newList = "";
// function isBought(object) {
//     for (let i = 0; i < object.length; i++) {
//         if (object[i].isBuy == true) {
//             newList += object[i].title + " ";
//         }
//     }
//     for (let i = 0; i < object.length; i++) {
//         if (object[i].isBuy !== true) {
//             newList += object[i].title + " ";
//         }
//     }
// }

//check
// isBought(shopList);
// console.log(newList);

//second method
// function isBought(object) {
//     let newArr = object.sort((a, b) => b.isBuy - a.isBuy);
//     let newList = "";
//     newArr.forEach((element) => {
//         newList += element.title + " ";
//     });
//     console.log(newList);
// }

//check
// isBought(shopList);

//1.2 Add product in a list. If product exist - add count;

// function addProduct(product) {
//     let productOfList = shopList.find((item) => item.title === product);
//     if (productOfList) {
//         productOfList.count++;
//     } else {
//         shopList.push({ title: product, count: 1, isBuy: false });
//     }
// }

//check
// addProduct("wine");
// console.log(shopList);

//1.3 Function takes product and marks as "purchased"

// function markProduct(product) {
//     shopList.forEach(element => {
//         if (element.title === product) {
//             element.isBuy = true;
//         }
//     });
// }
// markProduct('milk');
// console.log(shopList);




























// let hehe = "";
// shopList.map((item) => (hehe += item.title + " "));
// console.log(hehe);

// let hihi = shopList.filter((item) => item.count > 3);
// console.log(hihi);

// console.log(shopList.sort((a, b) => a.count - b.count));
