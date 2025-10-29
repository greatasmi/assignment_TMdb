// src/navigation/StackNavigator/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { useTheme } from '../../../constant/themes/useTheme';
import Images from '../../../constant/Images';

// Screens
import HomeScreen from '../../../screens/HomeScreen';
import SearchScreen from '../../../screens/SearchScreen';
import VideosScreen from '../../../screens/VideosScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useTheme();
  const colors =
    theme === 'light'
      ? { background: '#FFFFFF', text: '#000000' }
      : { background: '#000000', text: '#FFFFFF' };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.text,
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: '#808080',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Images.house}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Images.searching}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={VideosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Images.Video}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Images.avatar}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
