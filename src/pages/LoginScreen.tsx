import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import api from '../service/api';
import { context } from '../components/context';

export default function LoginScreen({ navigation }: any) {
  const ctx = useContext(context);
  const [userName, setUserName] = useState('');

  async function getUserData() {
    try {
      const response = await api.get(`/${userName}`);
      const repos = await api.get(`/${userName}/repos`);
      const followers = await api.get(`/${userName}/followers`);
      const following = await api.get(`/${userName}/following`);

      ctx.setUserData(response.data);
      ctx.setRepos(repos.data);
      ctx.setFollowers(followers.data);
      ctx.setFollowing(following.data);
    } catch (error) {
      console.log(error);
    }
    navigation.replace('Tab');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}> */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <Image
          source={require('../img/logotipo-do-github.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#535353"
          value={userName}
          onChangeText={setUserName}
        />
        <TouchableOpacity style={styles.button} onPress={getUserData}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Entrar</Text>
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={styles.buttonIcon}
            />
          </View>
        </TouchableOpacity>
        <StatusBar style="inverted" />
      </KeyboardAvoidingView>
      {/* </View> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#292929',
  },
  logo: {
    width: 110,
    height: 110,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: 56,
    width: '90%',
    paddingLeft: 20,
    fontSize: 20,
    color: '#535353',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#FFCE00',
    borderRadius: 12,
    height: 56,
    width: '90%',
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  buttonIcon: {
    paddingLeft: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
