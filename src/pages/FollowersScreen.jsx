import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ContainerFollowers from '../components/ContainerFollowers';
import { context } from '../components/context';

export default function FollowersScreen() {
  const ctx = useContext(context);

  return (
    <View>
      {ctx?.userData?.followers ? <ContainerFollowers /> : undefined}
      <StatusBar style="light" />
    </View>
  );
}
