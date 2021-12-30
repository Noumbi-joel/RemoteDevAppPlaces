import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
//import { StyleSheet, Text, View } from "react-native";

//app loading
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

//navigator
import PlacesNavigator from "./navigator/PlacesNavigator";

//reducers
import placesReducers from "./store/reducers/places";

const rootReducers = combineReducers({
  places: placesReducers,
});

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

const loadFonts = () => {
  return Font.loadAsync({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
