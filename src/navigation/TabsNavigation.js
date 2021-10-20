import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';

import HomeScreen from '../pages/HomeScreen';
import ReposScreen from '../pages/ReposScreen';
import FollowersScreen from '../pages/FollowersScreen';
import FollowingScreen from '../pages/FollowingScreen';

// const CustomTabBarButton = ({ onPress }) => (
//   <TouchableOpacity
//     style={{
//       top: -30,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: colors.dark_asphalt,
//       borderRadius: 35,
//     }}
//     onPress={onPress}
//   ></TouchableOpacity>
// );

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Repos" component={ReposScreen} />
      <Tab.Screen name="Followers" component={FollowersScreen} />
      <Tab.Screen name="Following" component={FollowingScreen} />
    </Tab.Navigator>
  );
}
