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
import SearchBar from '../../components/SearchBar';
import MovieTabs from '../../components/MovieTabs';
import Images from '../../constant/Images';
import { useTheme } from '../../constant/themes/useTheme'; // ✅ Fixed path
import { Tab } from "../../types/interfaces";
import BottomTabNavigator from '../../navigation/StackNavigator/BottomTabNavigator';
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

        {/* Theme Toggle Button */}
        <TouchableOpacity
          style={[styles.themeButton, { backgroundColor: colors.surface }]}
          onPress={toggleTheme}
        >
          <Image
            source={theme === 'dark' ? Images.light : Images.dark}
            style={styles.themeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <SearchBar
        value={''}
        onChangeText={() => { }}
      />

      {/* Tabs */}
      {/* <MovieTabs
  tabs={[
    { id: 1, title: 'Now Playing' },
    { id: 2, title: 'Popular' },
    { id: 3, title: 'Top Rated' },
    { id: 4, title: 'Upcoming' },
  ]}
  onSelect={(id) => {
    console.log('Tab selected:', id);
    // Optional: You can filter which movie list to show dynamically
  }}
/> */}






      {/* <Text style={[styles.header, { color: colors.text }]}>
        What do you want to watch?
      </Text> */}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  themeButton: {
    padding: 6,
    borderRadius: 20,
  },
  themeIcon: {
    width: wp(7),
    height: wp(7),
    resizeMode: 'contain',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: wp(4),
  },
  header: {
    fontSize: wp(5),
    marginVertical: hp(2),
    fontWeight: '600',
  },
  section: {
    marginTop: hp(2),
  },
  title: {
    fontSize: wp(4),
    marginBottom: hp(1),
    fontWeight: '600',
  },
});