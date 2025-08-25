import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
// import { ArrowLeft } from "lucide-react-native"; // or react-native-vector-icons
import Icon from "react-native-vector-icons/Ionicons";


export default function GTAnalyticsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Solid Blue Header */}
     <View className="bg-[#1a2f6b] h-[300px] px-4 pt-6 ">
  {/* Top Row */}
  <View className="flex-row mt-10 items-center">
    <Icon name="arrow-back" size={22} color="#fff" />
    <Text className="ml-3 text-lg font-semibold text-white">GT Analytics</Text>
  </View>

  {/* Title */}
  <View className="mt-5">
    <Text className="text-xl font-bold text-white">FMGE Grand Test 23</Text>
    <Text className="mt-1 text-white/80">200 Ques • 180 Mins • 200 Marks</Text>
  </View>

  {/* Buttons */}
  <View className="flex-row bg-[#1a2f6b] rounded-xl border border-white p-1 mt-5 self-start">
  {/* Your Stats (inactive) */}
  <TouchableOpacity className="px-4 py-2 rounded-xl items-center">
    <Text className="text-white font-medium">Your Stats</Text>
  </TouchableOpacity>

  {/* GT Overview (active) */}
  <TouchableOpacity className="px-4 py-2 bg-white rounded-xl items-center">
    <Text className="text-[#1a2f6b] font-medium">GT Overview</Text>
  </TouchableOpacity>
</View>

</View>

      
       {/* Cards Overlapping Header */}
      <View className="flex-row justify-between px-4 -mt-[65px]">
        {/* Card 1 */}
        <View className="flex-1 bg-white rounded-2xl p-4 mx-1 shadow border border-gray-200">
          <Text className="text-2xl font-bold">1710</Text>
          <Text className="text-gray-500 text-sm">Total Students</Text>
          <Text className="text-red-500 mt-1">▼ 14.7% GT23</Text>
        </View>

        {/* Card 2 */}
        <View className="flex-1 bg-white rounded-2xl p-4 mx-1 shadow border border-gray-200">
          <Text className="text-2xl font-bold">1710</Text>
          <Text className="text-gray-500 text-sm">Average Score</Text>
          <Text className="text-green-500 mt-1">▲ 2.6% GT23</Text>
        </View>

        {/* Card 3 */}
        <View className="flex-1 bg-white rounded-2xl p-4 mx-1 shadow border border-gray-200">
          <Text className="text-2xl font-bold">1710</Text>
          <Text className="text-gray-500 text-sm">Top 20 Score (Avg)</Text>
          <Text className="text-green-500 mt-1">▲ 1.7% GT23</Text>
        </View>
      </View>
    
    </SafeAreaView>
  );
}
