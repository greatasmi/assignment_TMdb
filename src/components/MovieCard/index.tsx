import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { IMovie } from '../../types/interfaces';
import { imagePath } from '../../apis/API_ENDPOINTS';
import Images from '../../constant/Images'; // ✅ Centralized image import

interface IProps {
  movie: IMovie;
  navigation: NavigationProp<any, any>;
}

const MovieCard: React.FC<IProps> = ({ movie, navigation }) => {
  const onPress = () => {
    navigation.navigate('Details', { movieID: movie.id });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={
          movie.poster_path
            ? { uri: `${imagePath}${movie.poster_path}` }
            : Images.movie_poster // ✅ Use centralized placeholder image
        }
        resizeMode="cover"
        style={styles.image}
      />
      {!movie.poster_path && (
        <Text style={styles.movieTitle}>{movie.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    position: 'absolute',
    width: 80,
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
  },
});
