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
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },

  searchSection: {
    marginTop: hp(1),
    paddingHorizontal: wp(3),
  },
  section: {
    marginTop: hp(3),
    paddingHorizontal: wp(3),
  },
  title: {
    fontSize: wp(5),
    fontWeight: '700',
    marginBottom: hp(1),
  },

  header: {
    fontSize: wp(5),
    marginVertical: hp(2),
    fontWeight: '600',
  },

  
});