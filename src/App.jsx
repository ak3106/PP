import React, { useState, useReducer, useEffect, useMemo, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // ✅ Changed here
// Correctly import ECOMMERCE data for safe use in context/state setup
import { PRODUCTS } from "./data/dummyProducts";
import { useCart } from "./context/CartContext";

// --- Import Layout Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// --- DYNAMICALLY Import Pages (Code Splitting) ---
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));

// --- Cart Reducer Logic ---
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, selectedSize, selectedType, quantity } = action.payload;
      const itemId = `${product.id}-${selectedSize}-${selectedType}`;
      const existingItemIndex = state.findIndex(
        (item) => item.itemId === itemId
      );

      const itemPrice = product.salePrice || product.price || 0;

      if (existingItemIndex !== -1) {
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...state,
          {
            itemId,
            product,
            quantity,
            selectedSize,
            selectedType,
            price: itemPrice,
          },
        ];
      }
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.itemId !== action.payload.itemId);
    case "UPDATE_QUANTITY":
      return state
        .map((item) =>
          item.itemId === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

// --- App Component ---
const App = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [cart, dispatchCart] = useReducer(cartReducer, []);

  useEffect(() => {
    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem("pragya_user"));
      if (storedUser) {
        setUser(storedUser);
      }
      setAuthLoading(false);
    }, 500);
  }, []);

  const handleLogin = (userData) => {
    const newUser = {
      id: "u1",
      name: userData.email.split("@")[0],
      email: userData.email,
    };
    setUser(newUser);
    localStorage.setItem("pragya_user", JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("pragya_user");
  };

  const cartItemCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-indigo-700 font-semibold">
            Loading Pragya Print...
          </p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>   {/* ✅ Replaced HashRouter */}
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

          <Route
            path="/products"
            element={<Products dispatchCart={dispatchCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail dispatchCart={dispatchCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} dispatchCart={dispatchCart} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout cart={cart} user={user} dispatchCart={dispatchCart} />
            }
          />

          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register onRegister={handleLogin} />}
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
