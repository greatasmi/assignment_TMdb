import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { getMovieDetails } from '../../apis/API_ENDPOINTS';

const BookingDetail = ({ navigation }: any) => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    try {
      const data = await AsyncStorage.getItem('bookings');
      console.log('📦 Raw bookings from AsyncStorage:', data);

      if (data) {
        const bookingsData = JSON.parse(data);
        console.log('🔹 Parsed bookings:', bookingsData);

        // Ensure every booking has a movieTitle
    const bookingsWithTitles = await Promise.all(
  bookingsData.map(async (b: any) => {
    if ((!b.movieTitle || b.movieTitle === 'Unknown Movie') && b.movieId) {
      const res = await getMovieDetails(b.movieId);
      b.movieTitle = res.title;
    }
    return b;
  })
);
await AsyncStorage.setItem('bookings', JSON.stringify(bookingsWithTitles));


        console.log('🔹 Final bookings with titles:', bookingsWithTitles);
        setBookings(bookingsWithTitles);
      }
    } catch (err) {
      console.error('❌ Error loading bookings:', err);
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
