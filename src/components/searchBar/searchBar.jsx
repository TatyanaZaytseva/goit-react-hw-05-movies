import { useState } from 'react';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import css from 'components/searchBar/searchBar.modules.css';

export function SearchBar({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (movieName.trim() === '') {
      toast.error('Введіть назву у пошуку');
      return;
    }

    onSubmit(movieName);
    setMovieName('');
  };

  const handleInputChange = event => {
    setMovieName(event.currentTarget.value.toLowerCase());
  };

  return (
    <main className={css.searchbar}>
      <Toaster />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleInputChange}
          value={movieName}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </main>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
