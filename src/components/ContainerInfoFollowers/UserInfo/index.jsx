import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YellowTab from '../../YellowTab';

import { context } from '../../context';

export default function UserInfo() {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <YellowTab />
        <Text style={styles.userName}>{ctx?.infoFollower?.name}</Text>
      </View>
      <Text style={styles.userEmail}>{ctx?.infoFollower?.email}</Text>
      <Text style={styles.userLocation}>{ctx?.infoFollower?.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
    textTransform: 'uppercase',
    right: 20,
  },
  userEmail: {
    paddingLeft: 30,
    fontSize: 18,
    color: '#FFF',
    fontWeight: '300',
  },
  userLocation: {
    paddingLeft: 30,
    fontSize: 18,
    color: '#FFF',
    fontWeight: '300',
    lineHeight: 24,
  },
});
