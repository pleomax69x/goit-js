"use strict";

const China = "Китай";
const Chili = "Чили";
const Australia = "Австралия";
const India = "Индия";
const Jamaica = "Ямайка";

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let message;

let country = prompt("Введите страну доставки.");

if (country !== null) {
  switch (country.toLowerCase()) {
    case China.toLowerCase():
      message = `Доставка в ${China} будет стоить ${priceChina} кредитов`;
      console.log(message);
      break;

    case Chili.toLowerCase():
      message = `Доставка в ${Chili} будет стоить ${priceChili} кредитов`;
      console.log(message);
      break;

    case Australia.toLowerCase():
      message = `Доставка в ${Australia} будет стоить ${priceAustralia} кредитов`;
      console.log(message);
      break;

    case India.toLowerCase():
      message = `Доставка в ${India} будет стоить ${priceIndia} кредитов`;
      console.log(message);
      break;

    case Jamaica.toLowerCase():
      message = `Доставка в ${Jamaica} будет стоить ${priceJamaica} кредитов`;
      console.log(message);
      break;

    default:
      message = "В вашей стране доставка не доступна";
      console.log(message);
      alert("В вашей стране доставка не доступна");
      break;
  }
}
