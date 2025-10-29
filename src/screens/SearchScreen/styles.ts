import { StyleSheet, Dimensions } from 'react-native';
import { hp, wp } from '../../components/Responsive';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  
  container: { flex: 1, padding: 16 },
  text: { fontSize: 16, textAlign: 'center', marginTop: 10, color: 'white' },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#f5f5f5',
  },
  poster: {
    width: (width - 48) / 2,
    height: (width - 48) * 0.75,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 8,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    opacity: 0.8,
  },
});
