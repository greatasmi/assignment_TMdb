import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../constant/themes/useTheme';

const VideosScreen = () => {
  const { theme: themeMode } = useTheme();

  // If useTheme returns a mode string like 'light' | 'dark', map it to actual colors.
  // If it already returns an object, this will use it as-is.
  const theme =
    typeof themeMode === 'string'
      ? themeMode === 'light'
        ? { background: '#FFFFFF', text: '#000000' }
        : { background: '#000000', text: '#FFFFFF' }
      : (themeMode as any);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>🎬 Videos Screen</Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>
        Movie trailers and clips will appear here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22, fontWeight: '600' },
  subtitle: { fontSize: 16, marginTop: 10 },
});

export default VideosScreen;
