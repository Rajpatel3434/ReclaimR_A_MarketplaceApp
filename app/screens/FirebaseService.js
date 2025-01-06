// firebaseService.js
import firestore from "@react-native-firebase/firestore";

/**
 * Save a product to Firestore
 * @param {Object} product - The product object containing details
 */
export const saveProduct = async (product) => {
  try {
    await firestore()
      .collection("products") // Reference the 'products' collection
      .add({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl || "", // Optional: default to empty string if no URL
        createdAt: firestore.FieldValue.serverTimestamp(), // Track creation time
      });
    console.log("Product added successfully!");
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

/**
 * Fetch all products from Firestore
 */
export const fetchProducts = async () => {
  try {
    const productsList = [];
    const querySnapshot = await firestore().collection("products").get();
    querySnapshot.forEach((doc) => {
      productsList.push({ id: doc.id, ...doc.data() });
    });
    console.log("Fetched Products: ", productsList);
    return productsList;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
};

/**
 * Update a product in Firestore
 * @param {string} productId - The document ID of the product
 * @param {Object} updatedData - The updated product data
 */
export const updateProduct = async (productId, updatedData) => {
  try {
    await firestore().collection("products").doc(productId).update(updatedData);
    console.log("Product updated successfully!");
  } catch (error) {
    console.error("Error updating product: ", error);
  }
};

/**
 * Delete a product from Firestore
 * @param {string} productId - The document ID of the product
 */
export const deleteProduct = async (productId) => {
  try {
    await firestore().collection("products").doc(productId).delete();
    console.log("Product deleted successfully!");
  } catch (error) {
    console.error("Error deleting product: ", error);
  }
};
