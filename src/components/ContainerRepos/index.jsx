import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import Header from './Header';

export default function ContainerRepos({ onPress }) {
  return (
    <View>
      <Header backToHome={onPress} />
      <Card />
    </View>
  );
}
