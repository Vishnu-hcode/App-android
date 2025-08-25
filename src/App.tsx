/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import "../global.css"; // Import global styles for NativeWind
import {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import { customHeaderOptions } from "./components/CustomHomeHeader";
import HomeStack from './navigation/HomeStack';
import ProfileStack from './navigation/ProfileStack';
import LoginStack from './navigation/LoginStack';
import AnalyticsScreen from './screens/AnalyticsScreen';

const Tab= createBottomTabNavigator();

const RootStack = createNativeStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (route.name === 'Analytics') {
        iconName = focused ? 'create' : 'create-outline'; // ✏️ pen/paper icon
      } else {
        iconName = focused ? 'settings' : 'settings-outline';
      }

      return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{ headerShown: false ,
    //       headerStyle: {
    //   backgroundColor: '#1a2f6b',
    //   height: 120, // make header taller
    // },
    // headerTitleStyle: {
    //   color: '#fff',
    //   fontSize: 20,
    //   fontWeight: 'bold',
    // },
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}




const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {/* 🔹 Start with Login Flow */}
            <RootStack.Screen name="LoginFlow" component={LoginStack} />

            {/* 🔹 After successful login, go to MainApp */}
            <RootStack.Screen name="MainApp" component={MainApp} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export type RootStackParamList = {
  MobileNumber: undefined;
  Otp: { mobile: string };
   LoginStack: undefined;  // contains Login & Otp screens
   MainApp: undefined;   // contains Home and other screens
};




 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center',     // centers horizontally
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  link: {
  fontSize: 18,
  color: 'blue',
  marginTop: 20,
}
});
