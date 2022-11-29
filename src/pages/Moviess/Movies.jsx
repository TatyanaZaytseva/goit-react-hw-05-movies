import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { searchMovies } from 'apii/searchMovies';
import { SearchBar } from 'components/SearchBar/SearchBar';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const handleFormSubmit = q => {
    setSearchParams({ query: q });
  };

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then(setMovies)
        .catch(error => console.error(error));
    }
  }, [query]);

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

export default Movies;
