import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'pages/home/home';
import { Movies } from 'pages/movies/movies';
import { MovieDetails } from 'pages/movieDetail/movieDetail';
import { Cast } from 'components/cast/cast';
import { Reviews } from 'components/reviews/reviews';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
