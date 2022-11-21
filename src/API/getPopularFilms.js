import axios from 'axios';
const API_KEY = '654aa329bf365d27f0b15ad93f11ced2';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularFilms() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

  const response = await axios.get(url);
  const data = await response.data;
  const filmsList = await data.results;
  return filmsList;
}
