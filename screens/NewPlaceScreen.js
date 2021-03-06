import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import Colors from "../constants/Colors";

import { useDispatch } from "react-redux";
import * as placesActions from "../store/actions/places";
import ImgPicker from "../components/ImageSelector";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const titleChangeHandler = (text) => {
    //you could add validation
    setTitleValue(text);
  };

  const dispatch = useDispatch();

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage));
    props.navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add Place",
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
    fontFamily: "poppins-regular",
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    fontFamily: "poppins-bold",
  },
});

export default NewPlaceScreen;
