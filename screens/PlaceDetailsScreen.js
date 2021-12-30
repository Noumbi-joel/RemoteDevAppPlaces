import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailsScreen = (props) => {
  return (
    <View>
      <Text>PlaceDetailsScreen</Text>
    </View>
  );
};

PlaceDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle"),
  };
};

export default PlaceDetailsScreen;
