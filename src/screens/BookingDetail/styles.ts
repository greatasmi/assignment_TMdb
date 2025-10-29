import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components/Responsive';


export default StyleSheet.create({
  
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
