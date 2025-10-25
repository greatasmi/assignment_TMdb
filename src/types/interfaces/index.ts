// src/types/interfaces.ts
export interface IMovie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  popularity: number;
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
}

export interface IMovieDetails extends IMovie {
  belongs_to_collection?: null | object;
  genres: Array<{ id: number; name: string }>;
  budget: number;
}

// 🧭 Navigation types
export type RootStackParamList = {
  Home: undefined;
  Details: { movieID: number };
};
