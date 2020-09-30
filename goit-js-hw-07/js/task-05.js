'use strict';

const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
    nameLabelRef.textContent = event.target.value;
    if (event.target.value.length === 0){
        nameLabelRef.textContent = 'незнакомец';
    }        
});