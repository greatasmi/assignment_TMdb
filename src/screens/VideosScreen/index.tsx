// ✅ src/screens/VideosScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../../constant/themes/useTheme';
import { getMovieVideos } from '../../apis/API_ENDPOINTS'; // API for video fetching
import { RouteProp, NavigationProp } from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const VideosScreen: React.FC<IProps> = ({ route }) => {
  const { theme: themeMode } = useTheme();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const theme =
    typeof themeMode === 'string'
      ? themeMode === 'light'
        ? { background: '#FFFFFF', text: '#000000' }
        : { background: '#000000', text: '#FFFFFF' }
      : (themeMode as any);

  const movieID = route.params?.movieID || 603; // fallback: The Matrix

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieVideos(movieID);
        const trailer = data.results.find(
          (vid: any) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );
        if (trailer) {
          setVideoUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (err) {
        console.error('Error fetching trailer:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieID]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {loading ? (
        <ActivityIndicator size="large" color="#ffcc00" />
      ) : videoUrl ? (
        <WebView
          source={{ uri: videoUrl }}
          style={styles.webView}
          javaScriptEnabled
          allowsFullscreenVideo
        />
      ) : (
        <Text style={[styles.text, { color: theme.text }]}>
          🎬 No trailer available.
        </Text>
      )}
    </View>
  );
};

export default VideosScreen;
