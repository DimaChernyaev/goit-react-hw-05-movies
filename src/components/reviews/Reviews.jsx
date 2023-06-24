import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoFilm } from 'components/helpers/filmApi';

const Reviews = () => {
  const [reviewsFilm, setreviewsFilm] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const { results } = await getInfoFilm(movieId, 'reviews');

      setreviewsFilm([...results]);
    }

    getCast();
  }, [movieId]);

  console.log(reviewsFilm);

  return (
    <ul>
      {reviewsFilm.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
