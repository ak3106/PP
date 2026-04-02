// src/scripts/seedProducts.js
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { cars } from "../data/poster";

/**
 * ONE-TIME PRODUCT SEEDER
 * Run once, then DELETE this file.
 */
export const seedProducts = async () => {
  try {
    const productsRef = collection(db, "products");

    for (const product of cars) {
      const productRef = doc(productsRef, product.id);

      await setDoc(productRef, {
        ...product,

        // Ensure Firestore-safe timestamps
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),

        // Optional: normalize media structure
        // media: {
        //   thumbnail: product.thumbnail || "",
        //   gallery: product.gallery || product.images || [],
        // },
      });

      console.log(`✅ Uploaded: ${product.name}`);
    }

    alert("🎉 All products uploaded successfully!");
  } catch (error) {
    console.error("❌ Product seeding failed:", error);
    alert("❌ Seeding failed. Check console.");
  }
};
