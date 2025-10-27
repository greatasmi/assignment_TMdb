import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import NowPlayingScreen from '../../screens/NowPlayingScreen'; // ✅ added 3rd screen
import Details from '../../screens/Details';
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
           })}
      />

      

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
