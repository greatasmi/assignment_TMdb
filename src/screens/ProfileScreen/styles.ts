import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components/Responsive';


export default StyleSheet.create({
 
  container: {
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
  },
  userStatus: {
    fontSize: 14,
    marginTop: 4,
  },
  bookingsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  bookingCard: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  bookingText: {
    fontSize: 14,
    marginTop: 4,
  },
  noBooking: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  statusContainer: {
    marginTop: 20,
  },
  statusText: {
    fontSize: 14,
    marginTop: 4,
  },
});