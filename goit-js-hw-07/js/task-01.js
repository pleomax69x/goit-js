'use strict';

const list = document.querySelector('#categories');


const categoryArr = Array.from(list.children);
console.log(`В списке ${categoryArr.length} категории.`);


categoryArr.forEach((categoryArr) =>{
    const header = categoryArr.querySelector('h2').textContent;
const headerElements = categoryArr.querySelector('ul').childElementCount;
console.log(`Категория: ${header}, Количество элементов: ${headerElements}`);

})

// =============================================================================================

// console.log(categoryArr);
// console.dir(categoryArr);

// console.log(list);
// console.dir(list);


// const w = listLength[0].querySelector('h2').textContent;
// const e = list.children[0].querySelector('ul').childElementCount;

// console.log(w);
// console.log(e);

// console.log('childNodes ', list.childNodes);
// console.log('children ', list.children[0]);
// console.log('firstChild ', list.firstChild);
// console.log('firstElementChild ', list.firstElementChild);
// console.log('lastChild ', list.lastChild);
// console.log('lastElementChild ', list.lastElementChild);
// console.log('previousSibling ', list.previousSibling);
// console.log('previousElementSibling ', list.previousElementSibling);
// console.log('nextSibling ', list.nextSibling);
// console.log('nextElementSibling  ', list.nextElementSibling );
