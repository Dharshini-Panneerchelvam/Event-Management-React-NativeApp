// screens/DashboardScreen.js
import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import EventCard from '../components/EventCard';
import styles from '../styles/styles';

export default function DashboardScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'events'), (snapshot) => {
      setEvents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => navigation.replace('SignIn'));
  };

  const deleteEvent = (id) => {
    Alert.alert('Confirm', 'Delete event?', [
      { text: 'Cancel' },
      {
        text: 'Yes',
        onPress: () => deleteDoc(doc(db, 'events', id)),
      }
    ]);
  };

  const toggleFavorite = async (event) => {
    await updateDoc(doc(db, 'events', event.id), {
      favorite: !event.favorite
    });
  };

  return (
    <View style={styles.container}>
      {/* <Button title="Create Event" onPress={() => navigation.navigate('CreateEditEvent')} />
      <Button title="Favorites" onPress={() => navigation.navigate('Favorites')} /> */}
      {/* <Button title="Logout" onPress={handleLogout} /> */}
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onEdit={() => navigation.navigate('CreateEditEvent', { event: item })}
            onDelete={() => deleteEvent(item.id)}
            onToggleFavorite={() => toggleFavorite(item)}
          />
        )}
      />
    </View>
  );
}
