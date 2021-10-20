import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList } from 'react-native';
import Header from './Header';
import UserPicture from './UserPicture';
import UserInfo from './UserInfo';
import UserNumbers from './UserNumbers';
import UserBio from './UserBio';

export default function ContainerHome({ onPress }) {
  return (
    <View style={styles.container}>
      <Header backToLogin={onPress} />
      <View style={styles.subContainer}>
        <UserPicture />
        <ScrollView
          style={styles.scrollContainer}
          contentInset={{ bottom: 500 }}
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
    backgroundColor: '#292929',
    minHeight: 800,
    // position: 'absolute',
  },
  scrollContainer: {
    paddingTop: 60,
  },
});
