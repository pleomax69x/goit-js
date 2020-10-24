import './styles.css';
import fetchArticle from './js/fetch-article';
import articleMarkup from './js/article-markup';

const searchRef = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');

let searchQuery = '';
let page = 1;

searchRef.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  searchQuery = form.elements.query.value;
  console.log(event.currentTarget.elements.query.value);

  galleryRef.innerHTML = '';
  form.reset();
  page = 1;

  fetchArticle(searchQuery, page).then(hits => {
    articleMarkup(hits);
    page += 1;
  });
});

const loadMoreBtn = document.querySelector('.load');

loadMoreBtn.addEventListener('click', () => {
  fetchArticle(searchQuery, page).then(hits => {
    articleMarkup(hits);
    page += 1;
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
