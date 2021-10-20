import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function YellowTab() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCE00',
    height: 42,
    width: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // position: 'absolute',
    left: -40,
  },
});
