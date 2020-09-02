"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let message;

const amount = prompt("Введите количечто дроидов для покупки");
const totalPrice = amount * pricePerDroid;

if (amount === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
  console.log(message);
} else {
  credits -= totalPrice;
  message = `Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов.`;
  console.log(message);
}
