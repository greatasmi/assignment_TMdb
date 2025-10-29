import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { getNowPlayingMovies, IMAGE_PATH } from '../../apis/API_ENDPOINTS';
import PlayButton from '../../components/PlayButton';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';



const NowPlayingScreen = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch Now Playing movies
  const fetchMovies = async () => {
    console.log('📡 Starting API call: getNowPlayingMovies() ...');
    try {
      const data = await getNowPlayingMovies();
      console.log('✅ Full Movie Data:', JSON.stringify(data, null, 2)); // full response
      setMovies(data);
      setLoading(false);
      console.log('🎞️ First Movie:', data[0]?.title);
      console.log('🗓️ Release Date:', data[0]?.release_date);
      console.log('⭐ Rating:', data[0]?.vote_average);
    } catch (error) {
      console.error('❌ Error fetching Now Playing movies:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // 🎬 Render a single movie card
  const renderMovieItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: `${IMAGE_PATH}${item.poster_path}` }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.date}>Release: {item.release_date}</Text>
        <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ffcc00" />
        <Text style={styles.loadingText}>Loading Now Playing movies...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* 🏆 Top image (first movie backdrop) */}
      {movies.length > 0 && (
        <Image
          source={{ uri: `${IMAGE_PATH}${movies[0].backdrop_path}` }}
          style={styles.topImage}
          resizeMode="cover"
        />
      )}

      {/* 🎞️ Movie grid */}
      <Text style={styles.sectionTitle}>🎬 Now Playing</Text>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
};

export default NowPlayingScreen;
