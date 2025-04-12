import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Button, Alert, TouchableOpacity, Platform, Image, Switch
} from 'react-native';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
// import * as ImagePicker from 'expo-image-picker';
import { db } from '../firebase';
import styles from '../styles/styles';
import moment from 'moment';

const eventTypes = [
  'Birthday', 'Anniversary', 'Meeting', 'Conference',
  'Wedding', 'Webinar', 'Workshop', 'Party',
  'Networking', 'Fundraiser'
];

export default function CreateEditEventScreen({ route, navigation }) {
  const event = route.params?.event;

  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [location, setLocation] = useState(event?.location || '');
  const [date, setDate] = useState(event?.date ? new Date(event.date) : new Date());
  const [time, setTime] = useState('');
  const [eventType, setEventType] = useState(event?.eventType || '');
  const [guestCount, setGuestCount] = useState(event?.guestCount?.toString() || '');
  const [rsvpRequired, setRsvpRequired] = useState(event?.rsvpRequired || false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [dateInput, setDateInput] = useState(event?.date ? moment(event.date).format('MMMM D, YYYY') : '');
const [timeInput, setTimeInput] = useState(event?.date ? moment(event.date).format('HH:mm') : '');


  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };
  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) setTime(selectedTime);
  };

//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       return Alert.alert("Permission denied", "We need access to your gallery to select an image.");
//     }
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 0.5,
//     });

//     if (!result.canceled && result.assets.length > 0) {
//       setImageUri(result.assets[0].uri);
//     }
//   };

const handleSubmit = async () => {
  if (!title || !eventType) return Alert.alert('Please enter all required fields');
  const combinedDateTimeString = `${dateInput} ${timeInput}`;
const parsedDate = moment(combinedDateTimeString, 'MMMM D, YYYY HH:mm', true);

if (!parsedDate.isValid()) {
  return Alert.alert('Invalid Date or Time', 'Please enter a valid date and time.');
}


  const eventData = {
    title,
    description,
    location,
    date: parsedDate.toDate().toISOString(),
    eventType,
    guestCount: parseInt(guestCount) || 0,
    rsvpRequired,
    favorite: event?.favorite || false
  };
  
  try {
    if (event) {
      // Update existing event
      await updateDoc(doc(db, 'events', event.id), eventData);
    } else {
      // Create new event
      await addDoc(collection(db, 'events'), eventData);
      
      // Reset form fields after successful creation
      setTitle('');
      setDescription('');
      setLocation('');
      setDate(new Date());
      setEventType('');
      setGuestCount('');
      setRsvpRequired(false);
    }

    navigation.goBack(); // Navigate only after resetting if needed
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Event Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      {/* Event Type */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.dropdown}>
        <Text style={styles.dropdownText}>{eventType || 'Select Event Type'}</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          {eventTypes.map((type, index) => (
            <TouchableOpacity key={index} onPress={() => {
              setEventType(type);
              setModalVisible(false);
            }}>
              <Text style={styles.modalItem}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      <TextInput
  placeholder="Enter Date (e.g., April 11, 2025)"
  value={dateInput}
  onChangeText={setDateInput}
  style={styles.input}
/>

<TextInput
  placeholder="Enter Time (e.g., 14:30)"
  value={timeInput}
  onChangeText={setTimeInput}
  style={styles.input}
/>


      {/* Guest Count */}
      <TextInput
        placeholder="Number of Guests"
        keyboardType="numeric"
        value={guestCount}
        onChangeText={setGuestCount}
        style={styles.input}
      />

      {/* RSVP Switch */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
        <Text style={{ marginRight: 10 }}>RSVP Required?</Text>
        <Switch value={rsvpRequired} onValueChange={setRsvpRequired} />
      </View>

      {/* //Image Upload
      <Button title="Choose Image" onPress={pickImage} />
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: '100%', height: 200, marginVertical: 10, borderRadius: 10 }}
          resizeMode="cover"
        />
      ) : null} */}
<View style={{ alignItems: 'center' }}>
  <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
    <Text style={styles.submitButtonText}>
      {event ? 'Update Event' : 'Create Event'}
    </Text>
  </TouchableOpacity>
</View>



    </View>
  );
}