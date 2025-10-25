import React, {useEffect, useState} from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView, 
  ActivityIndicator
} from 'react-native';
import {
  getDocumentaries,
  getFantasyMovies,
  getPopularMovies,
  getPopularTvShows,
  getUpcomingMovies,
  imagePath,
} from '../../apis/API_ENDPOINTS';
import {IMovie} from '../../types/interfaces';
import Slider from '../../components/Slider';
import MoviesList from '../../components/MoviesList';
import ErrorComponent from '../../components/ErrorComponent';
import {NavigationProp} from '@react-navigation/native';

interface IRouterProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({navigation}: IRouterProps) => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [fantasyMovies, setFantasyMovies] = useState<IMovie[]>([]);
  const [documentaries, setDocumentaries] = useState<IMovie[]>([]);
  const [popularTvShows, setPopularTvShows] = useState<IMovie[]>([]);
  const [moviesImages, setMoviesImages] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  console.log(error, 'error from home');

  const getMovieData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTvShows(),
      getFantasyMovies(),
      getDocumentaries(),
    ]);
  };

  useEffect(() => {
    getMovieData()
      .then(([upcoming, popular, tv, fantasy, document]) => {
        const images = upcoming.map(
          (m: IMovie) => `${imagePath}${m.poster_path}`,
        );
        setMoviesImages(images);
        setPopularMovies(popular);
        setPopularTvShows(tv);
        setFantasyMovies(fantasy);
        setDocumentaries(document);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {!isLoading && error === '' && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.slider}>
              <Slider images={moviesImages} />
            </View>
          )}
          {popularMovies && (
            <View style={styles.carousel}>
              <MoviesList
                navigation={navigation}
                movies={popularMovies}
                title="Popular Movies"
              />
            </View>
          )}
          {popularTvShows && (
            <View style={styles.carousel}>
              <MoviesList
                navigation={navigation}
                movies={popularTvShows}
                title="Popular Tv Shows"
              />
            </View>
          )}
          {fantasyMovies && (
            <View style={styles.carousel}>
              <MoviesList
                navigation={navigation}
                movies={fantasyMovies}
                title="Fantasy Movies"
              />
            </View>
          )}
          {documentaries && (
            <View style={styles.carousel}>
              <MoviesList
                navigation={navigation}
                movies={documentaries}
                title="Documentaries"
              />
            </View>
          )}
        </ScrollView>
      )}
      {isLoading && <ActivityIndicator size="large" />}
      {error !== '' && <ErrorComponent errorText="Something went wrong" />}
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
  },
});

export default Home;
