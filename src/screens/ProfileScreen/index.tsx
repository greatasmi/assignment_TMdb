import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../../constant/themes/useTheme';
import Images from '../../constant/Images';
import styles from './styles';

interface Booking {
  movieId?: number;
  movieTitle: string;
  seats: number[];
  date: string;
  time: string;
  totalPrice: number;
}

const ProfileScreen = () => {
  const { theme, colors } = useTheme();
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load bookings from AsyncStorage
  const loadBookings = async () => {
    try {
      const data = await AsyncStorage.getItem('bookings'); // should match BookingScreen key
      if (data) {
        const parsed: Booking[] = JSON.parse(data);
        setBookings(parsed);
      }
    } catch (error) {
      console.error('Error loading bookings', error);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const renderBooking = ({ item }: { item: Booking }) => (
    <View style={[styles.bookingCard, { backgroundColor: colors.surface }]}>
      <Text style={[styles.movieTitle, { color: colors.text }]}>
        🎬 {item.movieTitle || 'Unknown Movie'}
      </Text>
      <Text style={[styles.bookingText, { color: colors.text }]}>
        Seats: {item.seats.join(', ')}
      </Text>
      <Text style={[styles.bookingText, { color: colors.text }]}>
        Date: {new Date(item.date).toDateString()}
      </Text>
      <Text style={[styles.bookingText, { color: colors.text }]}>
        Time: {item.time}
      </Text>
      <Text style={[styles.bookingText, { color: colors.text }]}>
        Total: ${item.totalPrice.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          source={Images.avatar || Images.profile}
          style={styles.profileImage}
        />
        <Text style={[styles.userName, { color: colors.text }]}>Asma Jalal</Text>
        <Text style={[styles.userStatus, { color: colors.text }]}>Movie Enthusiast 🎥</Text>
      </View>

      {/* Bookings Section */}
      <View style={styles.bookingsContainer}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>🎟️ Your Bookings</Text>
        {bookings.length > 0 ? (
          <FlatList
            data={bookings}
            keyExtractor={(item, index) => (item.movieId || index).toString()}
            renderItem={renderBooking}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <Text style={[styles.noBooking, { color: colors.text }]}>
            No bookings yet.
          </Text>
        )}
      </View>

      {/* Movie Status Section */}
      <View style={styles.statusContainer}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>🎬 Movie Status</Text>
        <Text style={[styles.statusText, { color: colors.text }]}>
          You have booked {bookings.length} movie{bookings.length !== 1 ? 's' : ''}.
        </Text>
        <Text style={[styles.statusText, { color: colors.text }]}>
          Upcoming movies: {bookings.filter(b => new Date(b.date) > new Date()).length}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
