import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoFilm } from 'components/helpers/filmApi';
import CastList from './CastList';

const Cast = () => {
  const [castFilm, setCastFilm] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
        const { cast } = await getInfoFilm(movieId, 'credits');

    setCastFilm([...cast]);
    }

    getCast();
  }, [movieId]);

  return (
      <ul>
        {castFilm.map(({ id, name, character, profile_path }) => {
          return (
            <CastList
            key={id}
            profile_path={profile_path}
            name={name}
            character={character}
          />
          )})}
      </ul>
  );
};

export default Cast;
