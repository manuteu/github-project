import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigation from '../navigation/TabsNavigation';
import LoginScreen from '../pages/LoginScreen';

import HomeScreen from '../pages/HomeScreen';
import ReposScreen from '../pages/ReposScreen';
import FollowersScreen from '../pages/FollowersScreen';
import FollowingScreen from '../pages/FollowingScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Repos" component={ReposScreen} />
      <Stack.Screen name="Followers" component={FollowersScreen} />
      <Stack.Screen name="Following" component={FollowingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tab" component={TabsNavigation} />
    </Stack.Navigator>
  );
}
