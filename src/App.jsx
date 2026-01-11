import React, { useState, useReducer, useEffect, useMemo, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

// --- Cart Reducer ---
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, selectedSize, selectedType, quantity } = action.payload;
      const itemId = `${product.id}-${selectedSize}-${selectedType}`;
      const existingIndex = state.findIndex(i => i.itemId === itemId);
      const price = product.salePrice || product.price || 0;

      if (existingIndex !== -1) {
        return state.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...state,
        { itemId, product, quantity, selectedSize, selectedType, price }
      ];
    }

    case "REMOVE_ITEM":
      return state.filter(item => item.itemId !== action.payload.itemId);

    case "UPDATE_QUANTITY":
      return state
        .map(item =>
          item.itemId === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
        .filter(item => item.quantity > 0);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

// --- Layout Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./pages/Signup";

// --- Lazy Pages ---
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Signup"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const PhoneLogin = lazy(() => import("./pages/PhoneLogin"));

const App = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  // --- Firebase Auth Listener ---
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setAuthLoading(false);
    });

    return () => unsub();
  }, []);

  // --- Logout Handler ---
  const handleLogout = async () => {
    await signOut(auth);
  };

  // --- Cart Item Count ---
  const cartItemCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  // --- Splash Loader ---
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg text-primary font-semibold">
            Loading Pragya Print...
          </p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar
        cartItemCount={cartItemCount}
        user={user}
        onLogout={handleLogout}
      />

      <main className="flex-grow bg-cream">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<Products dispatchCart={dispatchCart} />} />
          <Route path="/product/:id" element={<ProductDetail dispatchCart={dispatchCart} />} />
          <Route path="/cart" element={<Cart cart={cart} dispatchCart={dispatchCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} user={user} dispatchCart={dispatchCart} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phone-login" element={<PhoneLogin />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
