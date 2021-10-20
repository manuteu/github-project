import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

import ContainerRepos from '../components/ContainerRepos';

export default function ReposScreen({ navigation }: any) {
  return (
    <View>
      <ContainerRepos onPress={() => navigation.replace('Tab')} />
      <StatusBar style="light" />
    </View>
  );
}
