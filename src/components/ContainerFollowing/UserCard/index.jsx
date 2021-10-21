import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import YellowTab from '../../YellowTab';
import { AntDesign } from '@expo/vector-icons';

export default function UserCard({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <YellowTab />
        <Image source={{ uri: data?.avatar_url }} style={styles.image} />
        <Text style={styles.userName}>#{data?.login}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <AntDesign
            name="arrowright"
            size={20}
            color="#FFF"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FFF',
    left: -20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  userName: {
    paddingLeft: 14,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    // width: '100%',
    // right: 200,
  },
  icon: {
    // paddingRight: 20,
  },
});
