
import { LinkList, Link } from './LinkDetails.styled';

const LinkDetails = () => {
  return (
    <>
      <LinkList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </LinkList>
    </>
  );
};

export default LinkDetails;
