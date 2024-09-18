import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth
import { useNavigation } from "@react-navigation/native"; // For navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Import Bottom Tab Navigator
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons

// Example screens for Buy, Sell, and Chat (you can replace with real screens)
function BuyScreen() {
  return <View style={styles.screen}></View>;
}

function SellScreen() {
  return <View style={styles.screen}></View>;
}

function ChatScreen() {
  return <View style={styles.screen}></View>;
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function Home() {
  const [userInitials, setUserInitials] = useState(null); // Null by default (no user logged in)
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();

    // This listens to any changes in the authentication state (sign in / sign out)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email } = user;

        // Check if displayName exists and set initials from it
        if (displayName && displayName.trim()) {
          const initials = displayName
            .split(" ")
            .map((name) => name[0])
            .join("");
          setUserInitials(initials);
        } else if (email) {
          // If no displayName, fallback to using the email's first letter as initials
          const emailInitials = email[0].toUpperCase();
          setUserInitials(emailInitials);
        }
      } else {
        setUserInitials(null); // No user logged in, reset initials
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$150",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$200",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$500",
      image: "https://picsum.photos/200/300",
    },
    // Add more dummy products here
    {
      id: 5,
      name: "Product 5",
      price: "$500",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$500",
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Top Bar with Search and Profile Icon */}
      <View style={styles.topBar}>
        <TextInput style={styles.searchBar} placeholder="Search..." />

        {/* Conditionally render the profile icon if the user is signed in */}
        {userInitials ? (
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.profileText}>{userInitials}</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Conditionally render the link if the user is not signed in */}
      {!userInitials && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Auth")}
          style={styles.authLink}
        >
          <Text style={styles.authLinkText}>Create Account / Login</Text>
        </TouchableOpacity>
      )}

      {/* Scrollable Products */}
      <ScrollView style={styles.productList}>
        <View style={styles.productRow}>
          {products.map((product, index) => (
            <TouchableOpacity
              key={product.id}
              style={[
                styles.productCard,
                (index + 1) % 2 === 0 && { marginRight: 0 }, // Remove margin for right-side product
              ]}
            >
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Tabs */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Buy":
                iconName = "cart";
                break;
              case "Sell":
                iconName = "add-circle";
                break;
              case "Chat":
                iconName = "chatbubble";
                break;
              default:
                iconName = "home";
                break;
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          headerShown: false, // Hide the header for all screens in the Tab Navigator
        })}
      >
        <Tab.Screen name="Buy" component={BuyScreen} />
        <Tab.Screen name="Sell" component={SellScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
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
  authLink: {
    alignItems: "center",
    marginVertical: 10,
  },
  authLinkText: {
    color: "#0066cc",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  productList: {
    marginTop: 10,
    maxHeight: 674,
  },
  productRow: {
    flexDirection: "row",
    flexWrap: "wrap", // Wrap to the next line if necessary
    justifyContent: "space-between",
  },
  productCard: {
    backgroundColor: "#F9D8A1",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "48%", // Adjust width for two products side by side
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
    fontSize: 14,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
