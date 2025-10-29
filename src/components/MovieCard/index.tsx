import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { IMovie } from '../../types/interfaces';
import { IMAGE_PATH } from '../../apis/API_KEY';
import Images from '../../constant/Images';
import styles from './styles';
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
