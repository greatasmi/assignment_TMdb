import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavHeader from '../../components/NavHeader';
import { RootStackParamList } from '../../types/interfaces';
import Details from '../../screens/Details';
import BookingScreen from '../../screens/BookingScreen';
import BottomTabNavigator from '../StackNavigator/BottomTabNavigator'; 
import BookingDetail from '../../screens/BookingDetail';
import HomeScreen from '../../screens/HomeScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      {/* Main Tabs */}
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home Screen',
          headerTransparent: true,
        }}
      />
      {/* Movie Details */}
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          headerTransparent: true,
          header: () => <NavHeader navigation={navigation} />,
        })}
      />

      {/* Booking */}
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          headerTitle: 'Book Tickets',
          headerTransparent: true,
        }}
      />


      <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{
          headerTitle: 'Book Tickets',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
