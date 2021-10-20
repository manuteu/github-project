import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { context } from '../../context';

export default function Header({ backToHome }) {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.iconContainer} onPress={backToHome}>
          <AntDesign name="arrowleft" size={24} color="#FFF" />
        </Pressable>
        <View style={styles.textHeaderContainer}>
          <Text style={styles.textHeader}>
            {ctx.userData?.public_repos} repositórios
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    height: 82,
    backgroundColor: '#1F1F1F',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
    position: 'absolute',
    right: '190%',
  },
  textHeaderContainer: {
    alignSelf: 'center',
  },
  textHeader: {
    fontSize: 18,
    color: '#FFF',
  },
});
