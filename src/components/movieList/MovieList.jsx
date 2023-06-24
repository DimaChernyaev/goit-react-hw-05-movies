import MovieItem from './MovieItem';

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title }) => (
        <MovieItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
};

export default MovieList;
