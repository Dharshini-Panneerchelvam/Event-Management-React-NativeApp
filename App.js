import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import DashboardScreen from './screens/DashboardScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CreateEditEventScreen from './screens/CreateEditEventScreen';
import StartScreen from './screens/StartScreen';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from './firebase';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator({ navigation }) {
  return (
<Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: true,
    headerStyle: {
      backgroundColor: '#7b6fbc', // 💙 header background color
    },
    headerTintColor: '#fff', // 🧾 text and icon color in header
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    tabBarStyle: {
      backgroundColor: '#7b6fbc', // 🔵 bottom nav bar background color
      borderTopWidth: 0,
      elevation: 8, // shadow for Android
    },
    tabBarActiveTintColor: '#fff', // active icon color
    tabBarInactiveTintColor: '#999', // inactive icon color
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Dashboard') {
        iconName = 'dashboard';
      } else if (route.name === 'Favorites') {
        iconName = 'favorite';
      } else if (route.name === 'CreateEvent') {
        iconName = 'event';
      }

      return <MaterialIcons name={iconName} size={size} color={color} />;
    },
  })}
>

      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Event Dashboard',
          headerRight: () => (
            <TouchableOpacity
              onPress={async () => {
                await auth.signOut();
                navigation.replace('SignIn');
              }}
              style={{ marginRight: 16 }}
            >
              <MaterialIcons name="logout" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'My Favorites' }}
      />
      <Tab.Screen
        name="CreateEvent"
        component={CreateEditEventScreen}
        options={{ title: 'Create Event' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen
  name="CreateEditEvent"
  component={CreateEditEventScreen}
  options={({ route }) => ({
    headerShown: true,
    title: route.params?.event ? 'Edit Event' : 'Create Event',
  })}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
