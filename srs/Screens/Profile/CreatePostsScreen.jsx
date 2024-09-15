import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, Keyboard, Platform, Alert } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import styles from "../../assets/styles/CreatePostScreenStyles";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  name: "",
  location: "",
  coords: {},
  photo: "",
};

export default function CreatePostsScreen() {
  const [state, setState] = useState(initialState);
  const [photo, setPhoto] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return Alert.alert("Немає доступу до камери");
  }

  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setPhoto(uri);
        setState((prevState) => ({ ...prevState, photo: uri }));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const choosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setPhoto(uri);
        setState((prevState) => ({ ...prevState, photo: uri }));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const takeLocation = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setState((prevState) => ({
        ...prevState,
        coords: {
          latitude,
          longitude,
        },
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendPost = () => {
    const { photo, name, location, coords } = state;
    if (!photo || !name.trim() || !location.trim()) {
      return;
    }
  
    navigation.navigate("Posts", { post: { photo, name, location, coords } });
  
    setState(initialState);
  };

  const deletePost = () => {
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView>
          <View style={styles.cameraWrapper}>
            <Camera style={styles.camera} ref={cameraRef}>
              <View style={styles.takePhotoCamera}>
                <Image source={{ uri: photo }} style={styles.photo} />
              </View>
              <TouchableOpacity
                style={styles.buttonCamera}
                onPress={() => {
                  takePhoto();
                  takeLocation();
                }}
              >
                <MaterialIcons name="photo-camera" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </Camera>
          </View>
          {!state.photo ? (
            <TouchableOpacity style={styles.buttonChoose} onPress={choosePhoto}>
              <Text style={styles.textBtn}>Вибрати фото</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.uploadText}>Редагувати фото</Text>
            </TouchableOpacity>
          )}
          <View style={styles.inpuWrapper}>
            <TextInput
              style={{
                ...styles.inputTitle,
                paddingTop: 25,
              }}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  name: value,
                }))
              }
              value={state.name}
            />
          </View>
          <View style={styles.inpuWrapper}>
            <View style={{ position: "absolute", bottom: 16 }}>
              <AntDesign name="enviromento" size={24} color="#BDBDBD" />
            </View>
            <TextInput
              style={{
                ...styles.inputTitle,
                marginLeft: 32,
                paddingTop: 25,
              }}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  location: value,
                }))
              }
              value={state.location}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                ...styles.btnPublish,
                backgroundColor:
                  !state.photo || !state.name || !state.location
                    ? "#F6F6F6"
                    : "#FF6C00",
              }}
              activeOpacity={0.7}
              disabled={
                !state.photo || !state.name || !state.location ? true : false
              }
              onPress={() => {
                sendPost();
              }}
            >
              <Text
                style={{
                  ...styles.textBtn,
                  color:
                    !state.photo || !state.name || !state.location
                      ? "#BDBDBD"
                      : "#FFFFFF",
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.btnTrash} onPress={deletePost}>
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
