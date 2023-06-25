import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getCurrentFilms } from 'components/helpers/filmApi';
import CurrentMovie from 'components/movieDetails/CurrentMovie';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import constMessage from 'components/helpers/constMessage';
import {
  Section,
  ButtonBack,
} from 'components/movieDetails/CurrentMovie.styled';
import { BiSolidDoorOpen } from 'react-icons/bi';
import Loader from 'components/loader/Loader';


const MovieDetails = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const abortCtrl = new AbortController();
    setCurrentFilm({});
    setIsLoading(true);

    async function getFilm() {
      try {
        const film = await getCurrentFilms(movieId, abortCtrl);

        if (film === {}) {
          setError(constMessage.errorFetch);
          return;
        }

        setCurrentFilm({ ...film });
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(constMessage.errorFetch);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getFilm();

    return () => {
      abortCtrl.abort();
    };
  }, [movieId]);

  console.log(isLoading);

  return (
    <>
      {isError !== null && <ErrorMessage>{isError}</ErrorMessage>}
      {isLoading && <Loader />}
      {currentFilm && (
        <Section>
          <ButtonBack to={backLink.current}>
            <BiSolidDoorOpen size={20} /> Go back
          </ButtonBack>
          <CurrentMovie movie={currentFilm} to={backLink.current} />
        </Section>
      )}
    </>
  );
};

export default MovieDetails;
