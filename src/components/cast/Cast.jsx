import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoFilm } from 'components/helpers/filmApi';
import CastItem from './castItem/CastItem';
import Loader from 'components/loader/Loader';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import constMessage from 'components/helpers/constMessage';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [castFilm, setCastFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const abortCtrl = new AbortController();

    async function getCast() {
      try {
        setIsLoading(true);
        const { cast } = await getInfoFilm(movieId, 'credits', abortCtrl);

        if (!cast.length) {
          setError(constMessage.errorCast);
          return;
        }

        setCastFilm([...cast]);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(constMessage.errorFetch);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getCast();

    return () => {
      abortCtrl.abort();
    };
  }, [movieId]);

  return (
    <>
      {isError !== null && <ErrorMessage>{isError}</ErrorMessage>}
      {isLoading && <Loader />}
      {castFilm && (
        <CastList>
          {castFilm.map(({ id, name, character, profile_path }) => {
            return (
              <CastItem
                key={id}
                profile_path={profile_path}
                name={name}
                character={character}
              />
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
