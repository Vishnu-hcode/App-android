import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import CountryPicker, {
  CountryCode,
  Country,
} from "react-native-country-picker-modal";

export default function MobileNumberScreen({ navigation }: any) {
  const [countryCode, setCountryCode] = useState<CountryCode>("IN");
  const [callingCode, setCallingCode] = useState("91");
  const [mobile, setMobile] = useState("");
  const [showPicker, setShowPicker] = useState(false);


  const isValid= mobile.length===10;

  const handleContinue = () => {
    if (isValid) {
      navigation.navigate("OtpScreen", { mobile: `+${callingCode}${mobile}` });
    }
  };

  return (
    <View className="flex-1 bg-white px-5 pt-5">
      {/* Input Wrapper */}


 <View className="flex-row items-center mt-4">
  {/* Country Code Box */}
  <TouchableOpacity
    onPress={() => setShowPicker(true)}
    className="flex-row items-center justify-center px-3 h-12 border border-gray-300 rounded-lg bg-white mr-2"
  >
    <Text className="text-base text-gray-900">+{callingCode}</Text>
    <Text className="ml-1 text-xs text-gray-900">▼</Text>
  </TouchableOpacity>

  {/* Mobile Number Input Box */}
  <TextInput
    placeholder="Enter Mobile Number"
    keyboardType="phone-pad"
    value={mobile}
    onChangeText={(text) => {
      const cleaned = text.replace(/[^0-9]/g, "").slice(0, 10);
      setMobile(cleaned);
    }}
    className="flex-1 px-3 h-12 border border-gray-300 rounded-lg bg-white text-base text-gray-900"
  />
</View>


      {/* Country Picker */}

      {showPicker && (
  <CountryPicker
    visible
    withFilter
    withCallingCode
    withFlag={false}
    withEmoji={false}
    withCountryNameButton={false}
    onClose={() => setShowPicker(false)}
    onSelect={(country: Country) => {
      setCountryCode(country.cca2 as CountryCode);
      setCallingCode(country.callingCode[0]);
    }}
    countryCode={countryCode}
  />
)}


           {/* Terms and Conditions */}
       <Text className="text-xs text-gray-500 mt-3">
            By clicking on Continue, I accept the{" "}
         <Text className="text-blue-500">Terms & Conditions</Text>,{" "}
         <Text className="text-blue-500">Privacy Policy</Text> &{" "}
         <Text className="text-blue-500">Content Policy</Text>
       </Text>

      {/* Continue Button */}
       <TouchableOpacity
        disabled={!isValid}
        onPress={handleContinue}
        className={`py-4 rounded-lg mt-6 ${
          isValid ? "bg-[#0B1B38]" : "bg-gray-300"
        }`}
      >
        <Text className="text-center text-white font-medium">Continue</Text>
      </TouchableOpacity>

       {/* OR Divider */}
       <View className="flex-row items-center my-6">
         <View className="flex-1 h-px bg-gray-300" />
         <Text className="mx-3 text-gray-500">OR</Text>
         <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Continue with WhatsApp */}
       <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 rounded-lg py-4">
         <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" }}
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        <Text className="text-base font-medium text-black">
          Continue with WhatsApp
        </Text>
      </TouchableOpacity>
    </View>
  );
}



