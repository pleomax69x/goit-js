import cardGallery from '../template/card-gallery.hbs';

const galleryRef = document.querySelector('.gallery');

function articleMarkup(data) {
  const markup = cardGallery(data);
  galleryRef.insertAdjacentHTML('beforeend', markup);
}

export default articleMarkup;
