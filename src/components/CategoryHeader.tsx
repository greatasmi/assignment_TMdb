import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {FONTSIZE, SPACING} from '../constant/theme/theme';
import Images from '../constant/Images';
import {Colors} from '../constant/Colors'
import {Fontfamily} from '../constant/Fontfamily'
const CategoryHeader = (props: any) => {
  return <Text style={styles.text}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fontfamily.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: Colors.White,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_28,
  },
});

export default CategoryHeader;
