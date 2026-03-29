// import React, { useState, useMemo, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import {
//   Search,
//   ShoppingCart,
//   Filter,
//   Clock,
//   CheckCircle,
// } from "lucide-react";

// import Button from "../components/UI/Button";
// import Input from "../components/UI/Input";
// import ProductCard from "../components/ProductCard";
// import CategoryCard from "../components/CategoryCard";
// import * as LucideIcons from "lucide-react";

// import { CATEGORIES } from "../data/dummyProducts";
// import useProducts from "../hooks/useProducts";

// // ---------------- LISTING VIEW ----------------
// const ProductListingView = ({
//   selectedCategory,
//   searchTerm,
//   setSearchTerm,
//   filteredProducts,
//   navigate,
//   isFilterOpen,
//   setIsFilterOpen,
//   selectedFilter,
//   setSelectedFilter,
//   franchiseList,
//   dispatchCart,
// }) => {
//   return (
//     <>
//       <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
//         {selectedCategory} Store
//       </h1>

//       <p className="text-xl text-primary mb-8">
//         Pick your favorite design, add to cart, and checkout!
//       </p>

//       {/* Search + Filter Bar */}
//       <div className="bg-white py-2 mb-8 rounded-xl shadow-lg border flex items-center justify-between">
//         <div className="flex-grow flex items-center space-x-4 px-4">
//           <Search className="w-5 h-5 text-gray-400 hidden sm:block" />
//           <Input
//             type="text"
//             placeholder={`Search within ${selectedCategory}...`}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="!border-none !p-2 !shadow-none focus:ring-0 w-full"
//           />
//         </div>

//         {franchiseList.length > 0 && (
//           <Button
//             variant="outline"
//             className="px-4 py-2 mr-4 flex items-center text-sm"
//             onClick={() => setIsFilterOpen((p) => !p)}
//           >
//             <Filter className="w-5 h-5 mr-2" /> Filter
//           </Button>
//         )}
//       </div>

//       {/* Filter Chips */}
//       {isFilterOpen && franchiseList.length > 0 && (
//         <div className="mb-6 flex flex-wrap gap-3">
//           {franchiseList.map((fr) => (
//             <button
//               key={fr}
//               onClick={() =>
//                 setSelectedFilter(selectedFilter === fr ? null : fr)
//               }
//               className={`px-4 py-2 rounded-full border text-sm transition
//                 ${
//                   selectedFilter === fr
//                     ? "bg-primary text-white border-primary"
//                     : "bg-gray-200 hover:bg-gray-300 border-gray-300"
//                 }`}
//             >
//               {fr}
//             </button>
//           ))}

//           {selectedFilter && (
//             <button
//               onClick={() => setSelectedFilter(null)}
//               className="px-4 py-2 rounded-full border text-sm bg-red-100 text-red-700 border-red-300"
//             >
//               Clear Filter
//             </button>
//           )}
//         </div>
//       )}

//       {/* Products Grid */}
//       <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//         {filteredProducts.length} results in{" "}
//         <span className="text-primary">{selectedCategory}</span>
//       </h2>

//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               dispatchCart={dispatchCart}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20 bg-gray-50 rounded-2xl border-4 border-dashed border-gray-300">
//           <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h3 className="text-2xl text-gray-600 font-semibold">
//             No Products Found
//           </h3>
//           <Button onClick={() => navigate("/products")} className="mt-6">
//             Back to Category Hub
//           </Button>
//         </div>
//       )}
//     </>
//   );
// };

// // ---------------- CATEGORY HUB ----------------
// const CategoryHubView = ({ navigate }) => {
//   const futureCategories = [
//     { name: "Gifts & More", icon: "Shirt" },
//     { name: "Business Essentials", icon: "Megaphone" },
//     { name: "3D Printing", icon: "Clock" },
//   ];

//   return (
//     <div className="py-10">
//       <h1 className="text-5xl font-extrabold text-primary mb-3">
//         Ready-Made Products
//       </h1>

//       <p className="text-xl text-gray-900 mb-12 max-w-3xl">
//         Browse our curated collections of posters, stickers, and merchandise.
//       </p>

//       <div className="mb-16">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
//           <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
//           Shop Our Featured Ranges
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           {CATEGORIES.map((cat) => (
//             <CategoryCard key={cat.name} category={cat} />
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
//           <Clock className="w-6 h-6 mr-3 text-yellow-500" />
//           Coming Soon
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           {futureCategories.map((cat) => {
//             const Icon = LucideIcons[cat.icon] || LucideIcons.Clock;
//             return (
//               <div
//                 key={cat.name}
//                 className="bg-white border border-dashed border-gray-300 p-8 rounded-2xl opacity-70 cursor-not-allowed text-center"
//               >
//                 <div className="p-4 bg-yellow-100 rounded-full mb-4 mx-auto w-fit">
//                   <Icon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-lg font-bold">{cat.name}</h3>
//                 <p className="text-sm text-yellow-600 font-semibold">
//                   Coming Soon!
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ---------------- MAIN PRODUCTS ----------------
// const Products = ({ dispatchCart }) => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const { products, loading, error } = useProducts();

//   const selectedCategory = searchParams.get("category");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState(null);

//   useEffect(() => {
//     setSearchTerm("");
//     setSelectedFilter(null);
//   }, [selectedCategory]);

//   // Franchise list from Firestore
//   const franchiseList = useMemo(() => {
//     if (!selectedCategory) return [];
//     return [
//       ...new Set(
//         products
//           .filter((p) => p.category === selectedCategory)
//           .map((p) => p.collections?.franchise)
//           .filter(Boolean)
//       ),
//     ];
//   }, [products, selectedCategory]);

//   // Filtering logic
//   const filteredProducts = useMemo(() => {
//     if (!selectedCategory) return [];

//     let result = products.filter(
//       (p) => p.category === selectedCategory
//     );

//     if (searchTerm.trim()) {
//       const s = searchTerm.toLowerCase();
//       result = result.filter(
//         (p) =>
//           p.name.toLowerCase().includes(s) ||
//           p.description?.toLowerCase().includes(s)
//       );
//     }

//     if (selectedFilter) {
//       result = result.filter(
//         (p) => p.collections?.franchise === selectedFilter
//       );
//     }

//     return result;
//   }, [products, selectedCategory, searchTerm, selectedFilter]);

//   if (loading) {
//     return <div className="text-center py-20">Loading products…</div>;
//   }

//   if (error) {
//     return <div className="text-center py-20 text-red-500">Failed to load products</div>;
//   }

//   return (
//     <div className="max-w-8xl mx-auto px-10 py-10">
//       {!selectedCategory ? (
//         <CategoryHubView navigate={navigate} />
//       ) : (
//         <ProductListingView
//           selectedCategory={selectedCategory}
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//           filteredProducts={filteredProducts}
//           navigate={navigate}
//           isFilterOpen={isFilterOpen}
//           setIsFilterOpen={setIsFilterOpen}
//           selectedFilter={selectedFilter}
//           setSelectedFilter={setSelectedFilter}
//           franchiseList={franchiseList}
//           dispatchCart={dispatchCart}
//         />
//       )}
//     </div>
//   );
// };

// export default Products;

import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Filter, Clock, CheckCircle } from "lucide-react";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import * as LucideIcons from "lucide-react";

import { CATEGORIES } from "../data/dummyProducts";
import useProducts from "../hooks/useProducts";

// ---------------- LISTING VIEW ----------------
const ProductListingView = ({
  selectedCategory,
  collection,
  searchTerm,
  setSearchTerm,
  filteredProducts,
  navigate,
  isFilterOpen,
  setIsFilterOpen,
  selectedFilter,
  setSelectedFilter,
  franchiseList,
  dispatchCart,
}) => {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
        {[collection, selectedCategory]
          .filter(Boolean)
          .join(" ")
          .replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>

      <p className="text-xl text-primary mb-8">
        Pick your favorite design, add to cart, and checkout!
      </p>

      {/* Search */}
      <div className="bg-white py-2 mb-8 rounded-xl shadow-lg border flex items-center justify-between">
        <div className="flex-grow flex items-center space-x-4 px-4">
          <Search className="w-5 h-5 text-gray-400 hidden sm:block" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!border-none !p-2 !shadow-none focus:ring-0 w-full"
          />
        </div>
      </div>

      {/* Products */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        {filteredProducts.length} results
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              dispatchCart={dispatchCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border-4 border-dashed border-gray-300">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl text-gray-600 font-semibold">
            No Products Found
          </h3>
          <Button onClick={() => navigate("/products")} className="mt-6">
            Back to Category Hub
          </Button>
        </div>
      )}
    </>
  );
};

// ---------------- CATEGORY HUB ----------------
const CategoryHubView = ({ navigate }) => {
  const futureCategories = [
    { name: "Gifts & More", icon: "Shirt" },
    { name: "Business Essentials", icon: "Megaphone" },
    { name: "3D Printing", icon: "Clock" },
  ];

  return (
    <div className="py-3 md:py-10">
      <h1 className="text-5xl font-extrabold text-primary mb-3">
        Ready-Made Products
      </h1>

      <p className="text-xl text-gray-900 mb-12 max-w-3xl">
        Browse our curated collections of posters, stickers, and merchandise.
      </p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
          Shop Our Featured Ranges
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-3 text-yellow-500" />
          Coming Soon
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {futureCategories.map((cat) => {
            const Icon = LucideIcons[cat.icon] || LucideIcons.Clock;
            return (
              <div
                key={cat.name}
                className="bg-white border border-dashed border-gray-300 p-8 rounded-2xl opacity-70 text-center"
              >
                <div className="p-4 bg-yellow-100 rounded-full mb-4 mx-auto w-fit">
                  <Icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold">{cat.name}</h3>
                <p className="text-sm text-yellow-600 font-semibold">
                  Coming Soon!
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ---------------- MAIN PRODUCTS ----------------
const Products = ({ dispatchCart }) => {
  const navigate = useNavigate();
  const { categorySlug, collection } = useParams();
  const location = useLocation();

  const selectedCategory = location.pathname.includes("posters")
    ? "Posters"
    : location.pathname.includes("notebooks")
      ? "Notebooks"
      : location.pathname.includes("journals")
        ? "Journals"
      : location.pathname.includes("banners")
        ? "Banners"
        : null;

  const { products, loading, error } = useProducts();

  // const selectedCategory =
  //   categorySlug === "posters"
  //     ? "Posters"
  //     : categorySlug === "s"
  //       ? " Books"
  //       : null;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm("");
  }, [collection]);

  // filtering
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    let result = products.filter((p) => p.category === selectedCategory);

    // ⭐ ALL (no filter)
    if (!collection || collection === "all") {
      return result;
    }

    // ⭐ TRENDING
    if (collection === "trending") {
      result = result.filter((p) => p.isNewArrival);
    } else {
      // ⭐ COLLECTION FILTER
      result = result.filter(
        (p) =>
          p.collections?.franchise?.toLowerCase() === collection.toLowerCase()
      );
    }

    // ⭐ SEARCH
    if (searchTerm.trim()) {
      const s = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.description?.toLowerCase().includes(s)
      );
    }

    return result;
  }, [products, selectedCategory, collection, searchTerm]);

  if (loading) return <div className="text-center py-20">Loading…</div>;
  if (error)
    return (
      <div className="text-center py-20 text-red-500">
        Error loading products
      </div>
    );

  console.log("CATEGORY:", selectedCategory);
  console.log("collec:", collection);

  return (
    <div className="max-w-8xl mx-auto px-4 md:px-10 py-10">
      {/* CATEGORY HUB */}
      {!selectedCategory && <CategoryHubView navigate={navigate} />}

      {/* LISTING PAGE */}
      {selectedCategory && collection && (
        <ProductListingView
          selectedCategory={selectedCategory}
          collection={collection}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredProducts={filteredProducts}
          navigate={navigate}
          dispatchCart={dispatchCart}
        />
      )}
    </div>
  );
};

export default Products;
