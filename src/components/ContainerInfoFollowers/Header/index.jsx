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
import { useNavigation } from '@react-navigation/native';
import api from '../../../service/api';

export default function Header() {
  const ctx = useContext(context);
  const navigation = useNavigation();

  async function handleUserName() {
    try {
      const info = await api.get(`/${ctx?.infoFollower?.login}`);
      const repos = await api.get(`/${ctx?.infoFollower?.login}/repos`);
      const followers = await api.get(`/${ctx?.infoFollower?.login}/followers`);
      const following = await api.get(`/${ctx?.infoFollower?.login}/following`);

      ctx.setUserData(info?.data);
      ctx.setRepos(repos?.data);
      ctx.setFollowers(followers?.data);
      ctx.setFollowing(following?.data);

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Followers')}
        style={styles.iconBack}
      >
        <AntDesign name="arrowleft" size={24} color="#FFF" />
      </Pressable>
      <Text style={styles.username}>#{ctx?.infoFollower?.login}</Text>
      <TouchableOpacity style={styles.exitContainer} onPress={handleUserName}>
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
    paddingTop: 35,
    height: 140,
    backgroundColor: '#1F1F1F',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 17,
    lineHeight: 24,
    color: '#FFF',
    fontWeight: 'bold',
    left: '28%',
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
