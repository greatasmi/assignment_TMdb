import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import { useTheme } from '../../../constant/themes/useTheme';
import Images from '../../../constant/Images'; // your images index file

// Screens placeholders (replace with your actual screens)
import HomeScreen from '../../../screens/HomeScreen';
import DetailScreen from '../../../screens/Details';
import ProfileScreen from '../../../screens/ProfileScreen';
import SearchScreen from '../../../screens/SearchScreen';
import VideosScreen from '../../../screens/VideosScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useTheme();
  const colors = theme === 'light'
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
        tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Images.house}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Images.details}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
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
              source={Images.profile}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
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
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
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
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
