import React, { createContext, useContext, useReducer, useEffect, useMemo } from "react";

const CartContext = createContext();

// --- Reducer Logic: Synchronized with application actions ---
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

      const existing = state.find(
        item => item.cartItemId === cartItemId
      );

      if (existing) {
        return state.map(item =>
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
        item => item.cartItemId !== action.payload.cartItemId
      );
    
    case "UPDATE_QUANTITY":
      return state
        .map(item =>
          item.cartItemId === action.payload.cartItemId
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