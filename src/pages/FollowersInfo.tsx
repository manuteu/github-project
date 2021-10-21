import React from 'react';
import { View, Text } from 'react-native';

import ContainerInfoFollowers from '../components/ContainerInfoFollowers';

export default function FollowersInfo({ navigation }: any) {
  return (
    <View>
      <ContainerInfoFollowers
        onPress={() => navigation.navigate('Home')}
        backToHome={() => navigation.navigate('Home')}
      />
    </View>
  );
}
