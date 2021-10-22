import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ContainerFollowing from '../components/ContainerFollowing';
import { context } from '../components/context';

export default function FollowersScreen() {
  const ctx = useContext(context);

  return (
    <View>
      {ctx?.userData?.following ? <ContainerFollowing /> : undefined}
      <StatusBar style="light" />
    </View>
  );
}
