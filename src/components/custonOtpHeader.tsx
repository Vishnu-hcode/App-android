import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeaderOptionsProps = {
  navigation: NativeStackNavigationProp<any>; // replace "any" with your typed stack param list
  title?: string;
};

// Custom Header component
const CustomOtpHeader = ({ navigation }: HeaderOptionsProps) => {
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
          Enter OTP
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
        <Icon name="call-outline" size={20} color="#1a73e8" />
      </TouchableOpacity>
    </View>
  );
};

// Usage inside navigator
export const customOtpHeaderOptions = ({
  navigation,
}: HeaderOptionsProps) => ({
  header: () => <CustomOtpHeader navigation={navigation} />,
  headerShadowVisible: false,
});



