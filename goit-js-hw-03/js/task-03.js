"use strict";

const findBestEmployee = function (employees) {
  // твой код

  const keys = Object.keys(employees);

  let bestEmployee = keys[0];

  for (const key of keys) {
    if (employees[bestEmployee] < employees[key]) {
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
