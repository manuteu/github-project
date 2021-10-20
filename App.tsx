import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { ContextProvider } from './src/components/context';

export default function App() {
  return (
    <View style={styles.container}>
      <ContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ContextProvider>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
});
