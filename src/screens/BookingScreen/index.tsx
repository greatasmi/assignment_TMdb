import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookingScreen = ({ navigation, route }: any) => {
  const seatPrice = 5.0;

  const [rows] = useState(8);
  const [columns] = useState(6);
  const [seatLayout, setSeatLayout] = useState<any[][]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate seats
  const generateSeats = () => {
    const layout = [];
    let seatNum = 1;
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < columns; c++) {
        row.push({
          number: seatNum,
          taken: Math.random() < 0.2, // 20% seats taken randomly
          selected: false,
        });
        seatNum++;
      }
      layout.push(row);
    }
    return layout;
  };

  useEffect(() => {
    setSeatLayout(generateSeats());
  }, []);

  const toggleSeat = (rIndex: number, cIndex: number) => {
    const temp = [...seatLayout];
    const seat = temp[rIndex][cIndex];
    if (seat.taken) return;

    seat.selected = !seat.selected;
    setSeatLayout(temp);

    if (seat.selected) {
      setSelectedSeats([...selectedSeats, seat.number]);
    } else {
      setSelectedSeats(selectedSeats.filter(n => n !== seat.number));
    }
  };

  const totalPrice = selectedSeats.length * seatPrice;

  // Generate next 7 days
  const generateDates = () => {
    const today = new Date();
    const dates = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) {
      const next = new Date(today);
      next.setDate(today.getDate() + i);
      dates.push({
        label: dayNames[next.getDay()] + ' ' + next.toDateString().slice(4, 10),
        value: next.toISOString(),
      });
    }
    return dates;
  };

  const dates = generateDates();
  const times = ['10:00 AM', '12:30 PM', '3:00 PM', '6:00 PM', '9:00 PM'];

  // Confirm booking
  const confirmBooking = async () => {
    if (!selectedSeats.length || !selectedDate || !selectedTime) {
      ToastAndroid.show('Select seats, date and time!', ToastAndroid.SHORT);
      return;
    }

    const bookingData = {
      id: Date.now(),
      movieTitle: route?.params?.title || 'Unknown Movie',
      seats: selectedSeats,
      date: selectedDate,
      time: selectedTime,
      totalPrice,
    };

    try {
      const existing = await AsyncStorage.getItem('bookings');
      const bookings = existing ? JSON.parse(existing) : [];
      bookings.push(bookingData);
      await AsyncStorage.setItem('bookings', JSON.stringify(bookings));

      ToastAndroid.show('🎟 Booking confirmed!', ToastAndroid.SHORT);

      // Navigate to Ticket/Booking detail screen
      navigation.navigate('BookingDetail');
    } catch (error) {
      console.error('Error storing booking', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🎬 Seat Booking</Text>

      {/* SEAT GRID */}
      <View style={styles.screenBox}>
        <Text style={styles.screenText}>Screen This Way</Text>
      </View>
      {seatLayout.map((row, rIndex) => (
        <View key={rIndex} style={styles.row}>
          {row.map((seat, cIndex) => (
            <TouchableOpacity
              key={seat.number}
              onPress={() => toggleSeat(rIndex, cIndex)}
            >
              <Icon
                name="seat"
                size={28}
                style={[
                  styles.seatIcon,
                  seat.taken && styles.takenSeat,
                  seat.selected && styles.selectedSeat,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {/* SEAT LEGEND */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <Icon name="seat" size={22} color="#aaa" />
          <Text style={styles.legendText}>Available</Text>
        </View>
        <View style={styles.legendItem}>
          <Icon name="seat" size={22} color="#ff9800" />
          <Text style={styles.legendText}>Selected</Text>
        </View>
        <View style={styles.legendItem}>
          <Icon name="seat" size={22} color="#444" />
          <Text style={styles.legendText}>Taken</Text>
        </View>
      </View>

      {/* DATE PICKER */}
      <Text style={styles.sectionTitle}>Select Date</Text>
      <FlatList
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedDate(item.value)}
            style={[
              styles.dateBox,
              selectedDate === item.value && styles.selectedBox,
            ]}
          >
            <Text style={styles.dateText}>{item.label}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.value}
      />

      {/* TIME PICKER */}
      <Text style={styles.sectionTitle}>Select Time</Text>
      <FlatList
        data={times}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.timeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedTime(item)}
            style={[
              styles.timeBox,
              selectedTime === item && styles.selectedBox,
            ]}
          >
            <Text style={styles.timeText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />

      {/* PRICE + CONFIRM BUTTON */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Total:</Text>
          <Text style={styles.priceValue}>${totalPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={confirmBooking}
        >
          <Text style={styles.confirmText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#111' },
  heading: { color: '#fff', fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 10 },
  screenBox: { backgroundColor: '#333', marginVertical: 10, padding: 6, borderRadius: 8 },
  screenText: { color: '#bbb', textAlign: 'center', fontSize: 12 },
  row: { flexDirection: 'row', justifyContent: 'center', marginVertical: 4 },
  seatIcon: { color: '#aaa', margin: 4 },
  takenSeat: { color: '#444' },
  selectedSeat: { color: '#ff9800' },
  legend: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  legendItem: { alignItems: 'center' },
  legendText: { color: '#aaa', fontSize: 12 },
  sectionTitle: { color: '#fff', fontSize: 16, marginVertical: 8, fontWeight: '600' },
  dateList: { paddingVertical: 6 },
  dateBox: { padding: 10, backgroundColor: '#222', borderRadius: 8, marginRight: 10 },
  timeList: { paddingVertical: 6 },
  timeBox: { padding: 10, backgroundColor: '#222', borderRadius: 8, marginRight: 10 },
  selectedBox: { backgroundColor: '#ff9800' },
  dateText: { color: '#fff' },
  timeText: { color: '#fff' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 },
  priceLabel: { color: '#bbb', fontSize: 14 },
  priceValue: { color: '#fff', fontSize: 18, fontWeight: '700' },
  confirmButton: { backgroundColor: '#ff9800', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  confirmText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
