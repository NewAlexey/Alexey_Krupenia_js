//1 Create new object and Show the coordinates of side
let newRectangle = {
    leftTop: {
        x: 5,
        y: 6,
    },
    rightBottom: {
        x: 7,
        y: 3,
    },
};

function getInfoRectangle(rectangle) {
    console.log(`Coordinate A of rectangle: x - "${rectangle.leftTop.x}", y - "${rectangle.leftTop.y}"`);
    console.log(`Coordinate B of rectangle: x - "${rectangle.rightBottom.x}", y - "${rectangle.leftTop.y}"`);
    console.log(`Coordinate C of rectangle: x - "${rectangle.rightBottom.x}", y - "${rectangle.rightBottom.y}"`);
    console.log(`Coordinate D of rectangle: x - "${rectangle.leftTop.x}", y - "${rectangle.rightBottom.y}"`);
}
//check
getInfoRectangle(newRectangle);

//2 Get width of rectangle
function getWidthRectangle(rectangle) {
    return Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
}
//check
console.log(`Width of rectangle - "${getWidthRectangle(newRectangle)}"`);

//3 Get height of rectangle
function getHeightRectangle(rectangle) {
    return Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y);
}
//check
console.log(`Height of rectangle - "${getHeightRectangle(newRectangle)}"`);

//4 Get square of rectangle
function getSquareOfRectangle(rectangle) {
    return Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y) * Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
}
//check
console.log(`Square of rectangle - "${getSquareOfRectangle(newRectangle)}"`);

//5 Get perimeter of rectangle
function getPerimeterOfRectangle(rectangle) {
    return (Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y) + Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x)) * 2;
}
//check
console.log(`Perimeter of rectangle - "${getPerimeterOfRectangle(newRectangle)}"`);

//6 Change width
function changeWidth(rectangle, step) {
    if (step > 0) rectangle.rightBottom.x += step;
    else rectangle.rightBottom.x -= step;
}
//check
changeWidth(newRectangle, 1);
console.log(`Width of rectangle - "${getWidthRectangle(newRectangle)}"`);

//7 Change height
function changeHeight(rectangle, step) {
    if (step > 0) rectangle.leftTop.y += step;
    else rectangle.leftTop.y -= step;
}
//check
changeHeight(newRectangle, 2);
console.log(`Height of rectangle - "${getHeightRectangle(newRectangle)}"`);

//8  Change height and width
function changeHeightAndWidth(rectangle, newWidth, newHeight) {
    if (newWidth > 0) rectangle.rightBottom.x += newWidth;
    else rectangle.rightBottom.x -= newWidth;
    if (newHeight > 0) rectangle.leftTop.y += newHeight;
    else rectangle.leftTop.y -= newHeight;
}
//check
changeHeightAndWidth(newRectangle, 1, 1);
console.log(`Width of rectangle - "${getWidthRectangle(newRectangle)}"`);
console.log(`Height of rectangle - "${getHeightRectangle(newRectangle)}"`);
console.log(`Square of rectangle - "${getSquareOfRectangle(newRectangle)}"`);

//9
function shiftXaxis(rectangle, shift) {
    rectangle.leftTop.x += shift;
    rectangle.rightBottom.x += shift;
}
//check
// console.log(newRectangle.leftTop);
// console.log(newRectangle.rightBottom);
// shiftXaxis(newRectangle, 2);
// console.log(newRectangle.leftTop);
// console.log(newRectangle.rightBottom);

//10
function shiftYaxis(rectangle, shift) {
    rectangle.leftTop.y += shift;
    rectangle.rightBottom.y += shift;
}
//check
// console.log(newRectangle.leftTop);
// console.log(newRectangle.rightBottom);
// shiftYaxis(newRectangle, -2);
// console.log(newRectangle.leftTop);
// console.log(newRectangle.rightBottom);

//11
function shiftXandYaxis(rectangle, shiftX, shiftY) {
    rectangle.leftTop.y += shiftY;
    rectangle.rightBottom.y += shiftY;
    rectangle.leftTop.x += shiftX;
    rectangle.rightBottom.x += shiftX;
}
//check
// console.log(newRectangle.leftTop);
// console.log(newRectangle.rightBottom);
// shiftXandYaxis(newRectangle, 2, 2);
// console.log(newRectangle.leftTop);
// console.log(newRectangle.rightBottom);

//12
function isInside(rectangle, x, y) {
    if (x >= rectangle.leftTop.x 
        && x <= rectangle.rightBottom.x 
        && y <= rectangle.leftTop.y 
        && y >= rectangle.rightBottom.y) {
        return console.log('All ok! Inside!');
    } else return console.log('Not inside');
}

isInside(newRectangle, 5, 4);

// Task about car

//1 Show information about car
let myCar = {
    brand: 'Honda',
    model: 'Civic',
    yearOfProduction: 1999,
    midSpeed: 90,
    valueOfSpeed: 'km/h'
}

function showCarInfo(car) {
    console.log(car);
}
//check
showCarInfo(myCar);

//2 Calc time for distance 
function calcTime(car, distance) {
    let speed = car.midSpeed;
    let hours = 0, min = 0, seconds = 0, hoursOfRest = 0;
    hours = Math.trunc(distance / speed);
    min = Math.trunc(((distance - (hours * speed)) * 1000 / 25) / 60);
    seconds = ((distance - (hours * speed)) * 1000 / 25) - (min * 60);
    if ((hours % 4 === 0) && (min === 0) && (seconds === 0)) hoursOfRest = Math.trunc(distance / 360) - 1;
    else hoursOfRest = Math.trunc(distance / 360);
    console.log(`${hours} hours, ${min} minutes and ${seconds} seconds for this distance; time to rest - ${hoursOfRest} hours`);
    console.log(`My car - ${car.brand} ${car.model} ${car.yearOfProduction}, middle speed - ${car.midSpeed} ${car.valueOfSpeed}`);
}

//check
calcTime(myCar, 857);
