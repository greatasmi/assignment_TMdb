import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../apis/API_ENDPOINTS';
import { RootStackParamList, IMovie } from '../../types/interfaces';
import MovieCard from '../../components/MovieCard';
import NavHeader from '../../components/NavHeader';
import SearchScreen from '../SearchScreen';
import { wp, hp } from '../../components/Responsive';
import { useTheme } from '../../constant/themes/useTheme';
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

  // ✅ Theme hook
  const { colors } = useTheme();

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

  // ✅ Loader Screen
  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, { color: colors.text }]}>Loading Movies...</Text>
      </SafeAreaView>
    );
  }

  // ✅ Main Content
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(6) }}
      >
        {/* 🔝 Header */}
        <View style={styles.headerRow}>
          <NavHeader />
        </View>

        {/* 🔍 Search */}
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
                onPress={() => navigation.navigate('Details', { movieID: movie.id })}
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
                onPress={() => navigation.navigate('Details', { movieID: movie.id })}
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
                onPress={() => navigation.navigate('Details', { movieID: movie.id })}
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
                onPress={() => navigation.navigate('Details', { movieID: movie.id })}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
