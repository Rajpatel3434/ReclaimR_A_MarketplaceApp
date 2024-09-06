import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Button } from "react-native";
import AuthScreen from "./app/screens/AuthScreen";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AppNavigator from "./app/screens/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
