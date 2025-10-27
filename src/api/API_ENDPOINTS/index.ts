import axios from 'axios';
import { BASE_URL } from '../BASE_URL';
import { API_KEY, IMAGE_PATH } from '../API_KEY';
import { ACCESS_TOKEN } from '../ACCESS_TOKEN';

const apiKey = `api_key=${API_KEY}`;

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

// 🟢 Now Playing
export const getNowPlayingMovies = async () => {
  console.log('🎬 Fetching Now Playing Movies...');
  const response = await api.get(`/movie/now_playing?${apiKey}&language=en-US&page=1`);
  console.log('✅ Now Playing Movies Fetched:', response.data.results.length);
  return response.data.results;
};

// 🔥 Popular Movies
export const getPopularMovies = async () => {
  console.log('🎬 Fetching Popular Movies...');
  const response = await api.get(`/movie/popular?${apiKey}&language=en-US&page=1`);
  console.log('✅ Popular Movies Fetched:', response.data.results.length);
  return response.data.results;
};

// ⭐ Top Rated Movies
export const getTopRatedMovies = async () => {
  console.log('🎬 Fetching Top Rated Movies...');
  const response = await api.get(`/movie/top_rated?${apiKey}&language=en-US&page=1`);
  console.log('✅ Top Rated Movies Fetched:', response.data.results.length);
  return response.data.results;
};

// 🚀 Upcoming Movies
export const getUpcomingMovies = async () => {
  console.log('🎬 Fetching Upcoming Movies...');
  const response = await api.get(`/movie/upcoming?${apiKey}&language=en-US&page=1`);
  console.log('✅ Upcoming Movies Fetched:', response.data.results.length);
  return response.data.results;
};

// 🎥 Movie Details
export const getMovieDetails = async (movieId: number) => {
  console.log(`🎬 Fetching details for Movie ID: ${movieId} ...`);
  const response = await api.get(`/movie/${movieId}?${apiKey}&language=en-US`);
  console.log('✅ Movie Details Fetched:', response.data.title);
  return response.data;
};

// 🔍 Search Movies
export const searchMovies = async (keyword: string) => {
  const response = await api.get(`/search/movie?${apiKey}&query=${keyword}`);
  return response.data.results;
};

// 👥 Cast Details
export const movieCastDetails = async (id: number) => {
  const response = await api.get(`/movie/${id}/credits?${apiKey}`);
  return response.data.cast;
};



// export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
// export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
// export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

export { IMAGE_PATH };
