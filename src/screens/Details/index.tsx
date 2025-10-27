import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
  View,
  Modal,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {IMovieDetails} from '../../types/interfaces';
import {IMAGE_PATH} from '../../apis/API_ENDPOINTS';
import {getMovieDetails} from '../../apis/API_ENDPOINTS';
import PlayButton from '../../components/PlayButton';
import VideoComponent from '../../components/VideoComponent';
import Images from '../../constant/Images'; // ✅ central image import

const height = Dimensions.get('window').height;

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const Details: React.FC<IProps> = ({route}) => {
  const {movieID} = route.params as {movieID: number};
  const [details, setDetails] = useState<IMovieDetails>({} as IMovieDetails);
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMovieDetails(movieID);
        if (res) setDetails(res);
      } catch (err) {
        console.error('Error fetching details:', err);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [movieID]);

  return (
    <>
      {isLoaded ? (
        <View>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image
                source={
                  details?.poster_path
                    ? {uri: `${IMAGE_PATH}${details.poster_path}`}
                    : Images.movie_poster
                }
                resizeMode="cover"
                style={styles.image}
              />
              {!details?.poster_path && (
                <Text style={styles.movieTitleAbsolute}>
                  {details.title || 'No data'}
                </Text>
              )}
            </View>

            <View style={styles.container}>
              <View style={styles.playButton}>
                <PlayButton setModalVisible={setModalVisible} />
              </View>

              <Text style={styles.movieTitle}>{details.title || 'No data'}</Text>

              {details?.genres && (
                <View style={styles.genresContainer}>
                  {details.genres.map(genre => (
                    <Text style={styles.genre} key={genre.id}>
                      {genre.name}
                    </Text>
                  ))}
                </View>
              )}

              {details?.vote_average && (
                <Text style={styles.rating}>
                  {details.vote_average.toFixed(1)}/10
                </Text>
              )}

              <Text style={styles.overview}>
                {details?.overview || 'No overview available.'}
              </Text>

              {details?.release_date && (
                <Text style={styles.releaseDate}>
                  {'Release date: ' +
                    new Date(details.release_date).toDateString()}
                </Text>
              )}
            </View>
          </ScrollView>

          <Modal
            animationType="slide"
            supportedOrientations={['portrait', 'landscape']}
            visible={modalVisible}>
            <View style={styles.videoModal}>
              <VideoComponent setModalVisible={setModalVisible} />
            </View>
          </Modal>
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height / 2,
    width: '100%',
  },
  movieTitleAbsolute: {
    position: 'absolute',
    width: 80,
    textAlign: 'center',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  genre: {
    backgroundColor: '#e6e6e6',
    padding: 5,
    margin: 3,
    borderRadius: 4,
  },
  rating: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#ff8c00',
  },
  overview: {
    padding: 8,
    textAlign: 'center',
  },
  releaseDate: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -20,
    right: 6,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
