import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { context } from '../context';
import Card from './Card';
import Header from './Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ContainerRepos() {
  const ctx = useContext(context);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={ctx.repos}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <View style={styles.borderCointaier} />}
        contentInset={{ bottom: 100 }}
        renderItem={({ item }) => (
          <Card
            data={item}
            // description={item?.description}
            // stargazers_count={item?.stargazers_count}
          />
        )}
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
