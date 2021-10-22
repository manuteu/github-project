import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from './Header';
import UserPicture from './UserPicture';
import UserInfo from './UserInfo';
import UserNumbers from './UserNumbers';
import UserBio from './UserBio';

const windowHeight = Dimensions.get('window').height;

export default function ContainerHome() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subContainer}>
        <UserPicture />
        <ScrollView
          style={styles.scrollContainer}
          contentInset={{ bottom: 350 }}
          showsVerticalScrollIndicator={false}
        >
          <UserInfo />
          <UserNumbers />
          <UserBio />
        </ScrollView>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    // flex: 1,
    height: windowHeight,
    // width: windowWidth,
    backgroundColor: '#292929',
    // position: 'absolute',
  },
  scrollContainer: {
    paddingTop: 40,
  },
});
