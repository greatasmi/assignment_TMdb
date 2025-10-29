import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import MovieTabs from "../../components/MovieTabs";
import { IMovie } from "../../types/interfaces"; // ✅ import interface
import { API_KEY } from "../../apis/API_KEY";
import { BASE_URL } from "../../apis/BASE_URL";
import styles from './styles';

export default function MovieListScreen() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
        params: { api_key: API_KEY },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.log("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectMovie = (id: number) => {
    const movie = movies.find((m) => m.id === id);
    if (movie) setSelectedMovie(movie);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 🎞️ Movie tabs at top */}
      <MovieTabs movies={movies} onSelect={handleSelectMovie} />

      {/* 🎬 Selected movie info */}
      {selectedMovie && (
        <View style={styles.detailBox}>
          <Text style={styles.movieTitle}>🎬 {selectedMovie.title}</Text>
          <Text style={styles.overview}>{selectedMovie.overview}</Text>
        </View>
      )}
    </View>
  );
}
