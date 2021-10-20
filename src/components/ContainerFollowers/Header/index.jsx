import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { context } from '../../context';

export default function Header({ backToHome }) {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <Pressable onPress={backToHome} style={styles.iconContainer}>
        <AntDesign name="arrowleft" size={24} color="#FFF" />
      </Pressable>

      <Text style={styles.textHeader}>
        {ctx.userData?.followers} seguidores
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    height: 82,
    backgroundColor: '#1F1F1F',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignSelf: 'center',
    left: 20,
  },
  textHeader: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFF',
    marginRight: '36%',
    fontWeight: 'bold',
  },
});