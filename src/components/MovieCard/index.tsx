import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { IMovie } from '../../types/interfaces';
import { IMAGE_PATH } from '../../apis/API_KEY';
import Images from '../../constant/Images';

interface IProps {
  movie: IMovie;
  onPress?: () => void;
}

const MovieCard: React.FC<IProps> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={
          movie.poster_path
            ? { uri: `${IMAGE_PATH}${movie.poster_path}` }
            : Images.movie_poster
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
