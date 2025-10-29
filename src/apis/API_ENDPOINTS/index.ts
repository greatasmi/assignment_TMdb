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
  console.log('🎞 First Movie:', response.data.results[0]?.title);
  return response.data.results;
};

// 🔥 Popular Movies
export const getPopularMovies = async () => {
  console.log('🎬 Fetching Popular Movies...');
  const response = await api.get(`/movie/popular?${apiKey}&language=en-US&page=1`);
  console.log('✅ Popular Movies Fetched:', response.data.results.length);
  console.log('🎞 First Movie:', response.data.results[0]?.title);
  return response.data.results;
};

// ⭐ Top Rated Movies
export const getTopRatedMovies = async () => {
  console.log('🎬 Fetching Top Rated Movies...');
  const response = await api.get(`/movie/top_rated?${apiKey}&language=en-US&page=1`);
  console.log('✅ Top Rated Movies Fetched:', response.data.results.length);
  console.log('🎞 First Movie:', response.data.results[0]?.title);
  return response.data.results;
};

// 🚀 Upcoming Movies
export const getUpcomingMovies = async () => {
  console.log('🎬 Fetching Upcoming Movies...');
  const response = await api.get(`/movie/upcoming?${apiKey}&language=en-US&page=1`);
  console.log('✅ Upcoming Movies Fetched:', response.data.results.length);
  console.log('🎞 First Movie:', response.data.results[0]?.title);
  return response.data.results;
};

// 🎥 Movie Details
export const getMovieDetails = async (movieId: number) => {
  console.log(`🎬 Fetching details for Movie ID: ${movieId} ...`);
  const response = await api.get(`/movie/${movieId}?${apiKey}&language=en-US`);
  console.log('✅ Movie Details Fetched:', response.data.title);
  return response.data;
};
export const getMovieVideos = async (movieID: number) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${movieID}/videos`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  } catch (err) {
    console.error('❌ Error fetching movie videos:', err);
    return [];
  }
};

/**
 * 🔍 Search movies by keyword
 */
export const searchMovies = async (query: string) => {
  if (!query) return [];
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        language: 'en-US',
        include_adult: false,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('❌ Error searching movies:', error);
    return [];
  }
};

/**
 * ▶️ Get YouTube Trailer URL
 */
export const getMovieTrailer = async (movieID: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieID}/videos`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    const videos = response.data.results;
    const trailer =
      videos.find(
        (v: any) =>
          v.type === 'Trailer' &&
          v.site === 'YouTube' &&
          (v.official || v.name.toLowerCase().includes('trailer'))
      ) || videos[0];

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error('❌ Error fetching movie trailer:', error);
    return null;
  }
};

export { IMAGE_PATH };
