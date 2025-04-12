import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const { width, height } = Dimensions.get('window');

export default function StartScreen() {
  const videoRef = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={styles.containerStart}>
      <Video
        ref={videoRef}
        source={require('../assets/intro.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideoStart}
      />

      <View style={styles.overlayStart} />

      <View style={styles.contentStart}>
        <Text style={styles.titleStart}>Eventify</Text>
        <Text style={styles.descriptionStart}>Your smart event organizer - Plan, RSVP, Celebrate!</Text>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.replace('SignIn')}
        >
          <Text style={styles.buttonTextStart}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
