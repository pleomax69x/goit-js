"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const USER_PASSWORD = prompt("Введите пароль");

if (USER_PASSWORD === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (ADMIN_PASSWORD === USER_PASSWORD) {
  message = "Добро пожаловать!";
  console.log(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  console.log(message);
}
