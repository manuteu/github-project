import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import ContainerInfoFollowers from '../components/ContainerInfoFollowers';

export default function FollowersInfo() {
  return (
    <View>
      <ContainerInfoFollowers />
      <StatusBar style="light" />
    </View>
  );
}
