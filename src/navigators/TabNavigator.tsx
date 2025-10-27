import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import { FONTSIZE, SPACING } from '../constant/theme/theme';
import { Colors } from '../constant/Colors';
import Images from '../constant/Images';
import { View, StyleSheet, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: Colors.Pink } : {},
                ]}>
                <Image
                  source={Images.Video}
                  style={[styles.videoImage, { width: FONTSIZE.size_30, height: FONTSIZE.size_30, tintColor: Colors.White }]}
                />
                <Text style={styles.imageTitle}>Video</Text>
              </View>


            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: Colors.Pink } : {},
                ]}>
                <Image
                  source={Images.search}
                  style={[styles.videoImage, { width: FONTSIZE.size_30, height: FONTSIZE.size_30, tintColor: Colors.White }]}
                />
                <Text style={styles.imageTitle}>Search</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: Colors.Pink } : {},
                ]}>


                <Image
                  source={Images.tickets}
                  style={[styles.videoImage, { width: FONTSIZE.size_30, height: FONTSIZE.size_30, tintColor: Colors.White }]}
                />
                <Text style={styles.imageTitle}>Booking</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: Colors.Pink } : {},
                ]}>
                <Image
                  source={Images.avatar}
                  style={[styles.videoImage, { width: FONTSIZE.size_30, height: FONTSIZE.size_30, tintColor: Colors.White }]}
                />
                <Text style={styles.imageTitle}>Me</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: Colors.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },

  videoImage: {


  },

  imageTitle: {
    marginTop: 4,
    color: Colors.White,
    fontSize: FONTSIZE.size_12,
    textAlign: 'center',
  },
});

export default TabNavigator;
