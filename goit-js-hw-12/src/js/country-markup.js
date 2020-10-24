import listTmp from '../template/list.hbs';
import country from '../template/country.hbs';

import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

defaults.delay = 2000;

const templateRef = document.querySelector('.js-template');

function countryMarkup(data) {
  if (data.status === 404) {
    error({
      text: 'Counry not found! Please enter a more specific query!',
    });
    templateRef.innerHTML = '';
    return;
  }
  if (data.length > 10) {
    error({
      text: 'Too mane matches found. Please enter a more specific query!',
    });
    templateRef.innerHTML = '';
    return;
  }
  if (data.length >= 2 && data.length <= 10) {
    const markup = listTmp(data);
    templateRef.innerHTML = markup;
    return;
  }
  if (data.length === 1) {
    const markup = country(data);
    templateRef.innerHTML = markup;
    console.log(data);
  }
}

export default countryMarkup;
