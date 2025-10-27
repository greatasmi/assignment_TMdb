import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../constant/themes/useTheme';

const SearchScreen = () => {
  const { colors, mode } = useTheme(); // use 'colors' instead of 'theme' if your theme hook provides color palette
  const [query, setQuery] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[
          styles.searchInput,
          {
            backgroundColor: mode === 'dark' ? '#222' : '#eee',
            color: colors.text,
          },
        ]}
        placeholder="Search movies..."
        placeholderTextColor={mode === 'dark' ? '#aaa' : '#666'}
        value={query}
        onChangeText={setQuery}
      />
      <Text style={[styles.text, { color: colors.text }]}>
        🔍 Showing results for: {query || 'Nothing yet'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchInput: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  text: { fontSize: 18, textAlign: 'center' },
});

export default SearchScreen;
