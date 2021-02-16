//Task 1
let buttonTask1 = document.getElementById("button_task_1");

let countTask1 = function () {
    let divTask1 = document.getElementById("div_task_1");
    let count = +divTask1.innerHTML;
    count += 1;
    divTask1.innerHTML = count;
};
buttonTask1.addEventListener("click", countTask1);

//Task 2
let buttonTask2_1 = document.getElementById("button_task_2_1");
let countTask2_1 = function () {
    let divTask2 = document.getElementById("div_task_2");
    let count = +divTask2.innerHTML;
    count += 1;
    divTask2.innerHTML = count;
};
buttonTask2_1.addEventListener("click", countTask2_1);

let buttonTask2_2 = document.getElementById("button_task_2_2");
let countTask2_2 = function () {
    let divTask2 = document.getElementById("div_task_2");
    let count = +divTask2.innerHTML;
    count -= 1;
    divTask2.innerHTML = count;
};
buttonTask2_2.addEventListener("click", countTask2_2);

//Task 3
let buttonTask3 = document.getElementById("button_task_3");

let addListItem = function (value) {
    let inputTask3 = document.getElementById("input_text_task_3");
    valueInput = inputTask3.value;
    inputTask3.value = "";
    let divToDo = document.getElementById("div_todo");
    if (valueInput !== "") {
        if (!document.querySelector("ul")) {
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            li.innerHTML = valueInput;
            divToDo.appendChild(ul);
            ul.append(li);
        } else {
            let ul = document.querySelector("ul");
            let li = document.createElement("li");
            li.innerHTML = valueInput;
            ul.appendChild(li);
        }
    }
};
buttonTask3.addEventListener("click", addListItem);

//Task 4
let buttonTask4 = document.getElementById('button_task_4');

let calcNumbers = function() {
	let inputTask4_1 = document.getElementById('input_number_task_4_1');
	let inputTask4_sign = document.getElementById('input_text_task_4');
	let inputTask4_2 = document.getElementById('input_number_task_4_2');
	let divAnswer = document.getElementById('div_calc_answer');
	valueFirst = +inputTask4_1.value;
	valueSecond = +inputTask4_2.value;
	sign = inputTask4_sign.value.trim();
	if ((sign !== '+') && (sign !== '-') && (sign !== '*') && (sign !== '/')) {
		divAnswer.classList.remove('green_circle');
		divAnswer.classList.add('red_circle');
		divAnswer.innerHTML = '';
	} else {
		divAnswer.classList.remove('red_circle');
		divAnswer.classList.add('green_circle');
		let answ;
		if (sign === '+') answ = valueFirst + valueSecond;
		else if (sign === '-') answ = valueFirst - valueSecond;
		else if (sign === '*') answ = valueFirst * valueSecond;
		else answ = (valueFirst / valueSecond).toFixed(4);
		if (isNaN(answ)) answ = '';
		divAnswer.innerHTML = answ;
	}
}

buttonTask4.addEventListener('click', calcNumbers);
