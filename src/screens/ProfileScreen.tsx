import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Button, Modal } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from 'react-redux';
import { RootState , AppDispatch} from '../store';
import { setUser } from '../features/userSlice';
import { launchImageLibrary, ImageLibraryOptions } from "react-native-image-picker";

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
  const address= useSelector((state: RootState) => state.address);

  const [modalVisible, setModalVisible] = useState(false);
  const [tempPhoto, setTempPhoto] = useState<string | null>(null);

  const pickImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1.0,
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setTempPhoto(response.assets[0].uri || null);
      }
    });
  }

  const handleContinue = () => {
    if (tempPhoto) {
      dispatch(setUser({ photo: tempPhoto })); // update global user
    }
    setModalVisible(false);
  };


    
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Profile</Text>
        <Icon name="person-circle-outline" size={24} color="#1a73e8" />
      </View> */}

      {/* Add Photo Section */}
       {/* <TouchableOpacity style={styles.photoWrapper} onPress={() => setModalVisible(true)}>
        {user.photo ? (
          <Image source={{ uri: user.photo }} style={styles.photo} />
        ) : (
          <Image source={require("../assets/avatar-edit.png")} style={styles.photo} />
        )}
      </TouchableOpacity> */}
      <View style={styles.photoSection}>
        {/* <Icon name="person-circle-outline" size={70} color="#1a73e8" /> */}
        {user.photo ? (
          <Image source={{ uri: user.photo }} style={styles.photo} />
        ) : (
          <Image source={require("../assets/avatar-edit.png")} style={styles.photo} />
        )}
        <TouchableOpacity style={styles.addPhotoBtn} onPress={() => setModalVisible(true)}>
          <Text style={styles.addPhotoText}>+ Add Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Info List */}
      <View style={styles.infoList}>
        <View style={styles.infoRow}>
          <Icon name="person-outline" size={20} color="#555" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.value}>{user.firstName}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
      <Icon name="pencil-outline" size={18} color="#777" />
    </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Icon name="mail-outline" size={20} color="#555" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Email Address</Text>
            <Text style={styles.value}>prakash_s@gmail.com</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Icon name="call-outline" size={20} color="#555" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Mobile Number</Text>
            <Text style={styles.value}>+91 841 106 3591</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Icon name="logo-whatsapp" size={20} color="#25D366" />
          <View style={styles.infoText}>
            <Text style={styles.label}>WhatsApp Number</Text>
            <Text style={styles.value}>{user.phone}</Text>
          </View>
         <TouchableOpacity onPress={() => navigation.navigate("EditProfile", { field: "birthday" })}>
      <Icon name="pencil-outline" size={18} color="#777" />
    </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Icon name="calendar-outline" size={20} color="#555" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.value}>{user.birthday
    ? new Date(user.birthday).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not set"}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile", { field: "birthday" })}>
      <Icon name="pencil-outline" size={18} color="#777" />
    </TouchableOpacity>
        </View>

     <View style={styles.infoRow}>
  <Icon name="location-outline" size={20} color="#555" />
  <View style={styles.infoText}>
    <Text style={styles.label}>Address for Notes Delivery</Text>

    <TouchableOpacity onPress={() => navigation.navigate("AddressForm")}>
      {address && address.flat ? ( // ✅ if address exists in redux
        <Text style={styles.value}>
          {`${address.flat}, ${address.area}, ${address.city}, ${address.state} - ${address.pincode}`}
        </Text>
      ) : (
        <Text style={[styles.value, { color: "#1a73e8" }]}>+ Add Address</Text>
      )}
    </TouchableOpacity>
  </View>
</View>



        {/* <View style={styles.infoRow}>
          <Icon name="location-outline" size={20} color="#555" />
          <View style={styles.infoText}>
            <Text style={styles.label}>Address for Notes Delivery</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AddressForm")}>
            <Text style={[styles.value, { color: "#1a73e8" }]}>+ Add Address</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {tempPhoto ? (
              <Image source={{ uri: tempPhoto }} style={styles.modalImage} />
            ) : (
              <Image source={require("../assets/avatar-edit.png")} style={styles.modalImage} />
            )}

            <View style={{ marginTop: 20, width: "100%" }}>
              <Button title={tempPhoto ? "Continue" : "Add"} onPress={tempPhoto ? handleContinue : pickImage} color="#4CAF50" />
            </View>

            <View style={{ marginTop: 10, width: "100%" }}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="#999" />
            </View>
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 22, fontWeight: "700", color: "#222" },
  photoSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  addPhotoBtn: {
    // marginTop: 10,
    marginLeft:4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#1a73e8",
    borderRadius: 8,
  },
  addPhotoText: { color: "#1a73e8", fontSize: 14, fontWeight: "600" },
  infoList: { marginTop: 10 },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  infoText: { flex: 1, marginLeft: 10 },
  label: { fontSize: 12, color: "#777" },
  value: { fontSize: 14, fontWeight: "600", color: "#222" },
  photoWrapper: {
    marginBottom: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "contain",
  },
});






