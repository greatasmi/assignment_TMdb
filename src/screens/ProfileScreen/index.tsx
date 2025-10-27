import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../constant/themes/useTheme';

const ProfileScreen = () => {
  const { theme } = useTheme() as unknown as { theme: { text: string; background: string } };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>
        👤 Profile Screen
      </Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>
        User info and settings will appear here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22, fontWeight: '600' },
  subtitle: { fontSize: 16, marginTop: 10 },
});

export default ProfileScreen;
