import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/styles';
import eventImages from '../components/eventImages';

export default function EventCard({ event, onEdit, onDelete, onToggleFavorite }) {
  const imageSource = eventImages[event.eventType] || null;

  const formattedDate = new Date(event.date).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <View style={styles.card}>
      {imageSource && (
        <Image
          source={imageSource}
          style={styles.eventImage}
          resizeMode="cover"
        />
      )}

      {/* Location and Date */}
      <Text style={styles.eventLocationTime}>
        {event.location} - {formattedDate}
      </Text>

      {/* Title and Icons Row */}
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>{event.title}</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={onToggleFavorite}>
            <FontAwesome
              name={event.favorite ? 'heart' : 'heart-o'}
              size={20}
              color={event.favorite ? '#a629f5' : '#7b6fbc'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onEdit}>
            <Feather name="edit" size={20} color="#7b6fbc" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <MaterialIcons name="delete-outline" size={22} color="#7b6fbc" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
