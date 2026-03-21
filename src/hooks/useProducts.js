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
        const journalsRef = collection(db, "journals");
        const notebooksRef = collection(db, "notebooks");

        const [productsSnap, journalsSnap, notebooksSnap] = await Promise.all([
          getDocs(productsRef),
          getDocs(journalsRef),
          getDocs(notebooksRef),
        ]);

        const posters = productsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const journals = journalsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const notebooks = notebooksSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // 🔥 Merge both collections
        setProducts([...posters, ...journals,...notebooks]);
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
