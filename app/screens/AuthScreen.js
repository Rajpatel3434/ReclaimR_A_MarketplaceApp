import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function AuthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.crtAccButton}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Horizontal line with "or" text */}
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.lgnButton}
        onPress={() => navigation.navigate("Login")}
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
    marginBottom: 40,
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
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20, // Spacing between the buttons and the separator
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "#777",
  },
});
