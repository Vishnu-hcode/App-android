import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/userSlice";
import { AppDispatch, RootState } from "../store";
import { userSchema, UseFormValues } from "../validation/userSchema";

export default function EditProfileScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const [birthday, setBirthday] = useState(user?.birthday ? new Date(user.birthday) : new Date(1995, 0, 1));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<UseFormValues>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      // address: user?.address || "",
      phone: user?.phone || "",
    }
  });

  const formatDate = (date: Date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate().toString().padStart(2, "0")} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  const onSubmit = (data: UseFormValues) => {
    const updatedUser = { 
    ...data, 
    birthday: birthday ? birthday.toISOString() : null  // ✅ convert to string
  };
    dispatch(setUser(updatedUser));
    Alert.alert("Success", "Profile updated!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* First Name */}
      <Text style={styles.label}>Full Name *</Text>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="First Name"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>}

      {/* Last Name */}
      {/* <Text style={styles.label}>Last Name *</Text>
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.lastName && <Text style={styles.error}>{errors.lastName.message}</Text>} */}

      {/* Address */}
      {/* <Text style={styles.label}>Address *</Text>
      <Controller
        control={control}
        name="address"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="Address"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.address && <Text style={styles.error}>{errors.address.message}</Text>} */}

      {/* Phone */}
      <Text style={styles.label}>WhatsApp Number *</Text>
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="Phone"
            style={styles.input}
            keyboardType="phone-pad"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.phone && <Text style={styles.error}>{errors.phone.message}</Text>}

      {/* Birthday */}
      <Text style={styles.label}>Birthday *</Text>
      <TouchableOpacity style={styles.inputRow} onPress={() => setShowDatePicker(true)}>
        <Text style={{ fontSize: 14, color: "#222" }}>{formatDate(birthday)}</Text>
        <Icon name="calendar-outline" size={20} color="#000" />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={birthday}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setBirthday(selectedDate);
          }}
        />
      )}

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15,
  },
  headerTitle: { flex: 1, marginLeft:15, fontSize: 18, fontWeight: "600", color: "#222" },
  label: { fontSize: 14, color: "#333", marginBottom: 15, marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#222",
    backgroundColor: "#fff",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  error: { color: "red", fontSize: 12, marginTop: 4 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 340,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: "#cce5ff",
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  saveText: { fontWeight: "600", color: "#1a73e8", fontSize: 15 },
  cancelBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 14,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  cancelText: { fontWeight: "600", color: "#333", fontSize: 15 },
});
