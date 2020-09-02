"use strict";

let input;
let total = 0;

do {
  input = prompt("Введите число.");

  if (input === null) {
    break;
  }
  input = Number(input);

  const notANumber = Number.isNaN(input);
  if (notANumber) {
      console.log(notANumber);
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  console.log(notANumber);
  total += input;
} while (true);

console.log(total);

alert(`Общая сумма чисел равна ${total}`);
