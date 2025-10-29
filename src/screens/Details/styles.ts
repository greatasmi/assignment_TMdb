import { StyleSheet, Dimensions } from 'react-native';
import { hp, wp } from '../../components/Responsive';


const height = Dimensions.get('window').height;
export default StyleSheet.create({
  
  container: { flex: 1, alignItems: 'center', padding: 16 },
  imageContainer: { height: height / 2 },
  image: { height: '100%', width: '100%' },
  movieTitle: { fontSize: 22, fontWeight: 'bold', marginVertical: 8, textAlign: 'center' },
  genresContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  genre: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 4,
  },
  rating: { color: '#f39c12', marginTop: 16, fontWeight: '600' },
  tagline: { fontStyle: 'italic', color: '#999', marginVertical: 6 },
  overview: { textAlign: 'center', marginVertical: 10, paddingHorizontal: 8 },
  releaseDate: { fontSize: 14, color: '#555', marginBottom: 20 },
  playButton: {
    backgroundColor: '#e50914',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
  },
  playButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  bookingContainer: { alignItems: 'center', marginTop: 10 },
  priceText: { color: '#777', marginBottom: 6 },
  bookingButton: {
    backgroundColor: '#1c1c1c',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  

  safeArea: {
    flex: 1,
    backgroundColor: '#000', // dark background for movie details
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#ccc',
    fontSize: wp(4),
  },
  scrollContent: {
    paddingBottom: hp(5),
  },

  bookingButtonText: { color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' },
});
