// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCart, Star, Minus, Plus, Tag } from "lucide-react";
// import Button from "./UI/Button";

// const ProductCard = ({ product, dispatchCart }) => {
//   const navigate = useNavigate();

//   const [qty, setQty] = useState(1);

//   const increment = () => setQty((q) => q + 1);
//   const decrement = () => setQty((q) => (q > 1 ? q - 1 : 1));

//   return (
//     <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden relative group border border-gray-100">
//       {/* SALE BADGE */}
//       {product.discount > 0 && (
//         <div className="absolute top-3 left-3 z-10 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
//           {product.discount}% OFF
//         </div>
//       )}

//       {/* FEATURED BADGE */}
//       {product.isFeatured && (
//         <div className="absolute top-3 right-3 z-10 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
//           Featured
//         </div>
//       )}

//       {/* PRODUCT IMAGE */}
//       <div
//         className="cursor-pointer relative "
//         onClick={() => navigate(`/product/${product.id}`)}
//       >
//         <img
//           src={product.thumbnail || product.images?.[0]}
//           alt={product.name}
//           className="w-full h-55 object-cover group-hover:scale-105 transition duration-500"
//         />
//       </div>

//       {/* PRODUCT INFO */}
//       <div className="p-3 relative flex flex-col h-full">
//         {/* NAME */}
//         <h3
//           className="text-lg font-bold tracking-tighter leading-6 text-gray-800 cursor-pointer"
//           onClick={() => navigate(`/product/${product.id}`)}
//         >
//           {product.name}
//         </h3>

//         {/* PRICE & RATING */}
//         <div className="flex justify-between items-center mt-4">
//           <div>
//             {product.salePrice ? (
//               <div className="flex items-center gap-2">
//                 <span className="text-gray-800 font-bold text-lg">
//                   ₹{product.salePrice}
//                 </span>
//                 <span className="line-through text-gray-400 text-sm">
//                   ₹{product.price}
//                 </span>
//               </div>
//             ) : (
//               <span className="text-indigo-600 font-bold text-lg">
//                 ₹{product.price}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center gap-1 text-yellow-600">
//             <Star className="w-4 h-4" />
//             <span className="text-sm font-medium">{product.rating}</span>
//           </div>
//         </div>

//         {/* STOCK STATUS */}
//         <p
//           className={`mt-2 text-sm font-semibold ${
//             product.stockStatus === "In Stock"
//               ? "text-green-700"
//               : "text-red-500"
//           }`}
//         >
//           {product.stockStatus}
//         </p>

//         {/* ADD TO CART BUTTON */}
//         <Button
//           className="w-full mt-auto flex items-center justify-center gap-2 sticky bottom-2 py-2"
//           onClick={() =>
//             dispatchCart({
//               type: "ADD_TO_CART",
//               payload: { ...product, quantity: qty },
//             })
//           }
//         >
//           <ShoppingCart className="w-3 h-3" />
//           Add to Cart
//         </Button>

//         {/* QUANTITY SELECTOR */}
//         {/* <div className="flex items-center justify-between mt-3 bg-slate-50 px-3 py-2 rounded-xl">
//             <button
//               onClick={decrement}
//               className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition"
//             >
//               <Minus className="w-2 h-2" />
//             </button>

//             <span className="text-sm">{qty}</span>

//             <button
//               onClick={increment}
//               className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition"
//             >
//               <Plus className="w-2 h-2" />
//             </button>
//           </div> */}
//         {/* TAGS */}
//         {/* <div className="flex flex-wrap gap-1 mt-1">
//         {product.tags?.slice(0, 3).map((tag, i) => (
//           <span
//             key={i}
//             className="text-xs bg-gray-100 px-1 py-0.5 rounded-full text-gray-700 flex items-center gap-1"
//           >
//             <Tag className="w-2 h-2" /> {tag}
//           </span>
//         ))}
//       </div> */}

//         {/* DESCRIPTION */}
//         {/* <p className="text-sm text-gray-500 line-clamp-2 mt-2">
//         {product.description}
//       </p> */}
//       </div>
//     </div>
//   );
// };
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Star, Layers } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  const [isAdding, setIsAdding] = useState(false);

  // --------------------------------------------------
  // ROUTE LOGIC
  // --------------------------------------------------
  const detailRoute = useMemo(() => {
    if (product.category === "Journals") {
      return `/products/journals/:collection/${product.id}`;
    }
    else if (product.category === "Notebooks") {
      return `/products/notebooks/:collection/${product.id}`;
    }
    return `/products/posters/:collection/${product.id}`;
  }, [product]);

  // --------------------------------------------------
  // PRICING ENGINE
  // --------------------------------------------------
  // DEFAULT VARIANT OPTIONS
  // DEFAULT SIZE BASED ON PRODUCT TYPE
  const defaultSize =
    product.productType === "diary_journal"
      ? "A5"
      : product.options?.size?.includes("A4")
        ? "A4"
        : (product.options?.size?.[0] ?? null);

  const defaultPages =
    defaultSize && product.options?.pageMap?.[defaultSize]?.[0];

  const defaultRuling = product.options?.rulingType?.[0] ?? null;

  // DEFAULT VARIANT
  const defaultVariant = useMemo(() => {
    if (!product.variants) return null;

    return product.variants.find(
      (v) =>
        v.size === defaultSize &&
        v.pages === defaultPages &&
        (v.rulingType ? v.rulingType === defaultRuling : true)
    );
  }, [product, defaultSize, defaultPages, defaultRuling]);

  // PRICING ENGINE
  const priceData = useMemo(() => {
    if (defaultVariant?.price) {
      return {
        current: defaultVariant.price,
        original: product.pricing?.basePrice ?? defaultVariant.price,
        discount: product.pricing?.discountPercentage ?? 0,
        currency: product.pricing?.currency ?? "INR",
      };
    }

    const base = product.pricing?.basePrice ?? 0;
    const sale = product.pricing?.salePrice ?? base;

    return {
      current: sale,
      original: base,
      discount:
        product.pricing?.discountPercentage ??
        (base > sale ? Math.round(((base - sale) / base) * 100) : 0),
      currency: product.pricing?.currency ?? "INR",
    };
  }, [product, defaultVariant]);

  // --------------------------------------------------
  // QUICK ADD TO CART
  // --------------------------------------------------
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!defaultVariant || isAdding) return;

    setIsAdding(true);

    dispatchCart({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        name: product.name,
        variantId: defaultVariant.variantId,
        size: defaultSize,
        pages: defaultPages,
        rulingType: defaultRuling,
        price: defaultVariant.price,
        quantity: 1,
        thumbnail: product.media?.thumbnail,
      },
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  // --------------------------------------------------
  // RENDER
  // --------------------------------------------------
  return (
    <div
      className="min-h-[50vh] lg:min-h-[80vh] bg-highlight rounded-md 
    hover:shadow-xl transition duration-300 
    overflow-hidden relative group border border-gray-50 
    flex flex-col justify-between"
    >
      {/* SALE BADGE */}
      {/* {product.discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {product.pricing.discountPercentage}% OFF
        </div>
      )} */}

      {priceData.discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          {priceData.discount}% OFF
        </div>
      )}

      {product.isFeatured && (
        <div className="absolute top-3 right-3 z-10 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Featured
        </div>
      )}
      {/* PRODUCT IMAGE */}
      <div
        className="cursor-pointer relative"
        onClick={() => navigate(detailRoute)}
      >
        <img
          src={
            product.media?.thumbnail ||
            product.media?.images?.[0] ||
            "/fallback.jpg"
          }
          alt={product.name}
          className="w-full h-[33vh] lg:h-[60vh] object-cover 
     group-hover:scale-[1.03] transition duration-300"
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="p-2 lg:p-3 flex flex-col gap-2">
        {/* NAME */}
        <h3
          className="text-xs lg:text-[0.9rem] font-semibold text-center 
     text-gray-900 cursor-pointer"
          onClick={() => navigate(detailRoute)}
        >
          {product.name}
        </h3>

        {/* PRICE + RATING */}
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-bold text-sm lg:text-lg">
            ₹{priceData.current}
          </span>

          {priceData.original > priceData.current && (
            <span className="line-through text-gray-400 text-sm">
              ₹{priceData.original}
            </span>
          )}
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full py-2 flex items-center justify-center gap-2 
     bg-highlight border border-gray-500 font-bold  hover:bg-gray-900 hover:text-highlight transition"
        >
          {isAdding ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <ShoppingCart className="w-4 h-4" />
          )}
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
