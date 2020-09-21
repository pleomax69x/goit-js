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