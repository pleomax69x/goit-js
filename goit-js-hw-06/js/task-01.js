"use strict";
import users from "./users.js";

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = (users) => {
  const names = users.map(function (user) {
    return user.name;
  });
  return names;
  // ИЛИ
  // const names = users.map(user => user.name);
  // return names;
};
console.group("task-01");
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.groupEnd();

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const colorFind = users.filter(function (user) {
    return color === user.eyeColor;
  });
  return colorFind;

  // ИЛИ
  // const colorFind = users.filter((user) => user.eyeColor === color);
  // return colorFind;
};

console.group("task-02");
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.groupEnd();

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // const namesByGender = users
  // .filter(function(user){
  //   return user.gender === gender;
  // })
  // .map(function (user) {
  //   return user.name;
  // });
  //  return namesByGender;

  // ИЛИ
  const namesByGender = users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
  return namesByGender;
};

console.group("task-03");
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.groupEnd();

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) => {
  const notActivePlayer = users.filter((user) => !user.isActive);
  return notActivePlayer;
};
console.group("task-04");
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.groupEnd();

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const userByMail = users.find((user) => user.email === email);
  return userByMail;
};
console.group("task-05");
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
console.groupEnd();

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  const userByAge = users.filter((user) => user.age > min && user.age < max);
  return userByAge;
};
console.group("task-06");
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
console.groupEnd();

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  const total = users.reduce((bal, user) => bal + user.balance, 0);
  return total;
};

console.group("task-07");
console.log(calculateTotalBalance(users)); // 20916
console.groupEnd();

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const mutualFriend = users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
  return mutualFriend;
};
console.group("task-08");
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
console.groupEnd();

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
console.group("task-09");
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.groupEnd();

// Задание 10
// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  
  const allSkills = users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, []);
  
  const clearArr = allSkills.reduce((acc, skil) => {

    acc.includes(skil) ? acc : acc.push(skil);

    return acc;
  }, []);

  clearArr.sort();

  return clearArr;
};
console.group("task-10");
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
console.groupEnd();
