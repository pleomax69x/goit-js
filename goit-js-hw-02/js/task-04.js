"use strict";

const formatString = function (string) {
  // твой код

  let newLine = string;
  const chars = string.split("");  

  if (chars.length > 40) {
    const deleteCount = chars.length - 40;
    const deletedChars = chars.splice(40, deleteCount, "...");
    newLine = chars.join("");
  }  

  // ИЛИ

  // if (chars.length > 40) {
  //   const newArray = chars.slice(0, 40);
  //   newArray.push("...");
  //   newLine = newArray.join("");
  // }

  console.log(newLine.length);
  return newLine;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
