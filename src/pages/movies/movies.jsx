import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { searchMovies } from 'API/searchMovies';
import { SearchBar } from 'components/searchBar/searchBar';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      searchMovies(query)
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

export default Movies;
