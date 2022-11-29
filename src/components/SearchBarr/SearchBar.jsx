import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import {
  Container,
  Input,
  Form,
  Button,
} from 'components/SearchBarr/SearchBar.styled';

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
    <Container>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleInputChange}
          value={movieName}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
}
