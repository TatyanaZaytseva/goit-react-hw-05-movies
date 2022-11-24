import axios from 'axios';
const API_KEY = '654aa329bf365d27f0b15ad93f11ced2';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovies(query) {
  let url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const response = await axios.get(url);
  const data = await response.data;
  const movie = await data.results;
  return movie;
}
