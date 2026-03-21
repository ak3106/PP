import React, { useState, useReducer, useEffect, useMemo, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

// --- Cart Reducer ---
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const {
        productId,
        name,
        variantId,
        variantLabel,
        price,
        quantity,
        thumbnail,
      } = action.payload;

      const cartItemId = `${productId}_${variantId}`;

      const existing = state.find((item) => item.cartItemId === cartItemId);

      if (existing) {
        return state.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...state,
        {
          cartItemId,
          productId,
          name,
          variantId,
          variantLabel,
          price,
          quantity,
          thumbnail,
        },
      ];
    }

    case "REMOVE_ITEM":
      return state.filter(
        (item) => item.cartItemId !== action.payload.cartItemId
      );

    case "UPDATE_QUANTITY":
      return state
        .map((item) =>
          item.cartItemId === action.payload.cartItemId
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

// --- Layout Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./pages/Signup";
import CustomPoster from "./pages/CustomPoster";
import SpiralDetail from "./pages/SpiralDetail";
import NotebookDetail from "./pages/NotebookDetail";
// import PostersCollections from "./pages/PostersCollections";
// import SpiralCollections from "./pages/SpiralCollections";
import CollectionsPage from "./pages/CollectionPage";
// import TestCloudinary from "./admin/TestCloudinary";
// import AddProduct from "./admin/AddProduct";
// import SeedRunner from "./SeedRunner";

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
          <Route path="/services/:serviceId" element={<Services />} />
          <Route
            path="/services/:serviceId/:subCategoryId"
            element={<Services />}
          />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* PRODUCTS HUB */}
          {/* <Route path="/products" element={<Products />} />

          <Route path="/products/posters" element={<PostersCollections />} />
          <Route path="/products/posters/:collection" element={<Products />} />

          <Route path="/products/spirals" element={<SpiralCollections />} />
          <Route path="/products/spirals/:collection" element={<Products />} /> */}
          <Route path="/products" element={<Products />} />

          <Route path="/products/:categorySlug" element={<CollectionsPage />} />

          <Route
            path="/products/:categorySlug/:collection"
            element={<Products />}
          />

          <Route
            path="/products/posters/:collection/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/products/journals/:collection/:id"
            element={<SpiralDetail />}
          />
          <Route
            path="/products/notebooks/:collection/:id"
            element={<NotebookDetail />}
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

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phone-login" element={<PhoneLogin />} />
          {/* <Route path="/test-cloudinary" element={<TestCloudinary />} /> */}
          {/* <Route path="/add-product" element={<AddProduct />} /> */}
          {/* <Route path="/seed-products" element={<SeedRunner />} /> */}
          <Route path="/custom/poster" element={<CustomPoster />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
