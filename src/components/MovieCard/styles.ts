import { StyleSheet } from 'react-native';
import { hp, wp } from '../Responsive';


export default StyleSheet.create({
  
  cardContainer: {
    height: 200,
    padding: 15,
    position: 'relative',
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 140,
    borderWidth: 2,
    borderColor: 'yellow',    
    borderRadius: 10,
  },
  movieTitle: {
    position: 'absolute',
    width: 80,
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
  },
});
