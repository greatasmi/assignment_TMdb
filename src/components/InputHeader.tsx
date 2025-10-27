import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  BORDERRADIUS,
  FONTSIZE,
  SPACING,
} from '../constant/theme/theme';
import Images from '../constant/Images';

import { Colors } from '../constant/Colors'
import { Fontfamily } from '../constant/Fontfamily'
const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={Colors.WhiteRGBA32}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}>
        <Image
    source={Images.search}
    style={{
      width: FONTSIZE.size_20,
      height: FONTSIZE.size_20,
      tintColor: Colors.Pink, // use tintColor for changing image color
    }}
  />
  <Text style={styles.imageTitle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: Colors.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: 'row',
  },
  textInput: {
    width: '90%',
    fontFamily: Fontfamily.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: Colors.White,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.space_10,
  },

  imageTitle: {
    marginTop: 4,
    color: Colors.White,
    fontSize: FONTSIZE.size_12,
    textAlign: 'center',
  },
  
});

export default InputHeader;
