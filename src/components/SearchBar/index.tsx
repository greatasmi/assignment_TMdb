import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';
import Images from '../../constant/Images';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChangeText }) => (
  <View style={styles.container}>
    <Image source={Images.search} style={styles.logo} resizeMode="contain" />
    <TextInput
      style={styles.input}
      placeholder={placeholder || 'Search...'}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default SearchBar;
