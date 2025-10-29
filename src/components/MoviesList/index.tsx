import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {IMovie} from '../../types/interfaces';
import MovieCard from '../MovieCard';
import styles from './styles';
interface IProps {
  movies: IMovie[];
  title: string;
  navigation: NavigationProp<any, any>;
}

const List = ({movies, title, navigation}: IProps) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listHeading}>{title}</Text>
      <FlatList
        horizontal
        data={movies}
        renderItem={({item}) => (
          <MovieCard movie={item} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default List;
