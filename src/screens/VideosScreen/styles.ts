import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components/Responsive';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  webView: { 
    flex: 1, 
    width: '100%', 
    height: '100%' 
  },

  text: { 
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 16 
  },

  // Thumbnail container
  thumbnailContainer: {
    width: '100%',
    height: hp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  // YouTube thumbnail image
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  // Overlay with play button
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Play text below the icon
  playText: {
    color: '#ffcc00',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
