import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../../constant/themes/useTheme';
import { getMovieVideos } from '../../apis/API_ENDPOINTS';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const VideosScreen: React.FC<IProps> = ({ route }) => {
  const { theme: themeMode } = useTheme();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false); // control WebView visibility
  const [thumbnail, setThumbnail] = useState<string | null>(null);

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
        const trailer = data.find(
          (vid: any) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );
        if (trailer) {
          setThumbnail(`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`);
          setVideoUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (err) {
        console.error('Error fetching trailer:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieID]);

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color="#ffcc00" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {videoUrl ? (
        showPlayer ? (
          <WebView
            source={{ uri: videoUrl }}
            style={styles.webView}
            javaScriptEnabled
            allowsFullscreenVideo
          />
        ) : (
          <TouchableOpacity
            style={styles.thumbnailContainer}
            onPress={() => setShowPlayer(true)}
            activeOpacity={0.8}
          >
            {thumbnail && (
              <Image
                source={{ uri: thumbnail }}
                style={styles.thumbnail}
                resizeMode="cover"
              />
            )}
            <View style={styles.overlay}>
              <Icon name="play-circle-outline" size={64} color="#ffcc00" />
              <Text style={styles.playText}>Watch Trailer Now</Text>
            </View>
          </TouchableOpacity>
        )
      ) : (
        <Text style={[styles.text, { color: theme.text }]}>
          🎬 No trailer available.
        </Text>
      )}
    </View>
  );
};

export default VideosScreen;
