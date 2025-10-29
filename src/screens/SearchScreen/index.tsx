import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { searchMovies, IMAGE_PATH } from '../../apis/API_ENDPOINTS';
import SearchBar from '../../components/SearchBar'; // ✅ custom search bar component
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const { width } = Dimensions.get('window');

const SearchScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔍 Fetch movies when query changes
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length > 1) handleSearch(query);
      else setSearchResults([]);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  // 🧪 Test fetch once
  useEffect(() => {
    (async () => {
      const test = await searchMovies('avatar');
      console.log('TEST RESULTS:', test.length);
    })();
  }, []);

  const handleSearch = async (text: string) => {
    try {
      setLoading(true);
      const results = await searchMovies(text);
      console.log('Fetched results:', results?.length, results?.[0]?.title);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', { movieID: item.id })}
    >
      <Image
        source={
          item.poster_path
            ? { uri: `${IMAGE_PATH}${item.poster_path}` }
            : require('../../assets/images/movie_poster.png')
        }
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.rating}>⭐ {item.vote_average?.toFixed(1) || 'N/A'}</Text>
        <Text style={styles.date}>{item.release_date ? item.release_date.slice(0, 4) : '—'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* ✅ Replaces old TextInput */}
      <SearchBar
        placeholder="Search movies..."
        value={query}
        onChangeText={setQuery}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 30 }} />
      ) : searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      ) : (
        <Text style={styles.text}>
          {query.length < 2
            ? 'Type at least 2 characters to search 🔍'
            : 'No results found 😕'}
        </Text>
      )}
    </View>
  );
};

export default SearchScreen;
