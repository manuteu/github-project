import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native';

export default function UserPicture() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/74114950?v=4' }}
        style={styles.image}
      />
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
