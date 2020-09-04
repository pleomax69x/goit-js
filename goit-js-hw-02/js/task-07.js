"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  const isValid = login.length > 3 && login.length < 16;
  return isValid;
};

const isLoginUnique = function (allLogins, login) {
  const isUnique = allLogins.includes(login);
  return isUnique;
};


const addLogin = function (allLogins, login) {
  let message;

  if (!isLoginValid(login)) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(allLogins, login)) {
    message = "Такой логин уже используется!";
  } else {
    allLogins.push(login);
    message = "Логин успешно добавлен!";
  }
  return message;
};


// ниже с использованием Guard Clause

// const addLogin = function (allLogins, login) {
//   let message = "Логин успешно добавлен!";

//   if (!isLoginValid(login)) {
//     message = "Ошибка! Логин должен быть от 4 до 16 символов";
//     return message;
//   } 
  
//   if (isLoginUnique(allLogins, login)) {
//     message = "Такой логин уже используется!";
//     return message;
//   } 
    
//     allLogins.push(login);    
  
//   return message;
// };


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);


