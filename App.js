import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Button } from "react-native";
import AuthScreen from "./app/screens/AuthScreen";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AppNavigator from "./app/screens/AppNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  // AppNavigator was used
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen
    //       name="CreateAccountScreen"
    //       component={CreateAccountScreen}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <AppNavigator />
  );
}
