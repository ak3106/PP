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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Star, Layers } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // Default quick-add options
  const defaultOptions = product.options || {};
  const DEFAULT_SIZE = defaultOptions.size?.includes("A4")
    ? "A4"
    : defaultOptions.size?.[0] || "A4";
  const DEFAULT_TYPE = defaultOptions.paperType?.includes("Glossy")
    ? "Glossy"
    : defaultOptions.paperType?.[0] || "Glossy";

  const displayPrice = product.pricing.salePrice;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (quantity < 1 || isAdding) return;

    setIsAdding(true);

    dispatchCart({
      type: "ADD_ITEM",
      payload: {
        product,
        selectedSize: DEFAULT_SIZE,
        selectedType: DEFAULT_TYPE,
        quantity: 1,
      },
    });

    setTimeout(() => {
      setIsAdding(false);
      alert(`Added 1x ${product.name} (${DEFAULT_SIZE}) to cart!`);
      setQuantity(1);
    }, 800);
  };

  return (
    <div className="max-h-[50vh] lg:max-h-[80vh] bg-highlight rounded-md hover:shadow-xl transition duration-300 overflow-hidden relative group border border-gray-50">
      {/* SALE BADGE */}
      {product.pricing.discountPercentage > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          {product.pricing.discountPercentage}% OFF
        </div>
      )}

      {/* FEATURED BADGE */}
      {product.isFeatured && (
        <div className="hidden absolute top-3 right-3 z-10 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Featured
        </div>
      )}

      {/* PRODUCT IMAGE */}
      <div
        className="cursor-pointer relative"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.name}
          className="w-full h-[33vh] lg:h-[65vh] object-cover group-hover:scale-[1.03] transition duration-300"
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="p-1 lg:p-3 relative flex flex-col h-full">
        {/* NAME */}
        <h3
          className="text-sm lg:text-md font-[montserrat] tracking-tight text-center leading-5 lg:leading-6 text-gray-900 cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>

        {/* DEFAULT SIZE INDICATOR */}
        <div className="flex items-center gap-1 mt-1 text-xs lg:text-sm text-primary font-semibold">
          <Layers className="w-3 h-3" />
          <span>{DEFAULT_SIZE}</span>
        </div>

        {/* PRICE & RATING */}
        <div className="flex justify-between items-center mt-1 mb-1 lg:mt-2">
          <div>
            {product.pricing.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-bold text-md lg:text-lg">
                  ₹{displayPrice}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  ₹{product.pricing.basePrice}
                </span>
              </div>
            ) : (
              <span className="text-indigo-600 font-bold text-xl">
                ₹{product.pricing.basePrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-yellow-600">
            <Star className="w-2 h-2 lg:w-3 lg:h-3" />
            <span className="text-xs lg:text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={handleAddToCart}
          className=" w-full mt-auto flex items-center justify-center gap-2 sticky bottom-2 py-1 bg-highlight text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-highlight transition duration-300"
          disabled={isAdding}
        >
          {isAdding ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
          ) : (
            <ShoppingCart className="w-4 h-4 mr-1 lg:mr-2 lg:h-5 lg:w-5" />
          )}
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;