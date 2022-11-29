import axios from 'axios';
const API_KEY = '654aa329bf365d27f0b15ad93f11ced2';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMovieCredits(movieId) {
  let url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

  const response = await axios.get(url);
  const data = await response.data;
  const cast = await data.cast;
  return cast;
}
