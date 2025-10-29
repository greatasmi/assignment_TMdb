import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import Images from '../../constant/Images'; 
import styles from './styles';
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
