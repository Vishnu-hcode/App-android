import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeaderOptionsProps = {
  navigation: NativeStackNavigationProp<any>; // replace "any" with your typed stack param list
  title?: string;
};

// Custom Header component
const CustomFaqHeader = ({ navigation }: HeaderOptionsProps) => {
  return (
    <View
      style={{
        backgroundColor: "#EAF4FF",
        height: 150, // ✅ custom height works here
        flexDirection: "row",
        alignItems: "flex-end", // push content to bottom
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingBottom: 10,
      }}
    >
      {/* Left side */}
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#1a1a1a" />
        </TouchableOpacity>

        <View style={{ height: 8 }} />
        <Text
          style={{
            marginLeft: 4,
            fontFamily: "BIZ UDPMincho",
            fontSize: 22,
            fontWeight: "700",
            color: "#1a1a1a",
          }}
        >
          FAQs
        </Text>
      </View>

      {/* Right side */}
      <TouchableOpacity
        style={{
          backgroundColor: "#E6F0FF",
          padding: 6,
          borderRadius: 12,
        }}
      >
        <Icon name="help-circle-outline" size={20} color="#1a73e8" />
      </TouchableOpacity>
    </View>
  );
};

// Usage inside navigator
export const customFaqHeaderOptions = ({
  navigation,
}: HeaderOptionsProps) => ({
  header: () => <CustomFaqHeader navigation={navigation} />,
  headerShadowVisible: false,
});



// import React from "react";
// import { TouchableOpacity, Text, View } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";

// type HeaderOptionsProps = {
//   navigation: NativeStackNavigationProp<any>; // you can replace "any" with your typed stack param list
//   title?: string;
// };

// export const customProfileHeaderOptions = (
//   { navigation }: HeaderOptionsProps
// ): NativeStackNavigationOptions => ({
//   headerTitle: "", // remove default title
//   headerLeft: () => (
//     <View style={{ flexDirection: "column", marginLeft: 3 , marginTop: 10}}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Icon name="arrow-back" size={22} color="#1a1a1a" />
//       </TouchableOpacity>

//       <View style={{ height:12}}/>
//       <Text
//         style={{
//           marginLeft: 4,
//           fontFamily: "BIZ UDPMincho",
//           fontSize: 22,
//           fontWeight: "700",
//           color: "#1a1a1a",
//         }}
//       >
//         Your Profile
//       </Text>
//     </View>
//   ),
//   headerRight: () => (
//     <TouchableOpacity
//       style={{
//         marginRight: 12,
//         backgroundColor: "#E6F0FF",
//         padding: 6,
//         borderRadius: 12,
//       }}
//     >
//       <Icon name="person-outline" size={20} color="#1a73e8" />
//     </TouchableOpacity>
//   ),
//   headerStyle: {
//     backgroundColor: "#EAF4FF", 
//   },
//   headerShadowVisible: false, // removes bottom shadow line
// });




// export const customProfileHeaderOptions = (
//   { navigation, title = "Home" }: HeaderOptionsProps
// ): NativeStackNavigationOptions => ({
//   headerTitle: "",
//   headerLeft: () => (
//     <TouchableOpacity
//       onPress={() => navigation.goBack()}
//       style={{ flexDirection: "row", alignItems: "center", marginLeft: 1 }}
//     >
//       <Icon name="arrow-back" size={24} color="#1a1a1a" />
//       <Text style={{ marginLeft: 8, fontFamily: "BIZ UDPMincho", fontSize: 18, fontWeight: "600", color: "#1a1a1a" }}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   ),
//   headerRight: () => (
//     <TouchableOpacity style={{ marginRight: 10 }}>
//       <Icon name="notifications-outline" size={24} color="#1a1a1a" />
//     </TouchableOpacity>
//   ),
//   headerStyle: {
//     backgroundColor: "#fff",
//   },
//   headerTitleStyle: {
//     fontWeight: "600",
//     fontSize: 18,
//   },
// });