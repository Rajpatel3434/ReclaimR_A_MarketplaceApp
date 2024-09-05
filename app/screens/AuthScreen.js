import React from "react";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <TouchableOpacity
        style={styles.crtAccButton}
        onPress={() => console.log("Create button clicked")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Text> --------- or -------- </Text>
      <TouchableOpacity
        style={styles.lgnButton}
        onPress={() => console.log("login button clicked")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
    marginTop: 20,
  },
  logo: {
    width: 350,
    height: 110,
    marginBottom: 40, // Spacing between logo and form
  },
  crtAccButton: {
    backgroundColor: "#FEBD00",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  lgnButton: {
    borderWidth: 2,
    borderColor: "#FEBD00",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});
