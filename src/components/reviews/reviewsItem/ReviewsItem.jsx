import { Item, Author } from './ReviewsItem.styled';

const ReviewsItem = ({ author, content }) => {
  return (
    <Item>
      <Author>Author: {author}</Author>
      <p>{content}</p>
    </Item>
  );
};

export default ReviewsItem;
