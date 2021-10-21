import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigation from '../navigation/TabsNavigation';
import LoginScreen from '../pages/LoginScreen';

import FollowersInfo from '../pages/FollowersInfo';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Info" component={FollowersInfo} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tab" component={TabsNavigation} />
    </Stack.Navigator>
  );
}
