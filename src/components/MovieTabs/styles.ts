import { StyleSheet } from 'react-native';
import { hp, wp } from '../Responsive';


export default StyleSheet.create({
 
  scrollContainer: {
    marginVertical: 10,
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  tabWrapper: {
    marginRight: 10,
  },
  gradientBorder: {
    borderRadius: 25,
    padding: 2,
  },
  innerTab: {
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 13,
    fontWeight: "600",
    maxWidth: 140,
  },
  emptyText: {
    marginLeft: 10,
    fontSize: 14,
    opacity: 0.6,
  },
});