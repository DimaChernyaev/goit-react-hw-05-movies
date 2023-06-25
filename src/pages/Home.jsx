import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'components/helpers/filmApi';
import MovieList from 'components/movieList/MovieList';
import constMessage from 'components/helpers/constMessage';
import Loader from 'components/loader/Loader';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const Home = () => {
  const [trandingFilms, setTrendingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();

    async function getAllTrandingFilms() {
      setIsLoading(true);
      try {
        const { results } = await getTrendingFilms(abortCtrl);

        if (!results.length) {
          setError(constMessage.errorFetch);
          return;
        }

        setTrendingFilms([...results]);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(constMessage.errorFetch);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getAllTrandingFilms();

    return () => {
      abortCtrl.abort();
    };
  }, []);

  return (
    <>
      {isError !== null && <ErrorMessage>{isError}</ErrorMessage>}
      {isLoading && <Loader />}
      {trandingFilms && <MovieList films={trandingFilms} />}
    </>
  );
};

export default Home;
