import React,{useState} from "react";
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
const [activeIndex, setActiveIndex]= useState(0);
  return (
    <View className="flex-1 bg-white">
      {/* Carousel */}
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={0}
        showPagination={false}
        // paginationActiveColor="black"
        // paginationDefaultColor="gray"
        //  PaginationComponent={({ paginationIndex }) => (
        //   <View className="flex-row justify-center mt-4">
        //     {slides.map((_, i) => (
        //       <View
        //         key={i}
        //         style={{
        //           height: 4,
        //           width: 30,
        //           borderRadius: 2,
        //           marginHorizontal: 4,
        //           backgroundColor: i === paginationIndex ? "#007BFF" : "#D1D5DB", // active blue, inactive gray
        //         }}
        //       />
        //     ))}
        //   </View>
        // )}
        data={slides}
        onChangeIndex={({ index }) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View
            style={{ width, height: height * 0.8 }} // Each slide fills width & fixed height
            className="flex justify-start px-4 mt-9"
          >
            {/* Image */}
            <View className="items-center">
            <Image
              source={item.image}
              style={{
                width: width * 0.91,
                height: height * 0.5,
                resizeMode: "cover",
                marginBottom: 30,
                borderRadius: 10,
              }}
            />
            </View>

            <View className="flex-row  mb-8">
            {slides.map((_, i) => (
              <View
                key={i}
                style={{
                  height: 4,
                  width: 30,
                  borderRadius: 2,
                  marginHorizontal: 4,
                  backgroundColor: i === activeIndex ? "#007BFF" : "#D1D5DB", // active blue, inactive gray
                }}
              />
            ))}
          </View>

            {/* Title */}
            <Text className="text-xl font-semibold mt-6">
              {item.title}
            </Text>

            {/* Subtitle */}
            <Text className="text-base text-gray-600 mt-5">
              {item.subtitle}
            </Text>
          </View>
        )}
      />

      {/* Login Button */}
      <View className="p-5 mb-8">
        <TouchableOpacity
          className="bg-[#0B1B38] py-4 rounded-2xl"    
          onPress={() => navigation.replace("MobileNumber")}
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
