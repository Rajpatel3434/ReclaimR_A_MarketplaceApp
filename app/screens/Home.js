import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Dummy screens for Buy, Sell, Chat, and Account tabs
function BuyScreen() {
  return (
    <View style={styles.tabScreen}>
      <Text>Buy Screen</Text>
    </View>
  );
}

function SellScreen() {
  return (
    <View style={styles.tabScreen}>
      <Text>Sell Screen</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={styles.tabScreen}>
      <Text>Chat Screen</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={styles.tabScreen}>
      <Text>Account Screen</Text>
    </View>
  );
}

// Bottom Tabs Setup
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$150",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$200",
      image: "https://via.placeholder.com/150",
    },
    // Add more dummy products here
  ];

  return (
    <View style={styles.container}>
      {/* Top Bar with Search and Profile Icon */}
      <View style={styles.topBar}>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <TouchableOpacity style={styles.profileIcon}>
          <Text style={styles.profileText}>JD</Text>{" "}
          {/* Initials of the user */}
        </TouchableOpacity>
      </View>

      {/* Scrollable Products */}
      <ScrollView style={styles.productList}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Tabs */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Buy") {
              iconName = "cart-outline";
            } else if (route.name === "Sell") {
              iconName = "pricetag-outline";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "Account") {
              iconName = "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FEBD00",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Buy" component={BuyScreen} />
        <Tab.Screen name="Sell" component={SellScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  profileIcon: {
    backgroundColor: "#FEBD00",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#fff",
    fontWeight: "bold",
  },
  productList: {
    marginTop: 10,
    flex: 1, // Allow the product list to scroll above the tab bar
  },
  productCard: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  productPrice: {
    color: "#FEBD00",
    fontSize: 14,
  },
  tabScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
