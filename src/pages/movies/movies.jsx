import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import css from 'pages/movies/movies.modules.css';
import { useEffect } from 'react';
import { searchMovies } from 'API/searchMovies';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/searchBar/searchBar';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then(console.log(query))
        .then(setMovies)
        .catch(error => console.error(error));
    }
  }, [query]);

  const handleFormSubmit = q => {
    setSearchParams({ query: q });
  };

  return (
    <main>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
