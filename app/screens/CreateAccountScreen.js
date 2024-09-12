import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FIREBASE_AUTH, FIRESTORE_DB } from "./FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createdAt } from "expo-updates";

export default function CreateAccountScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const firebaseAuth = FIREBASE_AUTH;

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignUp = async () => {
    if (!validatePassword(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long, include one number, and one symbol."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(FIRESTORE_DB, "users", user.uid), {
        name: name,
        email: email,
        password: password,
        createdAt: new Date(),
      });

      Alert.alert("Success", "Account created and stored in Firestore!");
      // Handle signup logic (e.g., API request)
      console.log("User signed up:", { name, email, password });

      console.log(userCredential);
      setEmail("");
      setPassword("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null} // or "height" on Android
      style={styles.container}
      keyboardVerticalOffset={0} // Avoid adjusting the view upwards
    >
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Text style={styles.passwordText}>
          At least 8 characters, one number and symbol.
        </Text>

        {/* Terms and Policies Text */}
        <Text style={styles.termsText}>
          By signing up, you agree to our{" "}
          <Text style={styles.link}>Terms of Use</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  termsText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginVertical: 15,
  },
  passwordText: {
    fontSize: 12,
    color: "#666",
    textAlign: "left",
    marginLeft: -60,
  },
  link: {
    color: "#FEBD00", // Orange color for links
    fontWeight: "bold",
  },
  signUpButton: {
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
  formContainer: {
    width: "100%",
    justifyContent: "center", // Keeps the form in the center
    alignItems: "center",
  },
});
