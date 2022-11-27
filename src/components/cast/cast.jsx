import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'API/getMovieCredits';
import {
  Container,
  Card,
  Item,
  Name,
  Photo,
} from 'components/Cast/Cast.styled';

function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setMovieCast(data))
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <Container>
      {movieCast.length > 0 && (
        <Card>
          {movieCast.map(actor => (
            <Item key={actor.id}>
              <Name>{actor.name}</Name>
              <Photo
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt=""
              />
            </Item>
          ))}
        </Card>
      )}
    </Container>
  );
}

export default Cast;
