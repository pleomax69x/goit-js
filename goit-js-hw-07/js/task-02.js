'use strict';

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const createCart = product => {
 const itemRef = document.createElement("li");
 itemRef.textContent = product; 
 return itemRef;
}

const productCart = ingredients.map(product => createCart(product));


listRef.append(...productCart);


// ========================================= Вариант 2 через fragment


// const listRef = document.querySelector("#ingredients");

// const fragment = document.createDocumentFragment("ul");

// ingredients.forEach((ingredient) => {
//   const itemRef = document.createElement("li");
//   itemRef.textContent = ingredient;
//   fragment.appendChild(itemRef);
// });

// listRef.appendChild(fragment);