import React from 'react';
import { View, Text } from 'react-native';

import ContainerFollowers from '../components/ContainerFollowers';

export default function FollowersScreen({ navigation }: any) {
  return (
    <View>
      <ContainerFollowers onPress={() => navigation.replace('Tab')} />
    </View>
  );
}
