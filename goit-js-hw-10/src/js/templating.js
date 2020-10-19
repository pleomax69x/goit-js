import itemTemplate from    '../template/gallery-item.hbs';
import menuItems from   '../menu.json'

const markup = itemTemplate(menuItems);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('afterbegin', markup);