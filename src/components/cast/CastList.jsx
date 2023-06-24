const CastList = ({ character, name, profile_path }) => {
  const nullPhoto = <div></div>;

  return (
    <li>
      {profile_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt={name}
          width={150}
        ></img>
      ) : (
        nullPhoto
      )}
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastList;
