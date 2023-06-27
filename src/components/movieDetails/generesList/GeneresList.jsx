import { GenresList, GenresItem, TextEmpty } from './GeneresList.styled';
import constEmpty from 'components/helpers/constEmpty';

const GeneresList = ({ genres }) => {
  return (
    <GenresList>
      {genres.length ? (
        genres.map(({ id, name }) => (
          <GenresItem key={id}>
            <p>{name}</p>
          </GenresItem>
        ))
      ) : (
        <TextEmpty>{constEmpty.emptyGenres}</TextEmpty>
      )}
    </GenresList>
  );
};

export default GeneresList;
