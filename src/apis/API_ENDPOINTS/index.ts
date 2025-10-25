import axios from 'axios';
import {API_KEY} from '@env';

const apiUrl = 'https://api.themoviedb.org/3';
export const imagePath = 'https://image.tmdb.org/t/p/w500/';
const apiKey = `api_key=${API_KEY}`;

export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
};

export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};

export const getPopularTvShows = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return resp.data.results;
};

export const getFantasyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=14 `,
  );
  return resp.data.results;
};

export const getDocumentaries = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
  );
  return resp.data.results;
};

export const getMovieDetails = async (movieId: number) => {
  const resp = await axios.get(`${apiUrl}/movie/${movieId}?${apiKey}`);
  return resp.data;
};
