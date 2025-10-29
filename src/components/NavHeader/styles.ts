import { StyleSheet } from 'react-native';
import { hp, wp } from '../Responsive';


export default StyleSheet.create({
  
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  backButton: {
    marginRight: wp(3),
  },
  backText: {
    fontSize: wp(4),
    fontWeight: '500',
  },
  logo: {
    width: wp(10),
    height: wp(10),
    marginRight: wp(2),
  },
  title: {
    fontSize: wp(5),
    fontWeight: '700',
  },
  themeButton: {
    marginLeft: 'auto',
    padding: wp(1),
  },
  themeIcon: {
    width: wp(6),
    height: wp(6),
  },
});
