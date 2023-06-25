import MovieItem from './MovieItem';
import { List } from './MovieList.styled';

const MovieList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title, poster_path, overview }) => (
        <MovieItem
          key={id}
          id={id}
          title={title}
          poster_path={poster_path}
          overview={overview}
        />
      ))}
    </List>
  );
};

export default MovieList;
