import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import ContainerHome from '../components/ContainerHome';
import { context } from '../components/context';

export default function HomeScreen() {
  const ctx = useContext(context);

  return (
    <View>
      {ctx?.userData ? <ContainerHome /> : undefined}
      <StatusBar style="dark" />
    </View>
  );
}
