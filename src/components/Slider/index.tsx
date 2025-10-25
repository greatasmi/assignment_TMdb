import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const { height } = Dimensions.get('screen');

interface SliderProps {
  images?: (string | number)[]; // ✅ supports URLs or local images (require)
}

const Slider: React.FC<SliderProps> = ({ images = [

    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tPq8xqhsTYZzUGwMKuksa0eyeGZ.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bcP7FtskwsNp1ikpMQJzDPjofP5.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/r4uXvqCeco0KmO0CjlhXuTEFuSE.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uMAkmQlKthQpTMiyPAKOYK3JnMs.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
  

] }) => {
  return (
    <SliderBox
      images={images}
      autoplay
      circleLoop
      dotStyle={styles.sliderDot}
      sliderBoxHeight={height / 1.5}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderDot: {
    height: 0,
  },
});
