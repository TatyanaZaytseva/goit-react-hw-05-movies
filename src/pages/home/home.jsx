import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { getPopularFilms } from 'API/getPopularFilms';

export function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPopularFilms()
      .then(setFilms)
      .catch(e => console.log(e.massage));
  }, []);

  return (
    films.length && (
      <main>
        <h1>Trending today</h1>
        <ul>
          {films.map(film => {
            return (
              <li key={film.id}>
                <Link to={film.title}>{film.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
}
