import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import styles from '../styles/styles';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please fill all fields');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Main');
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Make sure this image exists!
      style={styles.backgroundSign}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.overlaySign}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.containerSign}>
          <Text style={styles.titleSign}>Welcome Back</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            style={styles.inputSign}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputSign}
          />
          <TouchableOpacity style={styles.buttonSign} onPress={handleLogin}>
            <Text style={styles.buttonTextSign}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkTextSign}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
