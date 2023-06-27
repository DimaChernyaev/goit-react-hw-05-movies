import { useLocation } from 'react-router-dom';
import {
  Item,
  ItemLink,
  MovieTitle,
  WrapperText,
  Text,
  Image,
} from './MovieList.styled';
import Holder from 'components/helpers/holder';
import constEmpty from 'components/helpers/constEmpty';

const MovieItem = ({ id, title, poster_path, overview }) => {
  const location = useLocation();

  return (
    <Item>
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
            width={80}
            height={120}
          />
        ) : (
          <Holder width={80} height={120} />
        )}
        <WrapperText>
          <MovieTitle>{title}</MovieTitle>
          <Text>{overview ? overview : constEmpty.emptyOverview}</Text>
        </WrapperText>
      </ItemLink>
    </Item>
  );
};

export default MovieItem;
