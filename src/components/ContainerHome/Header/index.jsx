import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { context } from '../../context';

export default function Header({ backToLogin }) {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <Text style={styles.username}>#{ctx.userData?.login}</Text>
      <TouchableOpacity style={styles.exitContainer} onPress={backToLogin}>
        <Text style={styles.textButton}>Sair</Text>
        <Ionicons
          name="exit-outline"
          size={24}
          color="#D03434"
          style={styles.iconButton}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: 130,
    backgroundColor: '#1F1F1F',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 17,
    lineHeight: 24,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  exitContainer: {
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 17,
    lineHeight: 26,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  iconButton: {
    paddingLeft: 12,
    marginRight: 18,
  },
});
