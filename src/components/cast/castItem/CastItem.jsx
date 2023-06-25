import Holder from 'components/helpers/holder';
import { ItemCast, ItemText } from './CastItem.styled';

const CastItem = ({ character, name, profile_path }) => {
  return (
    <ItemCast>
      {profile_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt={name}
          width={120}
        ></img>
      ) : (
        <Holder width={120} height={180} />
      )}
      <ItemText>Name: {name}</ItemText>
      <ItemText>Character: {character}</ItemText>
    </ItemCast>
  );
};

export default CastItem;
