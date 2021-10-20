import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

export default function UserNumbers() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.viewContainer}>
        <Text style={styles.viewNumber}>32</Text>
        <Text style={styles.followersText}>Seguidores</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewContainer}>
        <Text style={styles.viewNumber}>32</Text>
        <Text style={styles.followingText}>Seguindo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewContainer}>
        <Text style={styles.viewNumber}>10</Text>
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
    justifyContent: 'space-evenly',
    backgroundColor: '#5252525D',
    alignItems: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  viewContainer: {
    // padding: 14,
  },
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
    right: 20,
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
