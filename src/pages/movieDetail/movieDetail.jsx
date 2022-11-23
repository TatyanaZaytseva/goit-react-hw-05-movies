import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'API/getMovieDetails';
import { BackLink } from 'components/BackLink';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  //    const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovieDetails(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.error(error);
        setError(error);
      });
  }, [movieId]);

  const getGenres = () => {
    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <main>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </div>
      {error && <div>ERROR!</div>}
      {movieDetails && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt=""
          ></img>
          <h1>{movieDetails.title}</h1>
          <p>User Score: {Math.floor(movieDetails.vote_average * 10)}%</p>
          <h2>Ovierview</h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{getGenres()}</p>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
