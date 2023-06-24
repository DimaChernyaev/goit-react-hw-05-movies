import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchFilm } from 'components/helpers/filmApi';
import MovieList from 'components/movieList/MovieList';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  function handleSubmitSearchQuery(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.elements.saerchValue.value === '') {
      return setSearchQuery({});
    }

    setSearchQuery({ query: form.elements.saerchValue.value });
    form.reset();
  }

  useEffect(() => {
    if (query === '') return;

    async function searchFilm() {
      const { results } = await getSearchFilm(query);

      setSearchResult([...results]);
    }

    searchFilm();
  }, [query]);

  return (
    <section>
      <form onSubmit={handleSubmitSearchQuery}>
        <label>
          <input type="text" name="saerchValue"></input>
          <button type="submit">Search</button>
        </label>
      </form>

      <MovieList films={searchResult} />
    </section>
  );
};

export default Movies;
