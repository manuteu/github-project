import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import { context } from '../../context';

export default function UserNumbers({}) {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <View style={(styles.viewContainer, { left: 8 })}>
        <Text style={styles.viewNumber}> {ctx?.infoFollower?.followers}</Text>
        <Text style={styles.followersText}>Seguidores</Text>
      </View>

      <View style={styles.viewContainer}>
        <Text style={styles.viewNumber}>{ctx?.infoFollower?.following}</Text>
        <Text style={styles.followingText}>Seguindo</Text>
      </View>

      <View style={styles.viewContainer}>
        <Text style={styles.viewNumber}>{ctx?.infoFollower?.public_repos}</Text>
        <Text style={styles.reposText}>Repos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    height: 96,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5252525D',
    alignItems: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  viewContainer: {},
  viewNumber: {
    paddingBottom: 2,
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
  },
  followersText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '300',
    right: 10,
  },
  followingText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '300',
    right: 14,
  },
  reposText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '300',
    right: 5,
  },
});
