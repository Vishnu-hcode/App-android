import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView ,Modal} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { setAddress } from "../features/addressSlice";
import Icon from "react-native-vector-icons/Ionicons";
import { AddressFormValues, addressSchema } from "../validation/addressSchema";
import { MapPin } from "lucide-react-native";





export default function AddressFormScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch<AppDispatch>();
  const address = useSelector((state:RootState)=> state.address)

  const [modalVisible, setModalVisible]= useState(false);
  const [formData, setFormData] = useState<AddressFormValues | null>(null);

  const { control, handleSubmit, formState: { errors } } = useForm<AddressFormValues>({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      flat: address?.flat || "",
      area: address?.area || "",
      landmark: address?.landmark || "",
      state: address?.state || "Maharashtra",
      city: address?.city || "Nagpur",
      pincode: address?.pincode || "",
    }
  });

//   const onSubmit = (data: AddressFormValues) => {
//     const updatedUser = { ...user, address: { ...data } };
//     dispatch(setAddress(updatedUser));
//     Alert.alert("Success", "Address saved!");
//     navigation.goBack();
//   };

// Show confirmation modal 
 const handleSave = (data: AddressFormValues) => { 
    setFormData(data); 
    setModalVisible(true); };

// Confirm and save address 
  const handleConfirm = () => { 
    if (formData) 
    { dispatch(setAddress(formData)); 
     setModalVisible(false); 
     Alert.alert("Success", "Address saved!"); 
     navigation.goBack(); } };


const onSubmit = (data: AddressFormValues) => {
    dispatch(setAddress(data)); // updated
    Alert.alert("Success", "Address saved!");
    navigation.goBack();
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row items-center mb-5 mt-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text className="flex-1 ml-4 text-lg font-semibold text-gray-900">
          Address for Notes Delivery
        </Text>
        <View className="w-6" />
      </View>

      {/* Flat */}
      <Text className="text-sm text-gray-800 mb-3 mt-5">Flat, House No., Building *</Text>
      <Controller
        control={control}
        name="flat"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 bg-white"
            placeholder="Flat 123, New Society"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.flat && <Text className="text-red-500 text-xs mt-1">{errors.flat.message}</Text>}

      {/* Area */}
      <Text className="text-sm text-gray-800 mb-2 mt-5">Area, Street, Sector, Village *</Text>
      <Controller
        control={control}
        name="area"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 bg-white"
            placeholder="Manav Nagar"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.area && <Text className="text-red-500 text-xs mt-4">{errors.area.message}</Text>}

      {/* Landmark */}
      <Text className="text-sm text-gray-800 mb-2 mt-5">Landmark</Text>
      <Controller
        control={control}
        name="landmark"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 bg-white"
            placeholder="Enter Landmark"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      {/* Country */}
      <Text className="text-sm text-gray-800 mb-2 mt-5">Country</Text>
      <TextInput
        className="border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-500 bg-gray-100"
        value="India"
        editable={false}
      />

      {/* State */}
      <Text className="text-sm text-gray-800 mb-2 mt-5">State *</Text>
      <Controller
        control={control}
        name="state"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 bg-white"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.state && <Text className="text-red-500 text-xs mt-1">{errors.state.message}</Text>}

      {/* City */}
      <Text className="text-sm text-gray-800 mb-2 mt-5">City *</Text>
      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 bg-white"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.city && <Text className="text-red-500 text-xs mt-1">{errors.city.message}</Text>}

      {/* Pincode */}
      <Text className="text-sm text-gray-800 mb-2 mt-5">Pincode *</Text>
      <Controller
        control={control}
        name="pincode"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 bg-white"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.pincode && <Text className="text-red-500 text-xs mt-1">{errors.pincode.message}</Text>}

      {/* Save Button */}
      <TouchableOpacity
        className="bg-blue-600 py-4 rounded-lg mt-12 items-center"
        onPress={handleSubmit(handleSave)}
      >
        <Text className="text-white font-semibold text-base">Save Address</Text>
      </TouchableOpacity>

      {/* Confirmation Modal */}
      {/* <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white p-6 rounded-t-2xl">
            <Text className="text-lg font-semibold mb-4">Confirm Address</Text>
            <Text className="mb-4">
              {`${formData?.flat}, ${formData?.area}, ${formData?.city}, ${formData?.state} - ${formData?.pincode}`}
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                className="border border-gray-300 py-3 px-6 rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-blue-600 py-3 px-6 rounded-lg"
                onPress={handleConfirm}
              >
                <Text className="text-white">Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
      <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white p-6 rounded-t-2xl">
          {/* Title */}
          <Text className="text-xl font-semibold mb-2">Confirm Address</Text>
          <Text className="text-gray-600 mb-4">
            Please confirm below details
          </Text>

          {/* Address Card */}
          <View className="flex-column items-center p-8 rounded-xl mb-6 border border-gray-200">
            <View className="bg-blue-100 p-3 rounded-lg mb-3 self-start">
              <MapPin size={20} color="#2563eb" />
            </View>
            <Text className="text-gray-800 leading-6 flex-wrap self-start">
              {`${formData?.flat}, ${formData?.area}, ${formData?.city}, ${formData?.state} - ${formData?.pincode}`}
            </Text>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-between">
            <TouchableOpacity
              className="flex-1 border border-gray-300 py-3 rounded-xl mr-3 items-center"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-gray-700 font-medium">Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-blue-600 py-3 rounded-xl items-center"
              onPress={handleConfirm}
            >
              <Text className="text-white font-medium">Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    </ScrollView>
  );
}
