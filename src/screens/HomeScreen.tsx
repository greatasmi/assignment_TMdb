import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import { SPACING } from '../constant/theme/theme';
import { Colors } from '../constant/Colors';
import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../api/API_ENDPOINTS';
import InputHeader from '../components/InputHeader';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCard from '../components/SubMovieCard';
import MovieCard from '../components/MovieCard';
import { IMAGE_PATH } from '../api/API_KEY';
const { width } = Dimensions.get('window');

interface Movie {
  id: string | number;
  original_title?: string;
  poster_path?: string;
  genre_ids?: number[];
  vote_average?: number;
  vote_count?: number;
}

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<Movie[]>([]);
  const [topRatedMoviesList, setTopRatedMoviesList] = useState<Movie[]>([]);
  
  const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([]);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const nowPlaying = await getNowPlayingMovies();
        setNowPlayingMoviesList([{ id: 'dummy1' }, ...nowPlaying, { id: 'dummy2' }]);


         const topRatedMovies = await getTopRatedMovies();
        setTopRatedMoviesList(topRatedMovies);

        const popular = await getPopularMovies();
        setPopularMoviesList(popular);

        const upcoming = await getUpcomingMovies();
        setUpcomingMoviesList(upcoming);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const searchMoviesFunction = () => {
    navigation.navigate('Search');
  };

  if (loading) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />
        <View style={styles.InputHeaderContainer}>
          <InputHeader searchFunction={searchMoviesFunction} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
      </View>

      {/* Now Playing */}
      <CategoryHeader title="Now Playing" />
      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        bounces={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) =>
          item.original_title ? (
            <MovieCard
              shoudlMarginatedAtEnd
              cardFunction={() => navigation.push('MovieDetails', { movieid: item.id })}
              cardWidth={width * 0.7}
              isFirst={index === 0}
              isLast={index === nowPlayingMoviesList.length - 1}
              title={item.original_title}
              imagePath={IMAGE_PATH('w780', item.poster_path || '')}
              genre={item.genre_ids?.slice(0, 3) || []}
              vote_average={item.vote_average || 0}
              vote_count={item.vote_count || 0}
            />
          ) : (
            <View style={{ width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2 }} />
          )
        }
      />

{/* TopRatedMovies */}
      <CategoryHeader title="TopRatedMovies" />
      <FlatList
        data={topRatedMoviesList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCard
            shoudlMarginatedAtEnd
            cardFunction={() => navigation.push('MovieDetails', { movieid: item.id })}
            cardWidth={width / 3}
            isFirst={index === 0}
            isLast={index === topRatedMoviesList.length - 1}
            title={item.original_title || ''}
            imagePath={IMAGE_PATH('w342', item.poster_path || '')}
          />
        )}
      />

      {/* Popular */}
      <CategoryHeader title="Popular" />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCard
            shoudlMarginatedAtEnd
            cardFunction={() => navigation.push('MovieDetails', { movieid: item.id })}
            cardWidth={width / 3}
            isFirst={index === 0}
            isLast={index === popularMoviesList.length - 1}
            title={item.original_title || ''}
            imagePath={IMAGE_PATH('w342', item.poster_path || '')}
          />
        )}
      />

      {/* Upcoming */}
      <CategoryHeader title="Upcoming" />
      <FlatList
        data={upcomingMoviesList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCard
            shoudlMarginatedAtEnd
            cardFunction={() => navigation.push('MovieDetails', { movieid: item.id })}
            cardWidth={width / 3}
            isFirst={index === 0}
            isLast={index === upcomingMoviesList.length - 1}
            title={item.original_title || ''}
            imagePath={IMAGE_PATH('w342', item.poster_path || '')}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
});

export default HomeScreen;
