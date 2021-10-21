import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import ContainerHome from '../components/ContainerHome';
import { context } from '../components/context';

export default function HomeScreen({ navigation }: any) {
  const ctx = useContext(context);
  return (
    <View>
      {ctx.userData?.name ? (
        <ContainerHome
          onPress={() => navigation.navigate('Login')}
          goToFollowersPage={() => navigation.navigate('Followers')}
          goToFollowingPage={() => navigation.navigate('Following')}
          goToReposPage={() => navigation.navigate('Repos')}
        />
      ) : undefined}
      <StatusBar style="dark" />
    </View>
  );
}
