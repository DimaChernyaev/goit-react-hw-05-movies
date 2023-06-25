import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoFilm } from 'components/helpers/filmApi';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import constMessage from 'components/helpers/constMessage';
import Loader from 'components/loader/Loader';
import ReviewsItem from './reviewsItem/ReviewsItem';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviewsFilm, setReviewsFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const abortCtrl = new AbortController();

    async function getCast() {
      setIsLoading(true);

      try {
        const { results } = await getInfoFilm(movieId, 'reviews', abortCtrl);

        if (!results.length) {
          setError(constMessage.errorRewievs);
          return;
        }

        setReviewsFilm([...results]);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(constMessage.errorFetch);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getCast();

    return () => {
      abortCtrl.abort();
    };
  }, [movieId]);

  return (
    <>
      {isError !== null && <ErrorMessage>{isError}</ErrorMessage>}
      {isLoading && <Loader />}
      {reviewsFilm && (
        <ReviewsList>
          {reviewsFilm.map(({ id, author, content }) => {
            return <ReviewsItem key={id} author={author} content={content} />;
          })}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
