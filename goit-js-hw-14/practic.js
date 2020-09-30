'use strict';

let hobby = "Рыбалка";

console.log(hobby);

hobby = "Шашки";

console.log(hobby);



let number = prompt('Input number');
number = Number(number);
let power = prompt('Input power');
power = Number(power);

const result = Math.pow(number, power);
console.log(result);




Array.prototype.forEach();
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(element, index, arr){
    console.log(element);
});


Array.prototype.map();
const numbers = [1, 2, 3, 4, 5];
const mapNumber = numbers.map(function(element, index, arr){
return element;
});

const names = users.map(user => user.name);


Array.prototype.filter();
// возвращает массив всех найденных элементов, не нашел вернет пустой массив
const numbers = [1, 2, 3, 4, 5];
const filterNumber = numbers.filter(function(element, index, arr){
return element > 3;
});
console.log(filterNumber);


Array.prototype.find();  
// до первого совпадения, не нашел вернет undefined
const numbers = [1, 2, 3, 4, 5];
const number = numbers.find(function(n){
    return n===5;
});


Array.prototype.every();
const playerOnline = players.every(function(player){
    return player.online;
});

Array.prototype.some();
const playerOnline = players.some(function(player){
    return player.online;
});


Array.prototype.reduce();
const numbers = [1, 2, 3, 4, 5];
const total = number.reduce(function(accumulator, element, index, array){

    return accumulator + element;
}, 0);

Array.prototype.sort();
const numbers = [1, 2, 3, 4, 5];
numbers.sort();

numbers.sort(function(a, b){
    return a-b;
});

// сделать копию массива
// const copy = numbers.slice();
const copy = [...numbers];


const containerRef = document.createElement('div');
containerRef.classList.add('product-card');

const titleRef = document.createElement('h2');
titleRef.textContent = product.name;
titleRef.classList.add('product-card__name');
console.log(titleRef);

const descRef = document.createElement('p');
descRef.textContent = procuct.description;
console.log(descRef);

const priceRef = document.createElement('p');
priceRef.textContent = `Цена: ${procuct.price} кредитов`;
console.log(priceRef);

containerRef.appendChild(titleRef);
containerRef.appendChild(descRef);
containerRef.appendChild(priceRef);

// containerRef.append(titleRef, descRef, priceRef);

console.log(containerRef);

// создаем переменную , и добавляем всавку
const cardRootRef = document.querySelector('root');
cardRootRef.appendChild(containerRef);


// const parentDiv = document.createElement('div');
// parentDiv.appendChild(containerRef);

console.log(parentDiv);

//  ===================================================== ФУНКЦИИ

const add = function(a, b, c) {
    return a + b + c;
  };


  function add(a, b, c) {
    return a + b + c;
  };

//   стрелка с параметрами
  const add = (a, b) => {
      return a +b;
  };
//  с одним параметром
  const logMessage = message => {
console.log();
  };

// без параметров

const greet = () => {
    console.log();
}
// =========================================================== ФУНКЦИИ END



const product = {
    name: 'privodu',
    description: 'lorem20',
    price: 3000,
    available: true,
};

const containerRef = document.createElement('div');
containerRef.classList.add('product-card');

const titleRef = document.createElement('h2');
titleRef.textContent = product.name;
titleRef.classList.add('product-card__name');
console.log(titleRef);

const descRef = document.createElement('p');
descRef.textContent = product.description;
console.log(descRef);

const priceRef = document.createElement('p');
priceRef.textContent = `Цена: ${product.price} кредитов`;
console.log(priceRef);

containerRef.appendChild(titleRef);
containerRef.appendChild(descRef);
containerRef.appendChild(priceRef);

containerRef.append(titleRef, descRef, priceRef);

console.log(containerRef);

// создаем переменную , и добавляем всавку
const cardRootRef = document.querySelector('#root');
cardRootRef.appendChild(containerRef);


// const parentDiv = document.createElement('div');
// parentDiv.appendChild(containerRef);

// console.log(parentDiv);
