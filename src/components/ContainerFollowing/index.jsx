import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { context } from '../context';
import UserCard from './UserCard';
import Header from './Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ContainerFollowing() {
  const ctx = useContext(context);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={ctx?.following}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <View style={styles.borderCointaier} />}
        contentInset={{ bottom: 100, top: 2 }}
        renderItem={({ item }) => <UserCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    height: windowHeight,
    width: windowWidth,
  },
  borderCointaier: {
    borderWidth: 1,
    borderColor: '#7070705A',
  },
});
