import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPopularFilms } from 'api/getPopularFilms';

function Home() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularFilms()
      .then(setFilms)
      .catch(e => console.log(e.massage));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {films.length > 0 && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Home;
