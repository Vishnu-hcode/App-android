// src/components/CustomHeader.tsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";

type HeaderOptionsProps = {
  navigation: NativeStackNavigationProp<any>; // you can replace "any" with your typed stack param list
  title?: string;
};

export const customHomeHeaderOptions = (
  { navigation, title = "Home" }: HeaderOptionsProps
): NativeStackNavigationOptions => ({
  headerTitle: "",
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ flexDirection: "row", alignItems: "center", marginLeft: 1 }}
    >
      <Icon name="arrow-back" size={24} color="#1a1a1a" />
      <Text style={{ marginLeft: 8, fontFamily: "BIZ UDPMincho", fontSize: 18, fontWeight: "600", color: "#1a1a1a" }}>
        {title}
      </Text>
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Icon name="notifications-outline" size={24} color="#1a1a1a" />
    </TouchableOpacity>
  ),
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTitleStyle: {
    fontWeight: "600",
    fontSize: 18,
  },
});



// import React from "react";
// import { TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";


// type HeaderOptionsProps = {
//   navigation: NativeStackNavigationProp<any>;
//   title?: string;
// };

// export const customHeaderOptions = ({ navigation, title = "Home" }: HeaderOptionsProps) => ({
//   headerTitle: title,
//   headerTitleAlign: "center",
//   headerLeft: () => (
//     <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
//       <Icon name="arrow-back" size={24} color="#1a1a1a" />
//     </TouchableOpacity>
//   ),
//   headerRight: () => (
//     <TouchableOpacity style={{ marginRight: 10 }}>
//       <Icon name="notifications-outline" size={24} color="#1a1a1a" />
//     </TouchableOpacity>
//   ),
//   headerStyle: {
//     backgroundColor: "#fff",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   headerTitleStyle: {
//     fontWeight: "600",
//     fontSize: 18,
//   },
// });
