

// import React, { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import useProducts from "../hooks/useProducts";

// const Collections = () => {
//   const navigate = useNavigate();
//   const { products } = useProducts();

//   const collections = useMemo(() => {
//     return [
//       ...new Set(
//         products
//           .filter(p => p.category === " Books")
//           .map(p => p.collections?.franchise)
//           .filter(Boolean)
//       ),
//     ];
//   }, [products]);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-extrabold mb-10"> Collections</h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {collections.map(col => (
//           <div
//             key={col}
//             onClick={() => navigate(`/products/s/${col}`)}
//             className="cursor-pointer p-6 rounded-2xl bg-white shadow hover:shadow-xl transition text-center"
//           >
//             <h3 className="font-bold text-lg">{col}</h3>
//             <p className="text-sm text-gray-500 mt-1">Explore</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collections;