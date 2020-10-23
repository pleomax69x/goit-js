import listTmp from '../template/list.hbs';
import country from '../template/country.hbs';
const templateRef = document.querySelector('.js-template');


function countryMarkup(data){
    console.log(data);

    if (data.length > 10) {
      console.log(data);
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
    }
}

export default countryMarkup;