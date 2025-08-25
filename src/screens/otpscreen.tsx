import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity ,Alert} from "react-native";
import { RouteProp, useRoute,useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type OtpScreenRouteProp = RouteProp<RootStackParamList, "Otp">;
type OtpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Otp"
>;

export default function OtpScreen() {
  const route = useRoute<OtpScreenRouteProp>();
  const navigation = useNavigation<OtpScreenNavigationProp>();
  const { mobile } = route.params;

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
//   const inputs = useRef<TextInput[]>([]);
   const inputs = useRef<Array<TextInput | null>>([]);


  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);


     if (text && index < inputs.current.length - 1) {
    inputs.current[index + 1]?.focus(); // ✅ safe
  }

    } else if (text === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

 

    const handleKeyPress = (e: any, index: number) => {
  if (e.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
    inputs.current[index - 1]?.focus(); // ✅ safe
  }
};

  const handleVerify = () => {
    const enteredOtp= otp.join("");
    console.log("Entered OTP:", enteredOtp);
    // Add verify OTP logic here

    if(enteredOtp === "123456"){
        // navigation.navigate("HomeStack", { screen: "HomeScreen" });
        navigation.reset({
    index: 0,
    routes: [{ name: "MainApp" }], // 🚀 This switches from LoginFlow to MainApp
  });
    }
    else{
        Alert.alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <View className="flex-1 bg-white px-5 pt-16 items-center">
      <Text className="mt-3 text-gray-600 text-center">
        Enter the 6-digit code we just texted to your mobile number {mobile}
      </Text>

      {/* OTP Input Boxes */}
      <View className="flex-row justify-between mt-6 w-full px-6">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
  inputs.current[index] = ref ;
}}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl"
            editable={true}
          />
          
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleVerify}
        disabled={otp.join("").length !== 6}
        className={`py-4 rounded-lg mt-6 w-full ${
          otp.join("").length === 6 ? "bg-[#0B1B38]" : "bg-gray-300"
        }`}
      >
        <Text className="text-center text-white font-medium">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}











