"use strict";

const total = 100;
// const ordered = 50;

const ordered = prompt("Введите количество");

if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
