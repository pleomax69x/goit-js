import './styles.css';
import fetchCountry from './js/fetch-country';
import countryMarkup from './js/country-markup';


const debounce = require('lodash.debounce');

const searchRef = document.querySelector('.search');
const templateRef = document.querySelector('.js-template');

searchRef.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(event) {
  const inputValue = event.target.value;
  
  if (inputValue.length === 0) {    
    templateRef.innerHTML = '';
    return
  }

  fetchCountry(inputValue).then(countryMarkup);
}

console.log(searchRef);
