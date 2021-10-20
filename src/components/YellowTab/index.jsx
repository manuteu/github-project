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
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    // position: 'absolute',
    left: -38,
  },
});
