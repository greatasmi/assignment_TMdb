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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  topImage: {
    width: '100%',
    height: 220,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    marginLeft: 15,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  card: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    margin: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  date: {
    color: '#aaa',
    fontSize: 12,
  },
  rating: {
    color: '#ffcc00',
    fontSize: 13,
    marginTop: 4,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
  },
});
