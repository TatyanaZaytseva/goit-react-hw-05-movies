import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <main>
      <div>
        <Link to="home">Go back</Link>
        <img src="" alt=""></img>
        <h1>MovieName</h1>
        <p>User Score:</p>
        <h2>Ovierview</h2>
        <p>Опис</p>
        <h3>Genres</h3>
        <p>Жанри</p>
      </div>
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
