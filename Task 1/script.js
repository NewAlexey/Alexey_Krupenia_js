// 1
let number = +prompt('Введите число: ');
alert('Число во второй степени - ' + number*number);



// 2
let firstNumber = +prompt('Введите первое число: ');
let secondNumber = +prompt('Введите второе число: ');
alert('Среднее арифметическое этих чисел - ' + (firstNumber + secondNumber) /2 );



//3
let squareSide = +prompt("Введите длину стороны квадрата: ");
alert("Площадь квадрата с заданной стороной - " + squareSide * squareSide);



//4
const mile = 0.621371;
let km = +prompt('Введите количество километров: ');
alert('Количество миль в введенных километрах - ' + km * mile);



//5
let firstNumber = +prompt("Введите первое число: ");
let secondNumber = +prompt("Введите второе число: ");
alert(
    "Сумма - " +
        (firstNumber + secondNumber) +
        "\nРазность - " +
        (firstNumber - secondNumber) +
        "\nУмножение - " +
        firstNumber * secondNumber +
        "\nДеление - " +
        firstNumber / secondNumber
);



//6
let a = +prompt("Введите число a: ");
let b = +prompt("Введите число b: ");

//упростил формулу a * x + b = 0
let x = -b / a;

alert('x = ' + x + '\nв формуле a * x + b = 0');



//7
let hours = +prompt('Введите часы (0-23): ');
let min = +prompt('Введите минуты (0-59): ');

hours = 23 - hours;
min = 60 - min;

if (hours === 23) hours = '24';
if (min === 60) min = '00';

alert('Времени до следующего дня - ' + hours + ':' + min);



//8
let number = prompt("Введите трехзначное число: ");
let secondNumber = (Math.trunc(number / 10)) % 10;
alert("Второе число в трехзначном числе - " + secondNumber);

// или

secondNumber = number[1];
alert("Второе число в трехзначном числе - " + secondNumber);



//9
let number = prompt('Введите пятизначное число: ');
let newNumber = number[4] + number.slice(0, 4);
alert('Новое число - ' + newNumber);



//10
const salary = 250;
let sale = +prompt('Сумма продажи:');
let newSalary = 250 + (sale * 0.1);
alert('Зарплата в этом месяце - ' + newSalary);




//////////////////////////////////////////////////////////////////////////////// Вторая часть задач





//1 
let yourName = prompt('Введите ваше имя: ');
alert('Привет, ' + yourName);



//2
const currentYear = 2021;
let year = +prompt('Введите год Вашего рождения:');
let age = currentYear - year - 1;
alert('Скорее всего, Вам ' + (currentYear - year) + ' лет, но может быть и ' + age);



//3
let squareSide = +prompt('Введите сторону квадрата:');
alert('Периметр такого квадрата = ' + squareSide * 4);



//4
let circleRadius = +prompt('Введите радиус окружности:');
alert('Площадь окружности с таким радиусом = ' + (Math.PI * Math.pow(circleRadius, 2)));



//5
let distance = +prompt('Введите расстояние между городами, в км:');
let time = +prompt('Введите время, за которое необходимо добраться, в часах:');
alert('Скорость, с которой необходимо двигаться - ' + (distance / time) + ' км/ч');



//6
const value = 0.82;
let dollars = +prompt('Введите количество долларов:');
alert('Эта же сумма в евро - ' + (dollars * value));



//7 
const file = 0.82;
let flesh = +prompt('Введите емкость флеш-карты, в Гб:');
alert('Количество файлов, которые поместятся на Вашу флешку - ' + Math.trunc((flesh / file)));



//8
let money = +prompt('Сколько у вас денег?');
let chocPrice = +prompt('Цена шоколадки:');
let amounth = Math.trunc(money / chocPrice);
let change = money % chocPrice;
alert('Шоколадок купишь - ' + amounth + ' , а сдачи останется - ' + change);



//9
let number = +prompt('Введите трехзначное число:');
let thirdNumber = number % 10;
let secondNumber = (Math.trunc(number / 10)) % 10;
let firstNumber = Math.trunc(number / 100);
alert(`${thirdNumber}${secondNumber}${firstNumber}`);