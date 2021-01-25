import './styles.css';
import fetchArticle from './js/fetch-article';
import articleMarkup from './js/article-markup';

const searchRef = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load');
const pixabay = document.querySelector('footer');

let searchQuery = '';
let page = 1;

searchRef.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  searchQuery = form.elements.query.value;

  galleryRef.innerHTML = '';
  form.reset();
  page = 1;

  fetchArticle(searchQuery, page).then(hits => {
    articleMarkup(hits);
    page += 1;
  });

  loadMoreBtn.style.display = 'block';
  pixabay.style.display = 'flex';
});

loadMoreBtn.addEventListener('click', () => {
  fetchArticle(searchQuery, page).then(hits => {
    articleMarkup(hits);
    page += 1;

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });

    if (hits.length < 12) {
      loadMoreBtn.style.display = 'none';
    }
  });
});
