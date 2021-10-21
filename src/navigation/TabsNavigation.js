import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import HomeScreen from '../pages/HomeScreen';
import ReposScreen from '../pages/ReposScreen';
import FollowersScreen from '../pages/FollowersScreen';
import FollowingScreen from '../pages/FollowingScreen';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
          fontWeight: '600',
          marginBottom: 10,
          marginTop: -6,
        },
        activeTintColor: '#3E3E3E',
        style: {
          // backgroundColor: 'rgba(0, 0, 0, 0.7)',
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="home"
                size={36}
                style={{
                  color: focused ? '#000000' : '#A5A5A5',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Repos"
        component={ReposScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="github"
                size={30}
                style={{
                  color: focused ? '#000000' : '#A5A5A5',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Followers"
        component={FollowersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="people-alt"
                size={34}
                style={{
                  color: focused ? '#000000' : '#A5A5A5',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={FollowingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="people-alt"
                size={34}
                style={{
                  color: focused ? '#000000' : '#A5A5A5',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
