import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { IMovie } from "../../types/interfaces";
import { useTheme } from "../../constant/themes/useTheme";
import styles from "./styles";
interface Props {
  movies?: IMovie[]; // optional for safety
  onSelect?: (movieId: number) => void;
}

const MovieTabs: React.FC<Props> = ({ movies = [], onSelect = () => {} }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const { gradients, colors } = useTheme();

  if (!Array.isArray(movies)) {
    console.warn("⚠️ MovieTabs: 'movies' prop is not an array", movies);
    return null;
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
    >
      {movies.length > 0 ? (
        movies.map((movie) => {
          const isActive = selected === movie.id;
          return (
            <TouchableOpacity
              key={movie.id}
              onPress={() => {
                setSelected(movie.id);
                onSelect(movie.id);
              }}
              activeOpacity={0.8}
              style={styles.tabWrapper}
            >
              <LinearGradient
                colors={
                  isActive
                    ? (gradients as any).tabActive
                    : (gradients as any).tabInactive
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.gradientBorder,
                  { opacity: isActive ? 1 : 0.85 },
                ]}
              >
                <View
                  style={[
                    styles.innerTab,
                    { backgroundColor: colors.card },
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      { color: isActive ? colors.text : "#888" },
                    ]}
                    numberOfLines={1}
                  >
                    🎞️ {movie.title}
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text style={[styles.emptyText, { color: colors.text }]}>
        ..............  {/* No movies found */}
        </Text>
      )}
    </ScrollView>
  );
};
export default MovieTabs;
