import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingDetail = ({ navigation }: any) => {
  const [bookings, setBookings] = useState<any[]>([]);

  const loadBookings = async () => {
    try {
      const data = await AsyncStorage.getItem('bookings');
      if (data) {
        setBookings(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  heading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  movieTitle: {
    color: '#ff9800',
    fontSize: 18,
    fontWeight: '700',
  },
  detail: {
    color: '#ccc',
    marginTop: 4,
  },
  noBookings: {
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
  },
  backButton: {
    backgroundColor: '#ff9800',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backText: {
    color: '#fff',
    fontWeight: '700',
  },
});
