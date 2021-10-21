import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { context } from '../../context';

export default function Header({ backToLogin, backToHome }) {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <Pressable onPress={backToHome} style={styles.iconBack}>
        <AntDesign name="arrowleft" size={24} color="#FFF" />
      </Pressable>
      <Text style={styles.username}>#{ctx.userData?.login}</Text>
      <TouchableOpacity style={styles.exitContainer} onPress={backToLogin}>
        <Text style={styles.textButton}>Salvar</Text>
        <Ionicons
          name="enter-outline"
          size={24}
          color="#5CBC29"
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
    left: '24%',
  },
  iconBack: {
    left: 20,
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
    paddingLeft: 4,
    marginRight: 18,
  },
});
