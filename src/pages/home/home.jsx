import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { getPopularFilms } from 'API/getPopularFilms';

export function Home() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularFilms()
      .then(setFilms)
      .catch(e => console.log(e.massage));
  }, []);

  return (
    films.length && (
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

        {/* {films.map(film => {
            return (
              <li key={film.id}>
                <NavLink to={film.title}>{film.title}</NavLink>
              </li>
            );
          })} */}
      </main>
    )
  );
}
