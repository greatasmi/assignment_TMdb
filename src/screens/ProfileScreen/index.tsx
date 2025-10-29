import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../../constant/themes/useTheme';
import Images from '../../constant/Images'; // Your central image file
import styles from './styles';
interface Booking {
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
      const data = await AsyncStorage.getItem('booking');
      if (data) {
        setBookings([JSON.parse(data)]); // If multiple bookings, you can modify to load array
      }
    } catch (error) {
      console.error('Error loading bookings', error);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const renderBooking = ({ item }: { item: Booking }) => {
    return (
      <View style={[styles.bookingCard, { backgroundColor: colors.surface }]}>
        <Text style={[styles.movieTitle, { color: colors.text }]}>
          🎬 {item.movieTitle}
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
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={Images.avatar || Images.profile} // fallback
          style={styles.profileImage}
        />
        <Text style={[styles.userName, { color: colors.text }]}>
          Asma Jalal
        </Text>
        <Text style={[styles.userStatus, { color: colors.text }]}>
          Movie Enthusiast 🎥
        </Text>
      </View>

      {/* Bookings Section */}
      <View style={styles.bookingsContainer}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          🎟️ Your Bookings
        </Text>
        {bookings.length > 0 ? (
          <FlatList
            data={bookings}
            keyExtractor={(_, index) => index.toString()}
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
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          🎬 Movie Status
        </Text>
        <Text style={[styles.statusText, { color: colors.text }]}>
          You have watched {bookings.length} movies.
        </Text>
        <Text style={[styles.statusText, { color: colors.text }]}>
          Upcoming movies: 0
        </Text>
      </View>
    </ScrollView>
  );
};


export default ProfileScreen;
