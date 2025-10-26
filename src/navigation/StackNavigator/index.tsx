import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import NowPlayingScreen from '../../screens/NowPlayingScreen'; // ✅ added 3rd screen
import Details from '../../screens/Details';
// import HomeNav from '../../components/HomeNav';
import NavHeader from '../../components/NavHeader';
import { RootStackParamList } from '../../types/interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {/* 🏠 Home Screen */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          // header: () => <HomeNav navigation={navigation} />, // custom header
        })}
      />

      {/* 🎬 Now Playing Screen */}
      {/* <Stack.Screen
        name="NowPlayingScreen"
        component={NowPlayingScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          header: () => <NavHeader navigation={navigation} />, // same custom header
        })}
      /> */}

      {/* 📄 Details Screen */}
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          headerTransparent: true,
          header: () => <NavHeader navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
