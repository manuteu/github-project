import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import ContainerHome from '../components/ContainerHome';

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <ContainerHome onPress={() => navigation.replace('Login')} />
      <StatusBar style="dark" />
    </View>
  );
}
