//1 Подсчитать сумму всех чисел в заданном пользователем диапазоне
let start = +prompt('Enter begin of range');
let end = +prompt('Enter end of range');
let sum = 0;
for (; start <= end; start++) {
    sum += start;
}
console.log(sum);

//2 Запросить 2 числа и найти только наибольший общий делитель
let min;
let firstNum = prompt('Enter first number');
if (firstNum === null) alert('Canceled');
else if (firstNum.trim() === '') alert('Empty string');
else if (isNaN(+firstNum)) alert('You entered not a number');
else {
    let secondNum = prompt('Enter second number');
    if (secondNum === null) alert('Canceled');
    else if (secondNum.trim() === '') alert('Empty string');
    else if (isNaN(+secondNum)) alert('You entered not a number');
    else {
        min = firstNum > secondNum ? firstNum : secondNum;
        while (min > 1) {
            if (firstNum % min === 0 && secondNum % min === 0) {
                break;
            }
            min--;
        }
    }
}
alert.log(`This number is ${min}`);

// 3 Запросить у пользователя число и вывести все делители этого числа
let num = prompt('Enter a number');
if (num === null) alert('Canceled');
else if (num.trim() === '') alert('Empty string');
else if (isNaN(+num)) alert('You entered not a number')
else {
    num = Math.abs(num);
    for (let i = 1; i <= +num; i++) {
        if (+num % i === 0) console.log(i);
    }
}

//4 Определить количество цифр в введенном числе
let num = prompt('Enter a number');
if (num === null) alert('Canceled');
else if (num.trim() === '') alert('Empty string');
else if (isNaN(+num)) alert('You entered not a number');
else {
    while (num) {
        num = String(Math.abs(num));
        if ((num.indexOf('.') !== -1)) {
            num = String(Math.abs(num));
            alert(`${num.length - 1}`);
            break;
        }
        else {
            alert(num.length);
            break;
        }
    }
}

//5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем

let positiveCount, zeroCount, negativeCount, even, odd;
positiveCount = 0;
zeroCount = 0;
negativeCount = 0;
even = 0;
odd = 0;
let counter = 10;
let num;
while (counter > 0) {
    num = prompt(`Enter a number. \n${counter} more number`);
    if (num === null) {
        alert('Canceled');
        break;
    } else if (isNaN(+num) || num.trim() === '') {
        alert('This isnt a number');
        counter++;
    } else {
        if (+num > 0) positiveCount++;
        else if (+num === 0) zeroCount++;
        else if (+num < 0) negativeCount++;
        if (num % 2 === 0) even++;
        else odd++;
    }
    counter--;
}

alert(`Positive - ${positiveCount}\nNegative - ${negativeCount}\nZero - ${zeroCount}\nEven numbers - ${even}\nOdd numbers - ${odd}`);

//6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется

let onOff = 1;
while (onOff === 1) {
    let firstNum = prompt('Enter first number');
    if (firstNum === null) onOff = 0;
    else if (firstNum.trim() === '') alert('Empty string, enter a number or click cancel!');
    else if (isNaN(+firstNum)) alert('You entered not a number!');
    else {
        outer: while (onOff === 1) {
            secondNum = prompt('Enter second number');
            if (secondNum === null) onOff = 0;
            else if (secondNum.trim() === '') alert('Empty string, enter a number or click cancel!');
            else if (isNaN(+secondNum)) alert('You entered not a number!');
            else {
                while (onOff === 1) {
                    let sign = prompt('Enter a math. operator');
                    if (sign === '+') {
                        alert(`${+firstNum + +secondNum}`);
                    }
                    else if (sign === '-') {
                        alert(`${+firstNum - +secondNum}`);
                    }
                    else if (sign === '*') {
                        alert(`${+firstNum * +secondNum}`);
                    }
                    else if (sign === '/') {
                        alert(`${+firstNum / +secondNum}`);
                    }
                    let oneMoreTime = confirm('Do you want calc one more time?');
                    if (oneMoreTime) break outer;
                    else onOff = 0;
                }
            }
        }
    }
}

//7 Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612)

let num = prompt('Enter a number');
if (num === null) alert('Canceled');
else if (num.trim() === '') alert('Empty string, enter a number!');
else if (isNaN(+num)) alert('You entered not a number!');
else {
    let shift = prompt('Enter a shift');
    if (shift === null) alert('Canceled');
    else if (shift.trim() === '') alert('Empty string, enter a shift!');
    else if (isNaN(+shift)) alert('You entered not a number!');
    else {
        let newNum = num.slice(shift) + num.slice(0, shift);
        alert(newNum);
    }
}

//8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK

let answer = 1;
let i = 1;
alert('Here we go!')
do {
    switch (i) {
        case 1:
            alert('Monday');
            answer = confirm('Do you want see the next day?');
            if (!answer) break;
        case 2:
            alert('Tuesday');
            answer = confirm('Do you want see the next day?');
            if (!answer) break;
        case 3:
            alert('Wednesday');
            answer = confirm('Do you want see the next day?');
            if (!answer) break;
        case 4:
            alert('Thursday');
            answer = confirm('Do you want see the next day?');
            if (!answer) break;
        case 5:
            alert('Friday');
            answer = confirm('Do you want see the next day?');
            if (!answer) break;
        case 6:
            alert('Saturday');
            answer = confirm('Do you want see the next day?');
            if (!answer) break;
        case 7:
            alert('Sunday');
            answer = confirm('Do you want see the next day?');
            if (!answer) break;
    }
} while (answer);

// 9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10

for (let firstNum = 2; firstNum <= 9; firstNum++) {
    for (let secondNum = 1; secondNum <= 10; secondNum++) {
        console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
    }
}

// 10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал,
//  что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N

let a = 1;
let b = 100;
let onOff = 1;
while (onOff) {
    let c = confirm(`Your number is  - ${Math.round((a + b) / 2)}?`);
    if (c) {
        alert(`Got it! Your number is - ${Math.round((a + b) / 2)}!`);
        onOff = 0;
    } else {
        c = confirm(`Your number is "<" ${Math.round((a + b) / 2)}?`);
        if (c) b = Math.round((a + b) / 2);
        else {
            c = confirm(`Your number is ">" ${Math.round((a + b) / 2)}?`);
            if (c) a = Math.round((a + b) / 2);
            else {
                alert("You are wrong..");
                onOff = 0;
            }
        }
    }
}

// 11 Посчитать факториал введенного пользователем числа
let fac = 1;
let num = prompt('Enter a number for factorial');
if (num === null) alert('Canceled');
else if (num.trim() === '') alert('Empty string, enter a number!');
else if (isNaN(+num)) alert('You entered not a number!');
else {
    for (let i = 1; i <= +num; i++) {
        fac = fac * i;
        console.log(fac);
    }
}
