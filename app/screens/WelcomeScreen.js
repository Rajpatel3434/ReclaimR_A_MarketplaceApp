import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/favicon.png")}
    >
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "darkgray",
  },
});

export default WelcomeScreen;
