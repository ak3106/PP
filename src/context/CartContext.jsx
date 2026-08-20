import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";

const CartContext = createContext();

// --- Reducer Logic: Synchronized with application actions ---
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;

      const uniqueSuffix = [
        item.variantId,
        item.rulingType,
        item.pages,
        item.coverType,
        item.size,
      ]
        .filter(Boolean)
        .join("_");

      const cartItemId = `${item.productId || item.bannerId}_${uniqueSuffix}`;

      const existingIndex = state.findIndex((i) => i.cartItemId === cartItemId);

      if (existingIndex > -1) {
        return state.map((i, index) =>
          index === existingIndex
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      }

      // 🔥 NORMALIZED ITEM STRUCTURE
      const normalizedItem = {
        productId: item.productId || "",
        name: item.name || "",
        variantId: item.variantId || "",
        variantLabel: item.variantLabel || "",

        // Replace undefined with null or empty string fallback
        size: item?.size ?? null,
        pages: item?.pages ?? null,
        rulingType: item?.rulingType ?? null,
        finish: item?.finish ?? null,
        material: item?.material ?? null,
        coverType: item?.coverType ?? null,

        price: item.price || 0,
        quantity: item.quantity || 1,
        thumbnail: item.thumbnail || "",

        customImage: item?.customImage ?? null,

        cartItemId,
      };
      return [...state, normalizedItem];
    }

    case "REMOVE_ITEM":
      return state.filter(
        (item) => item.cartItemId !== action.payload.cartItemId,
      );

    case "UPDATE_QUANTITY":
      return state
        .map((item) =>
          item.cartItemId === action.payload.cartItemId
            ? { ...item, quantity: action.payload.quantity }
            : item,
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
    JSON.parse(localStorage.getItem("pragya_cart")) || [],
  );

  // Synchronize cart state to localStorage on every change
  useEffect(() => {
    localStorage.setItem("pragya_cart", JSON.stringify(cart));
  }, [cart]);

  // Calculate item count (useful for Navbar)
  const cartItemCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart],
  );

  return (
    <CartContext.Provider value={{ cart, dispatchCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
