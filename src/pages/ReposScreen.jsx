import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import ContainerRepos from '../components/ContainerRepos';
import { context } from '../components/context';

export default function ReposScreen() {
  const ctx = useContext(context);

  return (
    <View>
      {ctx?.userData?.public_repos ? <ContainerRepos /> : undefined}
      <StatusBar style="light" />
    </View>
  );
}
