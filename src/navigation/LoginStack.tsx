// src/navigation/LoginStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import MobileNumberScreen from "../screens/MobileNumberScreen";
import OtpScreen from "../screens/otpscreen";
import { customMobileNumberHeaderOptions } from "../components/CustomMobileNumberHeader";
import { customOtpHeaderOptions } from "../components/custonOtpHeader";
// import OtpScreen from "../screens/OtpScreen";

const Stack = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="MobileNumber" 
                      component={MobileNumberScreen} 
                      options={({ navigation }) =>
                                customMobileNumberHeaderOptions({ navigation, title: "Mobile Number" })
                              }
                              />
         <Stack.Screen name="OtpScreen" 
                      component={OtpScreen} 
                      options={({ navigation }) =>
                                customOtpHeaderOptions({ navigation, title: "Enter Otp" })
                              }
                              />
      {/* <Stack.Screen name="Otp" component={OtpScreen} />  */}
    </Stack.Navigator>
  );
}
