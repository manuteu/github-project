import React from 'react';
import { View, Text } from 'react-native';

import ContainerFollowing from '../components/ContainerFollowing';

export default function FollowersScreen({ navigation }: any) {
  return (
    <View>
      <ContainerFollowing onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
