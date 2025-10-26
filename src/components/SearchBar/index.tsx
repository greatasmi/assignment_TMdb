import React from 'react';
import {Image, View, TextInput, StyleSheet } from 'react-native';
import Images from '../../constant/Images';
import { wp, hp } from '../Responsive';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search movies...', value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Image
          source={Images.search}
          style={styles.logo}
          resizeMode="contain"
        />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: wp(6),
    paddingHorizontal: wp(3),
    marginVertical: hp(1),
  },
  icon: {
    marginRight: wp(2),
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: wp(4),
  },
   logo: {
    width: wp(10),
    height: wp(10),
    marginRight: wp(2),
  },
});
