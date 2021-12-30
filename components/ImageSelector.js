import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Alert } from "react-native";
import Colors from "../constants/Colors";

import * as ImagePicker from "expo-image-picker";

const ImgPicker = () => {
  /* const verifyPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permission to use this app",
        [{ text: "ok" }]
      );
      return false;
    }
    return true;
  }; */

  const [imagePicked, setImagePicked] = useState();

  const takeImageHandler = async () => {
    /* const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    ImagePicker.launchCameraAsync(); */

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setImagePicked(result.uri);
  };
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!imagePicked ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: imagePicked }} />
        )}
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
