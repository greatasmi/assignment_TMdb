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
  tagline: number;
  alert: string;
}

// 🧭 Navigation types
export type RootStackParamList = {
  HomeScreen: undefined;
  NowPlayingScreen: undefined;
  BookingScreen: undefined;
  Booking: undefined;
  BottomTabs: undefined;
  SearchScreen: { query: string };
  ProfileScreen: undefined;
  
  VideoScreen: {movieID: number};
  BookingDetail: undefined;
  Details: { movieID: number };
};

// types/interfaces.ts (or wherever you define types)
export interface Tab {
  id: number;
  title: string;
}
