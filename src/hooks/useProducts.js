import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const spiralsRef = collection(db, "spirals");

        const [productsSnap, spiralsSnap] = await Promise.all([
          getDocs(productsRef),
          getDocs(spiralsRef),
        ]);

        const posters = productsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const spiralBooks = spiralsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // 🔥 Merge both collections
        setProducts([...posters, ...spiralBooks]);
      } catch (err) {
        console.error(err);
        setError(err);
      }

      setLoading(false);
    };

    fetchAllProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
