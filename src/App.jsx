import React, { useState, useReducer, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Correctly import ECOMMERCE data for safe use in context/state setup
import { PRODUCTS } from './data/dummyProducts'; 

// --- Import Layout Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- Import Pages ---
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';

// --- Cart Reducer Logic ---
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const { product, selectedSize, selectedType, quantity } = action.payload;
            // Create a unique ID combining product ID, size, and type
            const itemId = `${product.id}-${selectedSize}-${selectedType}`;
            const existingItemIndex = state.findIndex(item => item.itemId === itemId);

            // Ensure the item price is present for calculations later in the cart
            const itemPrice = product.salePrice || product.price || 0;

            if (existingItemIndex !== -1) {
                // If item exists, update quantity
                return state.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                // Add new item
                return [...state, { itemId, product, quantity, selectedSize, selectedType, price: itemPrice }];
            }
        }
        case 'REMOVE_ITEM':
            return state.filter(item => item.itemId !== action.payload.itemId);
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.itemId === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
            ).filter(item => item.quantity > 0);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

// --- App Component (Main Entry) ---
const App = () => {
    // 1. Auth State (Simulated for Phase 1)
    const [user, setUser] = useState(null); 
    const [authLoading, setAuthLoading] = useState(true);

    // 2. Cart State
    const [cart, dispatchCart] = useReducer(cartReducer, []);

    // 3. Simulated Auth Handlers 
    useEffect(() => {
        setTimeout(() => {
            const storedUser = JSON.parse(localStorage.getItem('pragya_user'));
            if (storedUser) {
                setUser(storedUser);
            }
            setAuthLoading(false);
        }, 500);
    }, []);

    const handleLogin = (userData) => {
        const newUser = { id: 'u1', name: userData.email.split('@')[0], email: userData.email };
        setUser(newUser);
        localStorage.setItem('pragya_user', JSON.stringify(newUser));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('pragya_user');
    };

    const cartItemCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

    if (authLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-indigo-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="mt-4 text-lg text-indigo-700 font-semibold">Loading Pragya Print...</p>
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            {/* Navbar needs cart count and auth info */}
            <Navbar 
                cartItemCount={cartItemCount} 
                user={user} 
                onLogout={handleLogout}
            />

            <main className="flex-grow">
                <Routes>
                    {/* Public Pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* E-commerce Pages (MUST receive dispatchCart) */}
                    <Route 
                        path="/products" 
                        element={<Products dispatchCart={dispatchCart} />} 
                    />
                    <Route 
                        path="/product/:id" 
                        // PASSING dispatchCart is CRITICAL for ProductDetail to work
                        element={<ProductDetail dispatchCart={dispatchCart} />} 
                    />
                    <Route 
                        path="/cart" 
                        element={<Cart cart={cart} dispatchCart={dispatchCart} />} 
                    />
                    <Route 
                        path="/checkout" 
                        element={<Checkout cart={cart} user={user} dispatchCart={dispatchCart} />} 
                    />

                    {/* Auth Pages */}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register onRegister={handleLogin} />} />
                    
                    {/* Catch-all for 404 */}
                    <Route path="*" element={<Home />} /> 
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
};

export default App;