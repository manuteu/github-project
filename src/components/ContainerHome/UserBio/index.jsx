import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YellowTab from '../../YellowTab';

export default function UserBio() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <YellowTab />
        <Text style={styles.title}>Bio</Text>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur.
        </Text>
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
