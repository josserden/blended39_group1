import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = `6c934d67464856a6476afafcb7e85695`;

export async function fetchTrendingMovies(page = 1) {
  const response = await axios.get(
    `trending/movie/day?api_key=${KEY}&page=${page}`
  );
  const movies = response.data.results;

  return movies;
}

export async function fetchApiConfig() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/configuration?api_key=${KEY}`
  );
  const config = response;
  console.log(config);
}

export async function fetchMoviesOnQuery(searchQuery, page = 1) {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}&page=${page}`
  );
  const movies = response.data.results;

  return movies;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);

  const movie = await response.data;
  return movie;
}

export async function movieCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);

  const cast = await response.data.cast;

  return cast;
}

export const movieReviews = movieId => {
  return axios
    .get(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(res => res.data.results);
};
