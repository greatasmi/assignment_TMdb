import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, IMovie } from '../../types/interfaces';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../apis/API_ENDPOINTS';
import MovieCard from '../../components/MovieCard';
import { wp, hp } from '../../components/Responsive';
import SearchBar from '../../components/SearchBar';
// ✅ define prop type for navigation
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [nowPlaying, setNowPlaying] = useState<IMovie[]>([]);
  const [popular, setPopular] = useState<IMovie[]>([]);
  const [topRated, setTopRated] = useState<IMovie[]>([]);
  const [upcoming, setUpcoming] = useState<IMovie[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const np = await getNowPlayingMovies();
      const pop = await getPopularMovies();
      const top = await getTopRatedMovies();
      const up = await getUpcomingMovies();

      console.log('✅ Now Playing Movies:', np?.length || 0);
      console.log('✅ Popular Movies:', pop?.length || 0);
      console.log('✅ Top Rated Movies:', top?.length || 0);
      console.log('✅ Upcoming Movies:', up?.length || 0);

      setNowPlaying(np);
      setPopular(pop);
      setTopRated(top);
      setUpcoming(up);
    } catch (error) {
      console.error('❌ Error fetching movie data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>What do you want to watch?</Text>

      {/* 🎬 Now Playing */}
      <View style={styles.section}>
        <Text style={styles.title}>🎬 Now Playing</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nowPlaying.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() => navigation.navigate('Details', { movieID: movie.id })}
            />
          ))}
        </ScrollView>
      </View>

      {/* 🔥 Popular */}
      <View style={styles.section}>
        <Text style={styles.title}>Popular</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popular.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() => navigation.navigate('Details', { movieID: movie.id })}
            />
          ))}
        </ScrollView>
      </View>

      {/* 🌟 Top Rated */}
      <View style={styles.section}>
        <Text style={styles.title}>Top Rated</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topRated.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() => navigation.navigate('Details', { movieID: movie.id })}
            />
          ))}
        </ScrollView>
      </View>

      {/* 🚀 Upcoming */}
      <View style={styles.section}>
        <Text style={styles.title}>Upcoming</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {upcoming.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() => navigation.navigate('Details', { movieID: movie.id })}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    padding: wp(4),
  },
  header: {
    color: 'white',
    fontSize: wp(5),
    marginVertical: hp(2),
    fontWeight: '600',
  },
  section: {
    marginTop: hp(2),
  },
  title: {
    color: 'white',
    fontSize: wp(4),
    marginBottom: hp(1),
  },
});
