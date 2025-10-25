import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import Images from '../../constant/Images'; // ✅ Centralized image import

interface IProps {
  setModalVisible: (value: boolean) => void;
}

const PlayButton: React.FC<IProps> = ({ setModalVisible }) => {
  return (
    <Pressable onPress={() => setModalVisible(true)} style={styles.container}>
      <Image style={styles.playButton} source={Images.playbutton} />
    </Pressable>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
