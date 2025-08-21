// src/navigation/HomeStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FAQFormScreen from "../screens/FAQFormScreen"; // Assuming you have a FAQFormScreen
import { customHomeHeaderOptions } from "../components/CustomHomeHeader";
import { customFaqHeaderOptions } from "../components/CustomFaqHeader";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={({ navigation }) =>
          customHomeHeaderOptions({ navigation, title: "Home" })
        }
      />
      <Stack.Screen
        name="FaqForm"
        component={FAQFormScreen}
        options={({ navigation }) =>
          customFaqHeaderOptions({ navigation, title: "Home" })
        }
      />
    </Stack.Navigator>
  );
}
