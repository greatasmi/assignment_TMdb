import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavHeader from '../../components/NavHeader';
import { RootStackParamList } from '../../types/interfaces';
import Details from '../../screens/Details';
import BookingScreen from '../../screens/BookingScreen';
import BottomTabNavigator from '../StackNavigator/BottomTabNavigator'; 
import BookingDetail from '../../screens/BookingDetail';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SearchScreen from '../../screens/SearchScreen';
import VideosScreen from '../../screens/VideosScreen';
import NowPlayingScreen from '../../screens/NowPlayingScreen';

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

      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: 'Search',
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="VideosScreen"
        component={VideosScreen}
        options={{
          headerTitle: 'Videos',
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="NowPlayingScreen"
        component={NowPlayingScreen}
        options={{
          headerTitle: 'Now Playing',
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
