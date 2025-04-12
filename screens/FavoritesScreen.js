// screens/FavoritesScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Alert } from 'react-native';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import EventCard from '../components/EventCard';
import styles from '../styles/styles';

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'events'), (snapshot) => {
      const favs = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(event => event.favorite === true);
      setFavorites(favs);
    });
    return unsub;
  }, []);

  const removeFavorite = async (id) => {
    Alert.alert('Remove from favorites?', '', [
      { text: 'Cancel' },
      {
        text: 'Yes',
        onPress: async () => await updateDoc(doc(db, 'events', id), { favorite: false })
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onDelete={() => removeFavorite(item.id)}
            onEdit={() => navigation.navigate('EditEvent', { eventId: item.id })}
            // onToggleFavorite={() => removeFavorite(item.id)}
          />
        )}
      />
    </View>
  );
}
