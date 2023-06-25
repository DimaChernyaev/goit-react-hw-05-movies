import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchFilm } from 'components/helpers/filmApi';
import MovieList from 'components/movieList/MovieList';
import Loader from 'components/loader/Loader';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import constMessage from 'components/helpers/constMessage';
import MoviesForm from 'components/moviesForm/MoviesForm';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  function handleSubmitSearchQuery({ searchMovie }) {
    if (searchMovie === '') {
      setError(constMessage.emptyLine);
      setSearchResult([]);
      return setSearchQuery({});
    }

    setSearchQuery({ query: searchMovie });
  }

  useEffect(() => {
    if (query === '') return;
    setSearchResult([]);
    const abortCtrl = new AbortController();

    async function searchFilm() {
      setIsLoading(true);
      try {
        const { results } = await getSearchFilm(query, abortCtrl);

        if (!results.length) {
          setError(constMessage.errorFetch);
          return;
        }

        setSearchResult([...results]);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(constMessage.errorFetch);
        }
      } finally {
        setIsLoading(false);
      }
    }

    searchFilm();

    return () => {
      abortCtrl.abort();
    };
  }, [query]);

  return (
    <section>
      <MoviesForm onSubmitForm={handleSubmitSearchQuery} />

      {isError !== null && <ErrorMessage>{isError}</ErrorMessage>}
      {isLoading && <Loader />}
      {searchResult && <MovieList films={searchResult} />}
    </section>
  );
};

export default Movies;
