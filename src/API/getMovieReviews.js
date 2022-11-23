import axios from 'axios';
const API_KEY = '654aa329bf365d27f0b15ad93f11ced2';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMovieReviews(movieId) {
  let url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;

  const response = await axios.get(url);
  const data = await response.data;
  const movieReviews = await data.results;
  return movieReviews;
}
