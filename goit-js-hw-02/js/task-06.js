"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число.");

  if (input === null) {
    break;
  }

  const notANumber = Number.isNaN(Number(input));
  if (notANumber) {
    console.log(notANumber);
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(Number(input));
} while (true);

for (const number of numbers) {
  total += number;
}

console.log(total);
alert(`Общая сумма чисел равна ${total}`);
