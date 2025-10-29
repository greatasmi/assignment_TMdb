import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  Dimensions,
  ActivityIndicator,
  View,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { IMovieDetails } from '../../types/interfaces';
import {
  IMAGE_PATH,
  getMovieDetails,
  getMovieTrailer,
} from '../../apis/API_ENDPOINTS';
import Images from '../../constant/Images';
import styles from './styles';

const height = Dimensions.get('window').height;

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const Details: React.FC<IProps> = ({ navigation, route }) => {
  const { movieID } = route.params as { movieID: number };

  const [details, setDetails] = useState<IMovieDetails>({} as IMovieDetails);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  // ✅ Fetch movie details
  useEffect(() => {
    (async () => {
      try {
        const res = await getMovieDetails(movieID);
        setDetails(res);
      } catch (err) {
        console.error('❌ Error fetching details:', err);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [movieID]);

  // ✅ Handle trailer playback
  const handlePlayTrailer = async () => {
    try {
      const url = await getMovieTrailer(movieID);
      if (url) {
        setTrailerUrl(url);
        Linking.openURL(url);
      } else {
        Alert.alert('No Trailer Available', 'No trailer is available for this movie.');
      }
    } catch (error) {
      console.error('❌ Error fetching trailer:', error);
      Alert.alert('Error', 'Something went wrong while loading the trailer.');
    }
  };

  // ✅ Loader
  if (!isLoaded) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color="#E50914" />
        <Text style={styles.loadingText}>Loading movie details...</Text>
      </SafeAreaView>
    );
  }

  // ✅ Main UI
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 🎬 Movie Poster */}
        <View style={styles.imageContainer}>
          <Image
            source={
              details?.poster_path
                ? { uri: `${IMAGE_PATH}${details.poster_path}` }
                : Images.movie_poster
            }
            resizeMode="cover"
            style={styles.image}
          />
        </View>

        {/* 📝 Movie Details Content */}
        <View style={styles.container}>
          <Text style={styles.movieTitle}>{details.title || 'No Title'}</Text>

          {/* 🎭 Genres */}
          {details?.genres && (
            <View style={styles.genresContainer}>
              {details.genres.map((genre) => (
                <Text key={genre.id} style={styles.genre}>
                  {genre.name}
                </Text>
              ))}
            </View>
          )}

          {/* ⭐ Rating */}
          {details?.vote_average && (
            <Text style={styles.rating}>⭐ {details.vote_average.toFixed(1)} / 10</Text>
          )}

          {/* 🗣️ Tagline */}
          {details?.tagline ? (
            <Text style={styles.tagline}>"{details.tagline}"</Text>
          ) : null}

          {/* 📖 Overview */}
          <Text style={styles.overview}>
            {details.overview || 'No overview available.'}
          </Text>

          {/* 📅 Release Date */}
          {details?.release_date && (
            <Text style={styles.releaseDate}>
              Release date: {new Date(details.release_date).toDateString()}
            </Text>
          )}

          {/* ▶️ Play Trailer */}
          <TouchableOpacity
            style={styles.playButton}
            onPress={handlePlayTrailer}
            activeOpacity={0.8}
          >
            <Text style={styles.playButtonText}>▶️ Watch Trailer</Text>
          </TouchableOpacity>

          {/* 🎟️ Booking Section */}
          <View style={styles.bookingContainer}>
            <Text style={styles.priceText}>Tickets starting at $5</Text>
            <TouchableOpacity
              style={styles.bookingButton}
              onPress={() => navigation.navigate('Booking', { movieID: details.id })}
            >
              <Text style={styles.bookingButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
