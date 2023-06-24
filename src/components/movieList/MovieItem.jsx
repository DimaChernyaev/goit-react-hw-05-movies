import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ id, title }) => {
  const location = useLocation();
  console.log(location);

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;
