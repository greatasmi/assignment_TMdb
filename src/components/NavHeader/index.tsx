// src/components/NavHeader/index.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/interfaces';
import { wp, hp } from '../Responsive';
import Images from '../../constant/Images';
import { useTheme } from '../../constant/themes/useTheme';

interface NavHeaderProps {
  title?: string;
  showLogo?: boolean;
  backgroundColor?: string;
  textColor?: string;
  showBackButton?: boolean;
  navigation?: NativeStackNavigationProp<RootStackParamList>;
}

const NavHeader: React.FC<NavHeaderProps> = ({
  title = 'TMDb App',
  showLogo = true,
  backgroundColor = '#121212',
  textColor = '#fff',
  showBackButton = false,
  navigation,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* 🔙 Text-based Back Button */}
      {showBackButton && navigation && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={[styles.backText, { color: textColor }]}>← Back</Text>
        </TouchableOpacity>
      )}

      {/* 🎬 Logo */}
      {showLogo && (
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
      )}

      {/* 🧾 Title */}
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
   
      <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <Image
          source={theme === 'dark' ? Images.light : Images.dark}
          style={styles.themeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  backButton: {
    marginRight: wp(3),
  },
  backText: {
    fontSize: wp(4),
    fontWeight: '500',
  },
  logo: {
    width: wp(10),
    height: wp(10),
    marginRight: wp(2),
  },
  title: {
    fontSize: wp(5),
    fontWeight: '700',
  },
  themeButton: {
    marginLeft: 'auto',
    padding: wp(1),
  },
  themeIcon: {
    width: wp(6),
    height: wp(6),
  },
});
