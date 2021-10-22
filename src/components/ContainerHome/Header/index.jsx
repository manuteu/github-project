import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { context } from '../../context';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const ctx = useContext(context);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.username}>#{ctx?.userData?.login}</Text>
      <TouchableOpacity
        style={styles.exitContainer}
        onPress={() => navigation.navigate('Login')}
      >
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
    paddingTop: 34,
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
    paddingLeft: 8,
    marginRight: 18,
  },
});
