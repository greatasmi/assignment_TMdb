import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import NavHeader from '../../components/NavHeader';
import SearchScreen from '../SearchScreen';
import Images from '../../constant/Images';
import { useTheme } from '../../constant/themes/useTheme'; // ✅ Fixed path

import styles from './styles';

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
  const [loading, setLoading] = useState(true);

  // ✅ Theme hook - now properly typed
  const { theme, colors, toggleTheme } = useTheme();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const [np, pop, top, up] = await Promise.all([
        getNowPlayingMovies(),
        getPopularMovies(),
        getTopRatedMovies(),
        getUpcomingMovies(),
      ]);

      setNowPlaying(np);
      setPopular(pop);
      setTopRated(top);
      setUpcoming(up);
    } catch (error) {
      console.error('❌ Error fetching movie data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.loader, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, { color: colors.text }]}>
          Loading Movies...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header + Toggle */}
      <View style={styles.headerRow}>
        <NavHeader />

      
      </View>
 {/* ✅ Directly render SearchScreen at the top */}
      <View style={styles.searchSection}>
        <SearchScreen navigation={navigation} />
      </View>

      {/* 🎬 Now Playing */}
      <View style={styles.section}>
        <Text style={[styles.title, { color: colors.text }]}>🎬 Now Playing</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nowPlaying.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() =>
                navigation.navigate('Details', { movieID: movie.id })
              }
            />
          ))}
        </ScrollView>
      </View>

      {/* 🔥 Popular */}
      <View style={styles.section}>
        <Text style={[styles.title, { color: colors.text }]}>🔥 Popular</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popular.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() =>
                navigation.navigate('Details', { movieID: movie.id })
              }
            />
          ))}
        </ScrollView>
      </View>

      {/* 🌟 Top Rated */}
      <View style={styles.section}>
        <Text style={[styles.title, { color: colors.text }]}>🌟 Top Rated</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topRated.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() =>
                navigation.navigate('Details', { movieID: movie.id })
              }
            />
          ))}
        </ScrollView>
      </View>

      {/* 🚀 Upcoming */}
      <View style={styles.section}>
        <Text style={[styles.title, { color: colors.text }]}>🎞️ Upcoming</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {upcoming.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() =>
                navigation.navigate('Details', { movieID: movie.id })
              }
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
