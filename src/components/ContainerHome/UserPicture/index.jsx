import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native';

import { context } from '../../context';

export default function UserPicture() {
  const ctx = useContext(context);
  return (
    <View style={styles.container}>
      <Image source={{ uri: ctx?.userData?.avatar_url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // justifyContent: 'center',
    alignSelf: 'center',
    top: -60,
    marginBottom: -60,
    borderRadius: 60,
  },
  image: {
    width: 120,
    height: 120,
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 60,
  },
});
