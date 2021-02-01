//1
let num = +prompt('Введите число');
if (isNaN(num)) alert('это не число')
else if (num > 0 ) alert('положительное')
else if (num < 0 ) alert('отритцательное')
else alert('Ваше число - ноль')

//2
let age = +prompt("Введите свой возраст числом");
if (isNaN(age)) alert("Это точно возраст?");
else if ((age <= 0) && (age >= 121)) alert("Так себе возраст...");
else alert("Все ок, спасибо!");

//3
let num = +prompt('Введите число, получите модуль');
if (isNaN(num)) alert('Это не число');
else if (num === 0) alert('This is zero')
else alert(Math.abs(num));

//4
let hours = prompt("Please, entered hours");
if (hours === null) alert('Canceled');
else if (hours.trim() === '') alert('String is empty');
else if (isNaN(hours)) alert("The hours entered incorrectly");
else {
    if (+hours >= 0 && +hours < 24) alert("The hours - ОК!");
    let min = prompt("Please, entered minutes");
    if (min === null) alert('Canceled');
    else if (min.trim() === '') alert('String is empty');
    else if (isNaN(min)) alert("The minutes entered incorrectly");
    else {
        if (+min >= 0 && +min < 60) alert("The minutes - ОК!");
        let sec = prompt("Please, entered seconds");
        if (sec === null) alert('Canceled');
        else if (sec.trim() === '') alert('String is empty');
        else if (isNaN(sec)) alert("The seconds entered incorrectly");
        else {
            if (+sec >= 0 && +sec < 60) alert("The seconds - ОК!");
        }
    }
}

//5

//  IV   I
// III   II

let x = prompt('Enter X-coordinate');
if ((x === null)) alert('Canceled');
else if ((x.trim() === '')) alert('String is empty');
else if ((isNaN(+x))) alert('You enter not a number');
else {
    let y = prompt('Enter Y-coordinate');
    if ((y === null)) alert('Canceled');
    else if ((y.trim() === '')) alert('String is empty');
    else if (isNaN(+y)) alert('You enter not a number');
    else {
        if ((+x > 0) && (+y > 0)) alert('I quarter');
        else if ((+x > 0) && (+y < 0)) alert('II quarter');
        else if ((+x < 0) && (+y < 0)) alert('III quarter');
        else if ((+x < 0) && (+y > 0)) alert('IV quarter');
        else if ((+x === 0) && (+y === 0)) alert('Right to the center');
        else if ((+x === 0) && (+y > 0)) alert('Between IV and I quadrants');
        else if ((+x === 0) && (+y < 0)) alert('Between III and II quadrants');
        else if ((+x > 0) && (+y === 0)) alert('Between I and II quadrants');
        else if ((+x < 0) && (+y === 0)) alert('Between IV and III quadrants');
    }
}

//6
let year = prompt('Enter a year');
if ((year === null)) alert('Canceled');
else if ((year.trim() === '')) alert('String is empty');
else if ((isNaN(+year))) alert('You enter not a number');
else {
    if ((+year % 12) === 0) alert('Monkey');
    else if ((+year % 12) === 1) alert('Chicken');
    else if ((+year % 12) === 2) alert('Dog');
    else if ((+year % 12) === 3) alert('Pig');
    else if ((+year % 12) === 4) alert('Rat');
    else if ((+year % 12) === 5) alert('Bull');
    else if ((+year % 12) === 6) alert('Tiger');
    else if ((+year % 12) === 7) alert('Rabbit');
    else if ((+year % 12) === 8) alert('Dragon');
    else if ((+year % 12) === 9) alert('Snake');
    else if ((+year % 12) === 10) alert('Horse');
    else if ((+year % 12) === 11) alert('Sheep');
}
