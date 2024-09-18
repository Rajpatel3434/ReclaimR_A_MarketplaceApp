// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "./AuthScreen";
import CreateAccountScreen from "./CreateAccountScreen";
import LoginScreen from "./LoginScreen";
import Home from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // For icons in bottom tab

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Buy"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Buy") {
            iconName = "cart-outline";
          } else if (route.name === "Sell") {
            iconName = "pricetag-outline";
          } else if (route.name === "Chat") {
            iconName = "chatbubble-outline";
          } else if (route.name === "Account") {
            iconName = "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FEBD00",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Buy" component={BuyScreen} />
      <Tab.Screen name="Sell" component={SellScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: "Authentication" }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
