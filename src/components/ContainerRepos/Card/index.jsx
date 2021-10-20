import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import YellowTab from '../../YellowTab';

export default function Card({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <YellowTab />
        <Text style={styles.title}>{data.name}</Text>
      </View>

      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.starContainer}>
          <FontAwesome name="star-o" size={20} color="#FFCE00" />
          <Text style={styles.starText}>{data.stargazers_count}</Text>
        </View>
        <View style={styles.lockIcons}>
          <Feather name="unlock" size={20} color="#63BF1F" />
          <Feather
            name="lock"
            size={20}
            color="#CC042A"
            style={styles.iconPaddign}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    right: 20,
  },
  description: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: '300',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    width: '80%',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 14,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starText: {
    color: '#FFF',
    fontSize: 15,
  },
  lockIcons: {
    flexDirection: 'row',
  },
  iconPaddign: {
    paddingLeft: 10,
  },
});
