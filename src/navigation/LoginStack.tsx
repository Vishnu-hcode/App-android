// src/navigation/LoginStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
// import MobileNumberScreen from "../screens/MobileNumberScreen";
// import OtpScreen from "../screens/OtpScreen";

const Stack = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="MobileNumber" component={MobileNumberScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} /> */}
    </Stack.Navigator>
  );
}
