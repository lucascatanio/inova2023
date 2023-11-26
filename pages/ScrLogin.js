import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular_Italic,
} from '@expo-google-fonts/roboto';

export default function ScrLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [fontLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular_Italic,
  });

  if (!fontLoaded) {
    return null;
  }

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      Alert.alert('Successo!', 'Login realizado com sucesso!');
      navigation.navigate('ScrHome');
    } else {
      Alert.alert('Ocorreu um erro', 'Usuário ou Senha inválidos.');
    }
  };
  const scrSignIn = () => {
    navigation.navigate('ScrSignIn');
  };

  return (
    <LinearGradient
      style={styles.background_gradient}
      colors={['#8cd7e5', '#bce4b4']}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}>
      <View style={styles.view_main}>
        <Text style={styles.text_welcome}>BEM-VINDO</Text>
        <Image
          style={styles.image_ecodrop}
          source={require('../assets/ecodrop-logo.png')}
        />
        <View style={styles.view_text_input}>
          <AlternateEmailIcon style={{ color: '#004AAD' }} />
          <TextInput
            placeholder="Email"
            value={username}
            placeholderTextColor="#004AAD"
            onChangeText={(text) => setUsername(text)}
            style={styles.text_input}
          />
        </View>
        <View style={styles.view_text_input}>
          <LockOutlinedIcon style={{ color: '#004AAD' }} />
          <TextInput
            placeholder="Senha"
            value={password}
            placeholderTextColor="#004AAD"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.text_input}
          />
        </View>
        <View style={styles.view_gradient_button}>
          <LinearGradient
            style={styles.gradient_button}
            colors={['#1E98D4', '#5DE0E6']}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0.5, y: 0.5 }}>
            <TouchableOpacity
              Linear
              onPress={handleLogin}
              style={styles.button}>
              <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.view_text_sigIn_Forgot}>
            <TouchableOpacity>
              <Text style={styles.text_forgot_password}>Esqueci senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scrSignIn}>
              <Text style={styles.text_sigIn}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  background_gradient: {
    height: '100vh',
    minheight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_main: {
    flex: 1,
    alignItems: 'center',
  },
  text_welcome: {
    fontSize: '1rem',
    marginTop: '4rem',
    marginBottom: '8rem',
    color: '#2B92D6',
    fontWeight: 'bold',
    fontFamily: 'Roboto_900Black',
  },
  image_ecodrop: {
    width: 150,
    height: 128,
    marginBottom: '30%',
  },
  view_text_input: {
    width: '140%',
    height: '6%',
    borderColor: 'white',
    borderWidth: 0,
    marginBottom: '1rem',
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '1rem',
  },
  text_input: {
    marginLeft: '0.5rem',
    height: '100%',
    fontFamily: 'Roboto_400Regular_Italic'
  },
  view_gradient_button: {
    height: '30%',
    width: '140%',
  },
  gradient_button: {
    height: '20%',
    borderRadius: 40,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 40,
    alignItems: 'center',
  },
  button_text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  text_forgot_password: {
    marginRight: '1.5rem',
    color: '#004AAD',
    fontFamily: 'Roboto_400Regular_Italic',
  },
  text_sigIn: {
    color: '#004AAD',
    marginLeft: '1.5rem',
    fontFamily: 'Roboto_400Regular_Italic',
  },
  view_text_sigIn_Forgot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5rem',
  },
});
