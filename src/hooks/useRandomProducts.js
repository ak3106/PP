import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Module-level cache — shared across all hook instances
let cachedProducts = null;
let fetchPromise = null;

function sampleRandom(list, count) {
  const pool = [...list];
  const picked = [];

  while (pool.length && picked.length < count) {
    const i = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }

  return picked;
}

const useRandomProducts = (count = 8) => {
  const [products, setProducts] = useState(() =>
    cachedProducts ? sampleRandom(cachedProducts, count) : []
  );
  const [loading, setLoading] = useState(cachedProducts === null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Already loaded — just select a new random set
    if (cachedProducts !== null) {
      setProducts(sampleRandom(cachedProducts, count));
      setLoading(false);
      return;
    }

    // Reuse an existing request (e.g. React StrictMode)
    if (!fetchPromise) {
      fetchPromise = Promise.all([
        getDocs(collection(db, "products")),
        getDocs(collection(db, "journals")),
        getDocs(collection(db, "notebooks")),
        getDocs(collection(db, "banners")),
      ]).then(
        ([productsSnap, journalsSnap, notebooksSnap, bannersSnap]) => {
          const allProducts = [
            ...productsSnap.docs,
            ...journalsSnap.docs,
            ...notebooksSnap.docs,
            ...bannersSnap.docs,
          ].map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          cachedProducts = allProducts;

          return allProducts;
        }
      );
    }

    fetchPromise
      .then((allProducts) => {
        setProducts(sampleRandom(allProducts, count));
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, [count]);

  return { products, loading, error };
};

export default useRandomProducts;
