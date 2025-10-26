// // src/components/HomeNav.tsx
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../types/interfaces';

// // ✅ Define prop type
// interface HomeNavProps {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
// }

// const HomeNav: React.FC<HomeNavProps> = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.navContainer}>
//         <View>
//           <Text style={styles.logo}>MA</Text>
//           <Text style={styles.logoSM}>rchive</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeNav;

// const styles = StyleSheet.create({
//   safeArea: {
//     backgroundColor: '#fff',
//   },
//   navContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   logo: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#78B3F0',
//   },
//   logoSM: {
//     marginTop: -10,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#ff8c00',
//   },
// });
