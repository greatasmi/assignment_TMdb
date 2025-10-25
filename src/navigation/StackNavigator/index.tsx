// src/navigation/ScreensComponent.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import HomeNav from '../../components/HomeNav';
import Details from '../../screens/Details';
import NavHeader from '../../components/NavHeader';
import { RootStackParamList } from '../../types/interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTransparent: true,
          header: () => <HomeNav navigation={navigation} />, // ✅ fine now
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          headerTransparent: true,
          header: () => <NavHeader navigation={navigation} />, // ✅ fine now
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
