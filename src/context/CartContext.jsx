import React, { createContext, useContext, useReducer, useEffect, useMemo } from "react";

const CartContext = createContext();

// --- Reducer Logic: Synchronized with application actions ---
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, selectedSize, selectedType, quantity } = action.payload;
      // Create a unique ID combining product ID, size, and type
      const itemId = `${product.id}-${selectedSize}-${selectedType}`;
      const existingItemIndex = state.findIndex(
        (item) => item.itemId === itemId
      );
      
      // Use the correct price field from the product object
      const itemPrice = product.salePrice || product.price || 0;

      if (existingItemIndex !== -1) {
        // If item exists, update quantity
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item with rich data structure
        return [
          ...state,
          {
            itemId,
            product, // Store the entire product object
            quantity,
            selectedSize,
            selectedType,
            price: itemPrice,
          },
        ];
      }
    }

    case "REMOVE_ITEM":
      // Action payload expects { itemId }
      return state.filter((item) => item.itemId !== action.payload.itemId);

    case "UPDATE_QUANTITY":
      // Action payload expects { itemId, quantity }
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

export const CartProvider = ({ children }) => {
  // Load initial state from localStorage (or default to empty array)
  const [cart, dispatchCart] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem("pragya_cart")) || []
  );

  // Synchronize cart state to localStorage on every change
  useEffect(() => {
    localStorage.setItem("pragya_cart", JSON.stringify(cart));
  }, [cart]);
  
  // Calculate item count (useful for Navbar)
  const cartItemCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, dispatchCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);