import React, { useState } from "react";
import {
  AppRegistry,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { FIREBASE_AUTH, FIRESTORE_DB } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebaseAuth = FIREBASE_AUTH;

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Please fill in both fields");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(userCredential);

      const userDoc = await getDoc(doc(FIRESTORE_DB, "users", user.uid));
      navigation.navigate("Home");
      if (userDoc.exists()) {
        const userData = userDoc.data();
        Alert.alert(`Welcome, ${userData.name}`);
      } else {
        console.log("No such user found");
        Alert.alert("Error", "User not found.");
      }
      // Clear the fields after successful login
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    Alert.alert("Forgot Password pressed");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  signInButton: {
    backgroundColor: "#FEBD00",
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
  forgotPasswordText: {
    color: "#FEBD00",
    fontWeight: "bold",
    marginTop: 20,
  },
});
