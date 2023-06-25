import { GenresList, GenresItem } from './GeneresList.styled';

const GeneresList = ({ genres }) => {
  return (
    <GenresList>
      {genres ? genres.map(({ id, name }) => (
        <GenresItem key={id}>
          <p>{name}</p>
        </GenresItem>
      )) : 'Loading...'}
    </GenresList>
  );
};

export default GeneresList;
