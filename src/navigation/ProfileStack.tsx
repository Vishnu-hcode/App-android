// src/navigation/HomeStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import { customProfileHeaderOptions } from "../components/CustomProfileHeader";
import EditProfileForm from "../components/EditProfileForm";
import AddressFormScreen from "../screens/AddressFormScreen";

const Stack = createNativeStackNavigator();

export default function Profiletack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={({ navigation }) => customProfileHeaderOptions({ navigation })}
      />
      <Stack.Screen 
        name="EditProfile" 
        component={EditProfileForm} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="AddressForm" 
        component={AddressFormScreen} 
        options={{ headerShown: false }} 
      />

    </Stack.Navigator>
  );
}
