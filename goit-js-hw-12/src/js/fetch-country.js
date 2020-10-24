function fetchCountry(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return (
    fetch(url)
      .then(response => response.json())
      // .then(data => countryMarkup(data))
      .catch(error => console.log(error))
  );
}

export default fetchCountry;
