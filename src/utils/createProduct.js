import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const createProduct = async (product) => {
  const ref = doc(db, "products", product.id);

  await setDoc(ref, {
    ...product,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};
