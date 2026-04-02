import { useEffect } from "react";
import { seedProducts } from "./scripts/seedProducts";

const SeedRunner = () => {
  useEffect(() => {
    seedProducts();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Seeding Products…</h1>
      <p>Check console & Firestore</p>
    </div>
  );
};

export default SeedRunner;
