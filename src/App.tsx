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

const Tab= createBottomTabNavigator();

const RootStack = createNativeStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName =
            route.name === 'Home'
              ? focused ? 'home' : 'home-outline'
              : route.name === 'Profile'
                ? focused ? 'person' : 'person-outline'
                : focused ? 'settings' : 'settings-outline';

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
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>
//     </View>
//   );
// }



// function ProfileScreen({route}: { route: any }) {
//   const { username,age} = route.params || {};
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Username:{username}</Text>
//       <Text style={styles.text}>Age:{age}</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Settings Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();



// function RootStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// }


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

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//       <NavigationContainer>
//       {/* <RootStack /> */}
//        <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName = route.name === 'Home'
//               ? (focused ? 'home' : 'home-outline')
//               : route.name === 'Profile'
//                 ? (focused ? 'person' : 'person-outline')
//                 : (focused ? 'settings' : 'settings-outline');

//             return <Icon name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen 
//     name="Home" 
//     component={HomeStack}   // ✅ Use stack, not screen directly
//     options={{ headerShown: false }} 
//   />
//         <Tab.Screen 
//          name="Profile" 
//          component={ProfileStack}
//          options={{ headerShown: false}} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//        </Tab.Navigator>
//       </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   );
// }
 
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
