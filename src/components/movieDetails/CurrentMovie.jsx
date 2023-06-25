import { Wrapper, TitleFilm, Text, TitleText } from './CurrentMovie.styled';
import GeneresList from './generesList/GeneresList';
import Holder from 'components/helpers/holder';
import LinkDetails from './linkDetails/LinkDetails';
import Loader from 'components/loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const CurrentMovie = ({ movie }) => {
  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  const percentage = (vote_average * 10).toFixed();
  const date = release_date?.slice(0, 4);

  return (
    <Wrapper>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          width={300}
          height={450}
        ></img>
      ) : (
        <Holder width={300} height={450} />
      )}
      <div>
        <TitleFilm>
          {title ? title : 'Loading...'}
          <span>{release_date ? `(${date})` : ''}</span>
        </TitleFilm>
        <Text>
          User score: {vote_average ? `${percentage}%` : 'Loading...'}
        </Text>
        <TitleText>Overview</TitleText>
        <Text>{overview ? overview : 'Loading...'}</Text>
        <TitleText>Genres</TitleText>
        <GeneresList genres={genres} />
        <LinkDetails />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Wrapper>
  );
};

export default CurrentMovie;
