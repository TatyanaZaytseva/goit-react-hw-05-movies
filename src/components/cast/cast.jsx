import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'API/getMovieCredits';

export function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  //   const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setMovieCast(data))
      .catch(error => {
        console.error(error);
        // setError(error);
      });
  }, [movieId]);

  console.log(movieCast);
  return (
    <div>
      {movieCast && (
        <ul>
          {movieCast.map(actor => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt=""
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
