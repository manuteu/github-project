import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YellowTab from '../../YellowTab';

import { context } from '../../context';

export default function UserBio() {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <YellowTab />
        <Text style={styles.title}>Bio</Text>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{ctx?.infoFollower?.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#FFF',
    right: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  bioContainer: {
    paddingHorizontal: 30,
  },
  bioText: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#FFF',
  },
});
