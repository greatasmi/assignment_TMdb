import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {Dimensions, StyleSheet} from 'react-native';

const dimensions = Dimensions.get('screen');

const Slider = ({images = []}) => {
  return (
    <SliderBox
      images={images}
      autoplay={true}
      circleLoop={true}
      dotStyle={styles.sliderDot}
      sliderBoxHeight={dimensions.height / 1.5}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderDot: {
    height: 0,
  },
});
