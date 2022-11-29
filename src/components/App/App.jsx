import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Homee/Home'));
const Movies = lazy(() => import('pages/Moviess/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetaill/MovieDetail'));
const Cast = lazy(() => import('components/Castt/Cast'));
const Reviews = lazy(() => import('components/Reviewss/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
