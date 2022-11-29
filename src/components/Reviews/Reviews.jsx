import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'api/getMovieReviews';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
}
export default Reviews;
