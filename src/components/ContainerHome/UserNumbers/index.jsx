import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import { context } from '../../context';

export default function UserNumbers() {
  const ctx = useContext(context);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={(styles.viewContainer, { left: 8 })}
        onPress={() => navigation.navigate('Followers')}
      >
        <Text style={styles.viewNumber}> {ctx?.userData?.followers}</Text>
        <Text style={styles.followersText}>Seguidores</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => navigation.navigate('Following')}
      >
        <Text style={styles.viewNumber}>{ctx?.userData?.following}</Text>
        <Text style={styles.followingText}>Seguindo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => navigation.navigate('Repos')}
      >
        <Text style={styles.viewNumber}>{ctx?.userData?.public_repos}</Text>
        <Text style={styles.reposText}>Repos</Text>
      </TouchableOpacity>
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
