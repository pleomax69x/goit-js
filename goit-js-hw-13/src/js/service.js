

const apiKey = '18836108-b754cab046c957f0572c5e4ce';

 

export default {

fetchArticle(searchQuery, page =1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
  return (
    fetch(url)
      .then(response => response.json())
      .then(data => data.hits)
    //   .then(data => console.log(data))
      // .then(({ hits }) => articleMarkup(hits))
      .catch(error => console.log(error))
  );
}





};
