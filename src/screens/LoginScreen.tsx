import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "1",
    title: "Master your passion",
    subtitle:
      "Content curated by the faculty themselves to ensure you study exactly what is needed.",
    image: require("../assets/slide1.png"),
  },
  {
    key: "2",
    title: "Learn from the best",
    subtitle: "All your favorite teachers in one place.",
    image: require("../assets/slide2.png"),
  },
  {
    key: "3",
    title: "Stay motivated",
    subtitle: "Track your progress and reach your goals faster.",
    image: require("../assets/slide3.png"),
  },
];


export default function LoginScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-white">
      {/* Carousel */}
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={0}
        showPagination
        paginationActiveColor="black"
        paginationDefaultColor="gray"
        data={slides}
        renderItem={({ item }) => (
          <View
            style={{ width, height: height * 0.7 }} // Each slide fills width & fixed height
            className="flex items-center justify-center px-6"
          >
            {/* Image */}
            <Image
              source={item.image}
              style={{
                width: width * 0.95,
                height: height * 0.55,
                resizeMode: "contain",
              }}
            />

            {/* Title */}
            <Text className="text-xl font-semibold text-center mt-6">
              {item.title}
            </Text>

            {/* Subtitle */}
            <Text className="text-base text-gray-600 text-center mt-3 px-6">
              {item.subtitle}
            </Text>
          </View>
        )}
      />

      {/* Login Button */}
      <View className="p-5">
        <TouchableOpacity
          className="bg-black py-4 rounded-2xl"
          onPress={() => navigation.replace("MainApp")}
        >
          <Text className="text-white text-center text-lg font-medium">
            Log In / Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// export default function LoginScreen({ navigation }: any) {
//   return (
//     <View className="flex-1 bg-white">
//       {/* Carousel */}
//       <View className="flex-1">
//         <SwiperFlatList
//           autoplay
//           autoplayDelay={2}
//           autoplayLoop
//           index={0}
//           showPagination
//           paginationActiveColor="black"
//           paginationDefaultColor="gray"
//           data={slides}
//           renderItem={({ item }) => (
//             <View className="flex-1 items-center justify-center px-6">
//               <Image
//                 source={item.image}
//                 style={{ width: width * 0.6, height: height * 0.3, resizeMode: "contain" }}
//               />
//               <Text className="text-xl font-semibold text-center mt-5">
//                 {item.title}
//               </Text>
//               <Text className="text-base text-gray-600 text-center mt-3">
//                 {item.subtitle}
//               </Text>
//             </View>
//           )}
//         />
//       </View>

//       {/* Login Button */}
//       <View className="p-5">
//         <TouchableOpacity
//           className="bg-black py-4 rounded-2xl"
//           onPress={() => navigation.replace("MainApp")}
//         >
//           <Text className="text-white text-center text-lg font-medium">
//             Log In / Sign Up
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
