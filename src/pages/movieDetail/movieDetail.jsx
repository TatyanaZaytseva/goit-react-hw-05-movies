import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';

import { getMovieDetails } from 'API/getMovieDetails';
import { BackLink } from 'components/BackLink/BackLink';
import {
  Container,
  BackLinkBox,
  MovieCard,
  MovieInfo,
  AdditionalInfo,
} from 'pages/movieDetail/movieDetail.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
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
    <Container>
      <BackLinkBox>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </BackLinkBox>
      {error && <div>ERROR!</div>}
      {movieDetails && (
        <MovieCard>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt=""
          ></img>
          <MovieInfo>
            <h1>{movieDetails.title}</h1>
            <p>User Score: {Math.floor(movieDetails.vote_average * 10)}%</p>
            <h2>Ovierview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{getGenres()}</p>
          </MovieInfo>
        </MovieCard>
      )}
      <AdditionalInfo>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
