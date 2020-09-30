'use strict';

let counterValue = 0;

const increment = () => {
    counterValue += 1;    
    changeValue();
};

const decrement = () => {
    counterValue -=1;
    changeValue();
};

const ValueRef = document.querySelector('#value');
const incrementRef = document.querySelector('#counter button[data-action="increment"]');
const decrementRef = document.querySelector('#counter button[data-action="decrement"]');

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);


const changeValue = () => ValueRef.textContent = counterValue;
