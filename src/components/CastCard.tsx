import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  BORDERRADIUS,
  FONTSIZE,
  SPACING,
} from '../constant/theme/theme';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Colors} from '../constant/Colors'
import {Fontfamily} from '../constant/Fontfamily'
const CastCard = (props: any) => {
  return (
    <View
      style={[
        styles.container,
        props.shouldMarginatedAtEnd
          ? props.isFirst
            ? {marginLeft: SPACING.space_24}
            : props.isLast
            ? {marginRight: SPACING.space_24}
            : {}
          : {},
        {maxWidth: props.cardWidth},
      ]}>
      <Image
        source={{uri: props.imagePath}}
        style={[styles.cardImage, {width: props.cardWidth}]}
      />
      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {props.subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardImage: {
    aspectRatio: 1920 / 2880,
    borderRadius: BORDERRADIUS.radius_25 * 4,
  },
  title: {
    alignSelf: 'stretch',
    fontFamily: Fontfamily.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: Colors.White,
  },
  subtitle: {
    alignSelf: 'stretch',
    fontFamily: Fontfamily.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: Colors.White,
  },
});

export default CastCard;
