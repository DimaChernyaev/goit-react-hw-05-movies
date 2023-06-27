import { Wrapper, TitleFilm, Text, TitleText } from './CurrentMovie.styled';
import GeneresList from './generesList/GeneresList';
import Holder from 'components/helpers/holder';
import LinkDetails from './linkDetails/LinkDetails';
import Loader from 'components/loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SkeletonLoader from 'components/loader/SkeletonLoader';
import constEmpty from 'components/helpers/constEmpty';

const CurrentMovie = ({ movie }) => {
  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  const percentage = vote_average ? (vote_average * 10).toFixed() : '0';
  const date = release_date ? release_date.slice(0, 4) : "it's a secret";

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
      {title ? (
        <div>
          <TitleFilm>
            {title}
            <span>{`(${date})`}</span>
          </TitleFilm>
          <Text>User score: {`${percentage}%`}</Text>
          <TitleText>Overview</TitleText>
          <Text>{overview ? overview : constEmpty.emptyOverview}</Text>
          <TitleText>Genres</TitleText>
          <GeneresList genres={genres} />
          <LinkDetails />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </Wrapper>
  );
};

export default CurrentMovie;
