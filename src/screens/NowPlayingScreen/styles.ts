import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components/Responsive';


export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  topImage: {
    width: '100%',
    height: 220,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    marginLeft: 15,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  card: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    margin: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  date: {
    color: '#aaa',
    fontSize: 12,
  },
  rating: {
    color: '#ffcc00',
    fontSize: 13,
    marginTop: 4,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
  },
});
