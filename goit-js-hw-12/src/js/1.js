import './styles.css';
import listTmp from './template/list.hbs';
import country from './template/country.hbs';

const debounce = require('lodash.debounce');

const searchRef = document.querySelector('.search');
const templateRef = document.querySelector('.js-template');

searchRef.addEventListener('input', debounce(searchValue, 500));

function searchValue(event) {
  const inputValue = event.target.value;
  

  if (inputValue.length === 0) {
    
    templateRef.innerHTML = '';
        return
  }

  fetchCountry(inputValue);
}



function fetchCountry(searchQuery) {
const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    
  fetch(url)
    .then(response => response.json())
    .then(data => countryMarkup(data))
    .catch(error => console.log(error));
}



console.log(searchRef);


function countryMarkup(data){
    console.log(data);

    if (data.length > 10) {
      console.log(data);
      return;
    }
    if (data.length >= 2 && data.length <= 10) {
      const markup = listTmp(data);
      templateRef.innerHTML = markup;
      console.log(markup);
      return;
    }
    if (data.length === 1) {
      const markup = country(data);
      templateRef.innerHTML = markup;
    }
}