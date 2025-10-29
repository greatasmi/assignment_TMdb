import { StyleSheet } from 'react-native';
import { hp, wp } from '../../components/Responsive';


export default StyleSheet.create({
  
  container: { padding: 16, backgroundColor: '#111' },
  heading: { color: '#fff', fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 10 },
  screenBox: { backgroundColor: '#333', marginVertical: 10, padding: 6, borderRadius: 8 },
  screenText: { color: '#bbb', textAlign: 'center', fontSize: 12 },
  row: { flexDirection: 'row', justifyContent: 'center', marginVertical: 4 },
  seatIcon: { color: '#aaa', margin: 4 },
  takenSeat: { color: '#444' },
  selectedSeat: { color: '#ff9800' },
  legend: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  legendItem: { alignItems: 'center' },
  legendText: { color: '#aaa', fontSize: 12 },
  sectionTitle: { color: '#fff', fontSize: 16, marginVertical: 8, fontWeight: '600' },
  dateList: { paddingVertical: 6 },
  dateBox: { padding: 10, backgroundColor: '#222', borderRadius: 8, marginRight: 10 },
  timeList: { paddingVertical: 6 },
  timeBox: { padding: 10, backgroundColor: '#222', borderRadius: 8, marginRight: 10 },
  selectedBox: { backgroundColor: '#ff9800' },
  dateText: { color: '#fff' },
  timeText: { color: '#fff' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 },
  priceLabel: { color: '#bbb', fontSize: 14 },
  priceValue: { color: '#fff', fontSize: 18, fontWeight: '700' },
  confirmButton: { backgroundColor: '#ff9800', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  confirmText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
