import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const saveUserToDB = async (user, extraData = {}) => {
  if (!user?.uid) return;

  const userRef = doc(db, "users", user.uid);
  const existing = await getDoc(userRef);

  if (!existing.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || extraData.name || "User",
      email: user.email || null,
      phone: extraData.phone || user.phoneNumber || null,   // ✅ FIXED
      provider: user.providerData[0]?.providerId || "password", // ✅ FIXED
      role: "customer",
      createdAt: serverTimestamp(),
    });
  }
};
