// import React, { useState } from "react";
// import { Upload, ShoppingCart, Minus, Plus, RefreshCw, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { uploadToCloudinary } from "../utils/uploadToCloudinary";

// const DEFAULT_EDITOR_STATE = {
//   scale: 1,
//   rotate: 0,
//   brightness: 100,
//   contrast: 100,
// };

// export default function CustomProduct({ config }) {
//   const navigate = useNavigate();
//   const { dispatchCart } = useCart();

//   if (!config) {
//     return (
//       <div className="max-w-7xl mx-auto px-6 py-20 text-center text-gray-500">
//         Configuration not found.
//       </div>
//     );
//   }

//   const [selectedSize, setSelectedSize] = useState(
//     config.productOptions.size.find((s) => s.id === config.productOptions.defaultSize) || config.productOptions.size[0]
//   );
//   const [quantity, setQuantity] = useState(1);
//   const [imageFile, setImageFile] = useState(null); // { file, url, publicId }
//   const [editor, setEditor] = useState(DEFAULT_EDITOR_STATE);
//   const [isUploading, setIsUploading] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Upload handler
//   const handleImageUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       alert("Please upload a valid image file (JPG, PNG, WebP).");
//       return;
//     }

//     setIsUploading(true);

//     try {
//       const { url, publicId } = await uploadToCloudinary(file);
//       setImageFile({ file, url, publicId });
//       setEditor(DEFAULT_EDITOR_STATE); // Reset edits on new image upload
//     } catch (err) {
//       console.error("Cloudinary upload failed:", err);
//       alert("Failed to upload image. Please try again.");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   // Add to cart payload creation
//   const handleAddToCart = () => {
//     if (!imageFile?.url) {
//       alert("Please upload an image before adding to cart.");
//       return;
//     }

//     setIsSubmitting(true);

//     dispatchCart({
//       type: "ADD_ITEM",
//       payload: {
//         productId: config.id,
//         name: config.title,
//         variantId: selectedSize.id,
//         variantLabel: selectedSize.label,
//         price: selectedSize.price,
//         quantity,
//         thumbnail: imageFile.url,
//         productType: "custom",
//         customImage: {
//           url: imageFile.url,
//           publicId: imageFile.publicId,
//           edits: { ...editor },
//         },
//       },
//     });

//     setTimeout(() => {
//       setIsSubmitting(false);
//       navigate("/cart");
//     }, 300);
//   };

//   const handleResetEdits = () => setEditor(DEFAULT_EDITOR_STATE);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 min-h-[80vh]">
//       <div className="mb-8">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{config.title}</h1>
//         <p className="mt-2 text-gray-600">{config.description}</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
//         {/* LEFT COLUMN: CANVAS & EDIT CONTROLS */}
//         <div className="flex flex-col gap-6">
//           <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 sm:p-6 text-center bg-gray-50 flex flex-col items-center justify-center min-h-[380px]">
//             {imageFile?.url ? (
//               <div
//                 className="relative w-full overflow-hidden rounded-xl bg-white shadow-inner flex items-center justify-center"
//                 style={{ aspectRatio: config.aspectRatio || "3/4" }}
//               >
//                 <img
//                   src={imageFile.url}
//                   alt="Custom print preview"
//                   className="w-full h-full object-contain transition-transform duration-75 ease-out select-none"
//                   style={{
//                     transform: `scale(${editor.scale}) rotate(${editor.rotate}deg)`,
//                     filter: `brightness(${editor.brightness}%) contrast(${editor.contrast}%)`,
//                   }}
//                 />
//               </div>
//             ) : (
//               <div className="py-12 flex flex-col items-center">
//                 {isUploading ? (
//                   <Loader2 className="w-12 h-12 text-gray-400 animate-spin mb-4" />
//                 ) : (
//                   <Upload className="w-12 h-12 text-gray-400 mb-4" />
//                 )}
//                 <p className="text-gray-700 font-medium mb-1">
//                   {isUploading ? "Uploading image..." : "Upload your high-resolution image"}
//                 </p>
//                 <p className="text-xs text-gray-400 max-w-xs">
//                   JPG, PNG, or WebP. High resolution recommended for best print quality.
//                 </p>
//               </div>
//             )}

//             <label className="mt-6 inline-block">
//               <input
//                 type="file"
//                 accept="image/*"
//                 hidden
//                 disabled={isUploading}
//                 onChange={handleImageUpload}
//               />
//               <span className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition cursor-pointer inline-flex items-center gap-2">
//                 {imageFile ? "Replace Image" : "Choose Image"}
//               </span>
//             </label>
//           </div>

//           {/* DYNAMIC EDIT CONTROLS */}
//           {imageFile?.url && (
//             <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
//               <div className="flex justify-between items-center mb-1">
//                 <span className="text-sm font-semibold text-gray-900">Adjustments</span>
//                 <button
//                   type="button"
//                   onClick={handleResetEdits}
//                   className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-medium"
//                 >
//                   <RefreshCw size={12} /> Reset
//                 </button>
//               </div>

//               {config.allowedEdits.zoom && (
//                 <RangeControl
//                   label="Zoom"
//                   min={1}
//                   max={2.5}
//                   step={0.05}
//                   value={editor.scale}
//                   onChange={(scale) => setEditor((prev) => ({ ...prev, scale }))}
//                 />
//               )}

//               {config.allowedEdits.rotate && (
//                 <RangeControl
//                   label="Rotation (°)"
//                   min={-180}
//                   max={180}
//                   step={1}
//                   value={editor.rotate}
//                   onChange={(rotate) => setEditor((prev) => ({ ...prev, rotate }))}
//                 />
//               )}

//               {config.allowedEdits.brightness && (
//                 <RangeControl
//                   label="Brightness"
//                   min={70}
//                   max={130}
//                   step={1}
//                   value={editor.brightness}
//                   onChange={(brightness) => setEditor((prev) => ({ ...prev, brightness }))}
//                 />
//               )}

//               {config.allowedEdits.contrast && (
//                 <RangeControl
//                   label="Contrast"
//                   min={80}
//                   max={130}
//                   step={1}
//                   value={editor.contrast}
//                   onChange={(contrast) => setEditor((prev) => ({ ...prev, contrast }))}
//                 />
//               )}
//             </div>
//           )}
//         </div>

//         {/* RIGHT COLUMN: OPTIONS & PRICE */}
//         <div className="flex flex-col justify-between">
//           <div className="space-y-6">
//             {/* VARIANT / SIZE SELECTION */}
//             <div>
//               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
//                 Select Size
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {config.productOptions.size.map((sizeOption) => {
//                   const isSelected = selectedSize.id === sizeOption.id;
//                   return (
//                     <button
//                       key={sizeOption.id}
//                       type="button"
//                       onClick={() => setSelectedSize(sizeOption)}
//                       className={`p-3.5 text-left rounded-xl border text-sm transition font-medium flex justify-between items-center ${
//                         isSelected
//                           ? "border-gray-900 bg-gray-900 text-white shadow-sm"
//                           : "border-gray-200 bg-white text-gray-800 hover:border-gray-300"
//                       }`}
//                     >
//                       <span>{sizeOption.label}</span>
//                       <span className={isSelected ? "text-gray-200" : "text-gray-500"}>
//                         ₹{sizeOption.price}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* TOTAL PRICE */}
//             <div className="border-t border-b border-gray-100 py-4 flex items-baseline justify-between">
//               <span className="text-sm font-medium text-gray-500">Total Price</span>
//               <span className="text-3xl font-extrabold text-gray-900">
//                 ₹{selectedSize.price * quantity}
//               </span>
//             </div>

//             {/* QUANTITY PICKER */}
//             <div>
//               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
//                 Quantity
//               </h3>
//               <div className="inline-flex items-center border border-gray-200 rounded-xl bg-white">
//                 <button
//                   type="button"
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                   className="p-3 text-gray-600 hover:text-gray-900"
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <span className="w-12 text-center font-semibold text-gray-900">{quantity}</span>
//                 <button
//                   type="button"
//                   onClick={() => setQuantity((q) => q + 1)}
//                   className="p-3 text-gray-600 hover:text-gray-900"
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* ADD TO CART */}
//           <div className="mt-8 pt-6 border-t border-gray-100">
//             <button
//               type="button"
//               onClick={handleAddToCart}
//               disabled={isUploading || isSubmitting}
//               className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl flex items-center justify-center hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition gap-2 shadow-lg shadow-gray-200"
//             >
//               {isSubmitting ? (
//                 <Loader2 className="w-5 h-5 animate-spin" />
//               ) : (
//                 <ShoppingCart className="w-5 h-5" />
//               )}
//               {isSubmitting ? "Adding to Cart..." : "Add to Cart"}
//             </button>
//             <p className="text-xs text-center text-gray-400 mt-3">
//               Colors may vary slightly in print. Custom personalized products are non-returnable.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Internal Helper for sliders
// const RangeControl = ({ label, min, max, step = 1, value, onChange }) => (
//   <div className="flex flex-col gap-1">
//     <div className="flex justify-between text-xs text-gray-600 font-medium">
//       <span>{label}</span>
//       <span>{typeof value === "number" ? value.toFixed(step < 1 ? 2 : 0) : value}</span>
//     </div>
//     <input
//       type="range"
//       min={min}
//       max={max}
//       step={step}
//       value={value}
//       onChange={(e) => onChange(Number(e.target.value))}
//       className="w-full accent-gray-900 cursor-pointer h-1.5 bg-gray-200 rounded-lg appearance-none"
//     />
//   </div>
// );