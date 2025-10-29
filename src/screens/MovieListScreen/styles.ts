import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components/Responsive';


export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailBox: {
    margin: 15,
    padding: 15,
    backgroundColor: "#fff5f8",
    borderRadius: 16,
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  overview: {
    fontSize: 14,
    color: "#333",
  },
});
