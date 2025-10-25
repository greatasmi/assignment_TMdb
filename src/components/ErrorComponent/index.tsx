import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
