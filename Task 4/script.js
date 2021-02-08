// Task 4.1
// Task about Rectangle
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
// getInfoRectangle(newRectangle);

//2 Get width of rectangle
function getWidthRectangle(rectangle) {
    return Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
}
//check
// console.log(`Width of rectangle - "${getWidthRectangle(newRectangle)}"`);

//3 Get height of rectangle
function getHeightRectangle(rectangle) {
    return Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y);
}
//check
// console.log(`Height of rectangle - "${getHeightRectangle(newRectangle)}"`);

//4 Get square of rectangle
function getSquareOfRectangle(rectangle) {
    return Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y) * Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
}
//check
// console.log(`Square of rectangle - "${getSquareOfRectangle(newRectangle)}"`);

//5 Get perimeter of rectangle
function getPerimeterOfRectangle(rectangle) {
    return (Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y) + Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x)) * 2;
}
//check
// console.log(`Perimeter of rectangle - "${getPerimeterOfRectangle(newRectangle)}"`);

//6 Change width
function changeWidth(rectangle, step) {
    if (step > 0) rectangle.rightBottom.x += step;
    else rectangle.rightBottom.x -= step;
}
//check
// changeWidth(newRectangle, 1);
// console.log(`Width of rectangle - "${getWidthRectangle(newRectangle)}"`);

//7 Change height
function changeHeight(rectangle, step) {
    if (step > 0) rectangle.leftTop.y += step;
    else rectangle.leftTop.y -= step;
}
//check
// changeHeight(newRectangle, 2);
// console.log(`Height of rectangle - "${getHeightRectangle(newRectangle)}"`);

//8  Change height and width
function changeHeightAndWidth(rectangle, newWidth, newHeight) {
    if (newWidth > 0) rectangle.rightBottom.x += newWidth;
    else rectangle.rightBottom.x -= newWidth;
    if (newHeight > 0) rectangle.leftTop.y += newHeight;
    else rectangle.leftTop.y -= newHeight;
}
//check
// changeHeightAndWidth(newRectangle, 1, 1);
// console.log(`Width of rectangle - "${getWidthRectangle(newRectangle)}"`);
// console.log(`Height of rectangle - "${getHeightRectangle(newRectangle)}"`);
// console.log(`Square of rectangle - "${getSquareOfRectangle(newRectangle)}"`);

//9
function shiftXaxis(rectangle, shift) {
    rectangle.leftTop.x += shift;
    rectangle.rightBottom.x += shift;
}
//10
function shiftYaxis(rectangle, shift) {
    rectangle.leftTop.y += shift;
    rectangle.rightBottom.y += shift;
}

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
// shiftXaxis(newRectangle, 2);
// shiftYaxis(newRectangle, 2);
// shiftXandYaxis(newRectangle, 2, 2);
// console.log(newRectangle.leftTop);
// console.log(newRectangle.rightBottom);

//12
function isInside(rectangle, x, y) {
    if (x >= rectangle.leftTop.x && x <= rectangle.rightBottom.x && y <= rectangle.leftTop.y && y >= rectangle.rightBottom.y) {
        return console.log("All ok! Inside!");
    } else return console.log("Not inside");
}
// isInside(newRectangle, 5, 4);


// Task 4.2
// Task about car

//1 Show information about car
let myCar = {
    brand: "Honda",
    model: "Civic",
    yearOfProduction: 1999,
    midSpeed: 90,
    valueOfSpeed: "km/h",
};

function showCarInfo(car) {
    console.log(car);
}
//check
// showCarInfo(myCar);

//2 Calc time for distance
function calcTime(car, distance) {
    let speed = car.midSpeed;
    let hours = 0,
        min = 0,
        seconds = 0,
        hoursOfRest = 0;
    hours = Math.trunc(distance / speed);
    min = Math.trunc(((distance - hours * speed) * 1000) / 25 / 60);
    seconds = ((distance - hours * speed) * 1000) / 25 - min * 60;
    if (hours % 4 === 0 && min === 0 && seconds === 0) 
    hoursOfRest = Math.trunc(distance / 360) - 1;
    else hoursOfRest = Math.trunc(distance / 360);
    console.log(`${hours} hours, ${min} minutes and ${seconds} seconds for this distance; time to rest - ${hoursOfRest} hours`);
    console.log(`My car - ${car.brand} ${car.model} ${car.yearOfProduction}, middle speed - ${car.midSpeed} ${car.valueOfSpeed}`);
}
//check
// calcTime(myCar, 857);

// Task 4.3 
// Task about fraction
let drob = {
    numerator: 2,
    denominator: 3,
};

let drob2 = {
    numerator: 4,
    denominator: 3,
};

// + fraction
function plusFraction(firstFrac, secondFrac) {
    let resultNumerator = firstFrac.numerator * secondFrac.denominator + secondFrac.numerator * firstFrac.denominator;
    let resuldDenominator = firstFrac.denominator * secondFrac.denominator;
    if (resultNumerator % resuldDenominator === 0) console.log(`${resultNumerator / resuldDenominator}`);
    else if (resultNumerator > resuldDenominator) {
        let integerNum = Math.trunc(resultNumerator / resuldDenominator);
        console.log(`${integerNum} and ${resultNumerator % resuldDenominator}/${resuldDenominator}`);
    }
}
// - fraction
function minusFraction(firstFrac, secondFrac) {
    let resultNumerator = firstFrac.numerator * secondFrac.denominator - secondFrac.numerator * firstFrac.denominator;
    let resuldDenominator = firstFrac.denominator * secondFrac.denominator;
    if (resultNumerator % resuldDenominator === 0) console.log(`${resultNumerator / resuldDenominator}`);
    else if (resultNumerator > resuldDenominator) {
        let integerNum = Math.trunc(resultNumerator / resuldDenominator);
        console.log(`${integerNum} and ${resultNumerator % resuldDenominator}/${resuldDenominator}`);
    } else console.log(`${resultNumerator}/${resuldDenominator}`);
}
// * fraction
function multFraction(firstFrac, secondFrac) {
    let resultNumerator = firstFrac.numerator * secondFrac.numerator;
    let resuldDenominator = firstFrac.denominator * secondFrac.denominator;
    if (resultNumerator % resuldDenominator === 0) console.log(`${resultNumerator / resuldDenominator}`);
    else if (resultNumerator > resuldDenominator) {
        let integerNum = Math.trunc(resultNumerator / resuldDenominator);
        console.log(`${integerNum} and ${resultNumerator % resuldDenominator}/${resuldDenominator}`);
    } else console.log(`${resultNumerator}/${resuldDenominator}`);
}
// / fraction
function splitFraction(firstFrac, secondFrac) {
    let resultNumerator = firstFrac.numerator * secondFrac.denominator;
    let resuldDenominator = firstFrac.denominator * secondFrac.numerator;
    if (resultNumerator % resuldDenominator === 0) console.log(`${resultNumerator / resuldDenominator}`);
    else if (resultNumerator > resuldDenominator) {
        let integerNum = Math.trunc(resultNumerator / resuldDenominator);
        console.log(`${integerNum} and ${resultNumerator % resuldDenominator}/${resuldDenominator}`);
    } else console.log(`${resultNumerator}/${resuldDenominator}`);
}

//check
//plusFraction(drob, drob2);
//minusFraction(drob, drob2);
//multFraction(drob, drob2);
//splitFraction(drob, drob2);

function reduceFraction(fraction) {
    let answer;
    let numerator = fraction.numerator;
    let denominator = fraction.denominator;

    if (numerator % denominator === 0) {
        answer = numerator / denominator;
        console.log(answer);
    } else if (denominator % numerator === 0) {
        denominator = denominator / numerator;
        numerator = numerator / numerator;
        console.log(`${numerator}/${denominator}`);
    } else if (numerator > denominator) {
        let integerNum = Math.trunc(numerator / denominator);
        numerator = numerator % denominator;
        for (let min = numerator; min > 1; min--) {
            if (numerator % min === 0 && denominator % min === 0) {
                numerator = numerator / min;
                denominator = denominator / min;
            }
        }
        console.log(`${integerNum} and ${numerator}/${denominator}`);
    } else {        
        for (let min = numerator; min > 1; min--) {
            if (numerator % min === 0 && denominator % min === 0) {
                numerator = numerator / min;
                denominator = denominator / min;
            }
        }
        console.log(`${numerator}/${denominator}`);
    }
}
let drob3 = {
    numerator: 4,
    denominator: 3
};
// check
// reduceFraction(drob3);


// Task 4.4// Task about clock

let myClock = {
    hour: 20,
    min: 59,
    sec: 33
}

function showClock(clock) {
    alert(`Time is ${clock.hour}:${clock.min}:${clock.sec}`);
}
//check
// showClock(myClock);

function changeSec(clock, changeSec) {
    let hour = clock.hour;
    let min = clock.min;
    let sec = clock.sec;
    sec += changeSec;
    min += Math.trunc(sec / 60);
    sec = sec % 60;
    hour += Math.trunc(min / 60);
    min = min % 60;
    hour = hour % 24;
    if (hour < 10) {
        hour = '0' + String(hour);
    }
    if (min < 10) {
        min = '0' + String(min);
    }
    if (sec < 10) {
        sec = '0' + String(sec);
    }
    console.log(`Updated time is ${hour}:${min}:${sec}`);
}
//check
// changeSec(myClock, 240);

function changeMin(clock, changeMin) {
    let hour = clock.hour;
    let min = clock.min;
    let sec = clock.sec;
    min += changeMin;
    hour += Math.trunc(min / 60);
    min = min % 60;
    hour = hour % 24;
    if (hour < 10) {
        hour = '0' + String(hour);
    }
    if (min < 10) {
        min = '0' + String(min);
    }
    console.log(`Updated time is ${hour}:${min}:${sec}`);
}

//check
// changeMin(myClock, 181);


function changeHour(clock, changeHour) {
    let hour = clock.hour;
    let min = clock.min;
    let sec = clock.sec;
    hour += changeHour;
    hour = hour % 24;
    if (hour < 10) {
        hour = '0' + String(hour);
    }
    console.log(`Updated time is ${hour}:${min}:${sec}`);
}

//check
// changeHour(myClock, 15);