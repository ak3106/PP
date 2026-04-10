import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Module-level cache — persists across mounts
let cachedProducts = null;
let fetchPromise = null; // prevents double-fetch in StrictMode

const useProducts = () => {
  const [products, setProducts] = useState(cachedProducts || []);
  const [loading, setLoading] = useState(cachedProducts === null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedProducts !== null) {
      setProducts(cachedProducts);
      setLoading(false);
      return;
    }

    // If already fetching (StrictMode double-mount), reuse same promise
    if (!fetchPromise) {
      fetchPromise = Promise.all([
        getDocs(collection(db, "products")),
        getDocs(collection(db, "journals")),
        getDocs(collection(db, "notebooks")),
        getDocs(collection(db, "banners")),
      ]).then(([productsSnap, journalsSnap, notebooksSnap, bannersSnap]) => {
        const allProducts = [
          ...productsSnap.docs,
          ...journalsSnap.docs,
          ...notebooksSnap.docs,
          ...bannersSnap.docs,
        ].map((doc) => ({ id: doc.id, ...doc.data() }));

        cachedProducts = allProducts;
        return allProducts;
      });
    }

    // Both mounts share the same promise
    fetchPromise
      .then((allProducts) => {
        setProducts(allProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export default useProducts;