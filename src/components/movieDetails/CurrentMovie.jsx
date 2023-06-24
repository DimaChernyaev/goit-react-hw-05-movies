const CurrentMovie = ({ movie }) => {
  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
      ></img>
      <div>
        <h2>
          {title} <span>{`(${release_date?.slice(0, 4)})`}</span>
        </h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CurrentMovie;
