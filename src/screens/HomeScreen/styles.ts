import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components/Responsive';


export default StyleSheet.create({
  
  container: {
    flex: 1,
    padding: wp(4),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  themeButton: {
    padding: 6,
    borderRadius: 20,
  },
  themeIcon: {
    width: wp(7),
    height: wp(7),
    resizeMode: 'contain',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: wp(4),
  },
  header: {
    fontSize: wp(5),
    marginVertical: hp(2),
    fontWeight: '600',
  },
  section: {
    marginBottom: hp(6),
  },
  title: {
    fontSize: wp(4),
    marginBottom: hp(4),
    fontWeight: '600',
  },
  searchSection: {
    marginVertical: hp(2),
  },
});