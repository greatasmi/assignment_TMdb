// src/components/NavHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/interfaces';

// ✅ Define prop type
interface NavHeaderProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
}

const NavHeader: React.FC<NavHeaderProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>👈</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
});
