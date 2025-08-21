import * as React from 'react';
import {useState, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import {launchImageLibrary, ImageLibraryOptions} from 'react-native-image-picker';
import {setUser} from '../features/userSlice';
import {AppDispatch} from '../store'
import { useDispatch } from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {userSchema, UseFormValues} from '../validation/userSchema';
import GoogleReCaptcha from 'react-native-google-recaptcha-v3';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Recaptcha from 'react-native-recaptcha-v3';
import App from '../App';

export default function HomeScreen({ navigation }: { navigation: any }) {
   const dispatch= useDispatch<AppDispatch>();
   const [firstName, setFirstName]=useState('');
   const [lastName, setLastName]=useState('');
   const [address, setAddress]=useState('');
   const [phone, setPhone]=useState('');
   const [photo, setPhoto]= useState<string | null>(null);
   const [modalVisible, setModalVisible] = useState(false);
   const [tempPhoto, setTempPhoto] = useState<string | null>(null);


   const { control, handleSubmit, formState: {errors}}= useForm<UseFormValues>({ resolver: yupResolver(userSchema)});


   // This replaces onSubmit


   const onSubmit= async(data: UseFormValues) => {
    if(!photo){
      Alert.alert('Please select a profile photo');
      return;
    }
    
 
    dispatch(setUser({ ...data, photo}));

    Alert.alert("Success", "Details submitted successfully!");

    try {
  let persistedState = await AsyncStorage.getItem('persist:root');
  if (persistedState) {
    const parsedState = JSON.parse(persistedState);

    // but redux-persist stores each reducer as a string, so parse again
    const user = JSON.parse(parsedState.user);

    console.log("User Data from AsyncStorage:", user);
  } else {
    console.log("No data found in AsyncStorage");
  }
} catch (error) {
  console.error("Error reading AsyncStorage:", error);
}

  }


   const pickImage = () => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1.0, // float value, 1.0 = highest quality
  };

  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      setTempPhoto(response.assets[0].uri || null);
    }
  });
};

  const handleContinue = () => {
    if(tempPhoto) {
        setPhoto(tempPhoto);
    }
    setModalVisible(false);
  };



   return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Form</Text>


      {/* Profile Photo Section */}
      <TouchableOpacity
        style={styles.photoWrapper}
        onPress={() => setModalVisible(true)}
      >
        {photo ? (
      <Image source={{ uri: photo }} style={styles.photo} />
       ) : (
      <Image
      source={require('../assets/avatar-edit.png')}
       style={styles.photo}
         />
      )}
      </TouchableOpacity>

      {/* Modal for selecting image */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {tempPhoto ? (
              <Image source={{ uri: tempPhoto }} style={styles.modalImage} />
            ) : (
              <Image
                source={require('../assets/avatar-edit.png')} // your uploaded icon
                style={styles.modalImage}
              />
            )}

            <View style={{ marginTop: 20, width: '100%' }}>
              <Button
                title={tempPhoto ? 'Continue' : 'Add'}
                onPress={tempPhoto ? handleContinue : pickImage}
                color="#4CAF50"
              />
            </View>

            <View style={{ marginTop: 10, width: '100%' }}>
              <Button
                title="Cancel"
                onPress={() => setModalVisible(false)}
                color="#999"
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Form Inputs */}
      <Controller
        control={control}
        name="firstName"
        render={({field: { onChange, value, onBlur}}) =>(
          <TextInput
            placeholder="first Name"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
      )}
      />
      {errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>}
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
      {errors.lastName && <Text style={styles.error}>{errors.lastName.message}</Text>}

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
      {errors.address && <Text style={styles.error}>{errors.address.message}</Text>}

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

      <View style={styles.buttonWrapper}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} color="#4CAF50" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  error: { color: 'red', marginBottom: 10, alignSelf: 'flex-start', marginLeft: 20 },
  photoWrapper: {
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    fontSize: 24,
    color: '#555',
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonWrapper: {
    marginTop: 10,
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'contain',
  },
});