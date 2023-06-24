import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { getCurrentFilms } from 'components/helpers/filmApi';
import CurrentMovie from 'components/movieDetails/CurrentMovie';

const MovieDetails = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  console.log(backLink);

  useEffect(() => {
    async function getFilm() {
      const film = await getCurrentFilms(movieId);
      setCurrentFilm({ ...film });
    }

    getFilm();
  }, [movieId]);

  return (
    <>
      <Link to={backLink.current}>Back</Link>
      <CurrentMovie movie={currentFilm} />
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
