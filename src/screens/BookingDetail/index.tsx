import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_KEY } from '../../apis/API_KEY'; // Make sure you have your API key here
import styles from './styles';
const BookingDetail = ({ navigation }: any) => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch movie details from TMDb using movieId
  const fetchMovieTitle = async (movieId: number) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      return response.data.title;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return 'Unknown Movie';
    }
  };

  const loadBookings = async () => {
    try {
      const data = await AsyncStorage.getItem('bookings');
      if (data) {
        const bookingsData = JSON.parse(data);

        // Fetch titles for bookings that only have movieId
        const bookingsWithTitles = await Promise.all(
          bookingsData.map(async (b: any) => {
            if (!b.movieTitle && b.movieId) {
              const title = await fetchMovieTitle(b.movieId);
              return { ...b, movieTitle: title };
            }
            return b;
          })
        );

        setBookings(bookingsWithTitles);
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadBookings);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.movieTitle}>{item.movieTitle}</Text>
      <Text style={styles.detail}>🎟 Seats: {item.seats.join(', ')}</Text>
      <Text style={styles.detail}>📅 {new Date(item.date).toDateString()}</Text>
      <Text style={styles.detail}>🕒 {item.time}</Text>
      <Text style={styles.detail}>💰 Total: ${item.totalPrice.toFixed(2)}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#ff9800" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Bookings</Text>
      {bookings.length === 0 ? (
        <Text style={styles.noBookings}>No bookings yet 🎟</Text>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(_, i) => i.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.backText}>⬅ Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingDetail;
