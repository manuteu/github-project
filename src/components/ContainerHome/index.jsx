import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SectionList,
  Dimensions,
} from 'react-native';
import Header from './Header';
import UserPicture from './UserPicture';
import UserInfo from './UserInfo';
import UserNumbers from './UserNumbers';
import UserBio from './UserBio';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ContainerHome({
  onPress,
  goToFollowersPage,
  goToFollowingPage,
  goToReposPage,
}) {
  return (
    <View style={styles.container}>
      <Header backToLogin={onPress} />
      <View style={styles.subContainer}>
        <UserPicture />
        <ScrollView
          style={styles.scrollContainer}
          contentInset={{ bottom: 400 }}
          showsVerticalScrollIndicator={false}
        >
          <UserInfo />
          <UserNumbers
            goToFollowersPage={goToFollowersPage}
            goToFollowingPage={goToFollowingPage}
            goToReposPage={goToReposPage}
          />
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
    paddingTop: 50,
  },
});
