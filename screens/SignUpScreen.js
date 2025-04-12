// screens/SignUpScreen.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import styles from '../styles/styles'; // assuming same styles used in SignIn

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Please fill all fields');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace('SignIn');

    } catch (error) {
      Alert.alert('Sign Up Error', error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/secondBackground.jpg')}
      style={styles.backgroundSign}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.overlaySign}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.containerSign}>
          <Text style={styles.titleSign}>Create Account</Text>
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
          <TouchableOpacity style={styles.buttonSign} onPress={handleSignUp}>
            <Text style={styles.buttonTextSign}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.linkTextSign}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
