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
import { Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import api from '../service/api';
import { context } from '../components/context';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const ctx = useContext(context);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [errorUserName, setErrorUserName] = useState('');

  // const validateInput = () => {
  //   if (userName == null) {
  //     setErrorUserName('Campo Obrigatório');
  //     return true;
  //   }
  // };

  async function getUserData() {
    if (userName !== '') {
      try {
        const response = await api.get(`/${userName}`);
        const repos = await api.get(`/${userName}/repos`);
        const followers = await api.get(`/${userName}/followers`);
        const following = await api.get(`/${userName}/following`);

        ctx.setUserData(response?.data);
        ctx.setRepos(repos?.data);
        ctx.setFollowers(followers?.data);
        ctx.setFollowing(following?.data);
      } catch (error) {
        console.log(error);
      }
      navigation.navigate('Tab');
    } else {
      setErrorUserName('Campo Obrigatório');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <Image
          source={require('../img/logotipo-do-github.png')}
          style={styles.logo}
        />
        <Input
          style={styles.input}
          inputContainerStyle={{
            borderColor: '#292929',
            width: '95%',
            alignSelf: 'center',
          }}
          errorMessage={errorUserName}
          errorStyle={styles.errorMensage}
          placeholder="Usuário"
          placeholderTextColor="#535353"
          value={userName}
          onChangeText={setUserName}
          autoCorrect={false}
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
    paddingLeft: 20,
    fontSize: 20,
    color: '#535353',
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFCE00',
    borderRadius: 12,
    height: 56,
    width: '90%',
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
  errorMensage: {
    fontSize: 16,
    color: '#EB2D2D',
    position: 'absolute',
    right: 30,
    top: 64,
  },
});
