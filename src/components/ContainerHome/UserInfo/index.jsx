import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YellowTab from '../../YellowTab';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <YellowTab />
        <Text style={styles.userName}>Matheus Rodrigues</Text>
      </View>
      <Text style={styles.userEmail}>matheusim27@hotmail.com</Text>
      <Text style={styles.userLocation}>Brasília/DF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -44,
  },
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
