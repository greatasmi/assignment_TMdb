import React from 'react';
import { Text, View} from 'react-native';
import styles from './styles';
interface IProps {
  errorText: string;
}

const Error = ({errorText}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorText}</Text>
    </View>
  );
};

export default Error;
