import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Filter,
  X,
  Clock,
  CheckCircle,
} from "lucide-react";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import * as LucideIcons from "lucide-react";

import { PRODUCTS, CATEGORIES as CATEGORIES } from "../data/dummyProducts";


// ---------------- LISTING VIEW ----------------
const ProductListingView = ({
  selectedCategory,
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
        {selectedCategory} Store
      </h1>

      <p className="text-xl text-primary mb-8">
        Pick your favorite design, add to cart, and checkout!
      </p>

      {/* Search + Filter Bar */}
      <div className="top-20 bg-white py-2 mb-8 rounded-xl shadow-lg border flex items-center justify-between">
        <div className="flex-grow flex items-center space-x-4 px-4">
          <Search className="w-5 h-5 text-gray-400 hidden sm:block" />
          <Input
            type="text"
            placeholder={`Search within ${selectedCategory}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!border-none !p-2 !shadow-none focus:ring-0 w-full"
          />
        </div>

        {franchiseList.length > 0 && (
          <Button
            variant="outline"
            className="px-4 py-2 mr-4 flex items-center text-sm"
            onClick={() => setIsFilterOpen((p) => !p)}
          >
            <Filter className="w-5 h-5 mr-2" /> Filter
          </Button>
        )}
      </div>

      {/* Inline Filter Chips */}
      {isFilterOpen && franchiseList.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-3">
          {franchiseList.map((fr) => (
            <button
              key={fr}
              onClick={() =>
                setSelectedFilter(selectedFilter === fr ? null : fr)
              }
              className={`px-4 py-2 rounded-full border text-sm transition 
                ${
                  selectedFilter === fr
                    ? "bg-primary text-white border-primary"
                    : "bg-gray-200 hover:bg-gray-300 border-gray-300"
                }`}
            >
              {fr}
            </button>
          ))}

          {selectedFilter && (
            <button
              onClick={() => setSelectedFilter(null)}
              className="px-4 py-2 rounded-full border text-sm bg-red-100 text-red-700 border-red-300"
            >
              Clear Filter
            </button>
          )}
        </div>
      )}

      {/* Products Grid */}
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {filteredProducts.length} results in{" "}
          <span className="text-primary">{selectedCategory}</span>
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              No Products Yet in {selectedCategory}
            </h3>
            <Button onClick={() => navigate("/products")} className="mt-6">
              Back to Category Hub
            </Button>
          </div>
        )}
      </div>
    </>
  );
};


// ---------------- CATEGORY HUB VIEW ----------------
const CategoryHubView = ({ navigate }) => {

  const primaryCategories = CATEGORIES;

  const futureCategories = [
    { name: "Gifts & More", icon: "Shirt" },
    { name: "Business Essentials", icon: "Megaphone" },
    { name: "3D Printing", icon: "Clock" },
  ];

  return (
    <div className="py-10">
      <h1 className="text-5xl font-extrabold text-primary mb-3">
        Ready-Made Products
      </h1>

      <p className="text-xl text-gray-900 mb-12 max-w-3xl">
        Browse our curated collections of posters, stickers, and merchandise.
        Click a category to shop!
      </p>

      {/* Primary Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
          Shop Our Featured Ranges
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {primaryCategories.map((cat) => (
            <CategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-3 text-yellow-500" />
          Exciting New Product Lines
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {futureCategories.map((cat) => {
            const Icon = LucideIcons[cat.icon] || LucideIcons.Clock;
            return (
              <div
                key={cat.name}
                className="bg-white border border-dashed border-gray-300 p-8 rounded-2xl opacity-70 cursor-not-allowed text-center"
              >
                <div className="p-4 bg-yellow-100 rounded-full mb-4 mx-auto w-fit">
                  <Icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-yellow-600 font-semibold">
                  Coming Soon!
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-16 p-8 bg-gray-100 rounded-xl">
        <p className="text-lg text-gray-900 font-semibold">
          Need custom printing or bulk orders?
        </p>
        <Button onClick={() => navigate("/services")} className="mt-4">
          Explore Custom Services
        </Button>
      </div>
    </div>
  );
};


// ---------------- MAIN PRODUCTS COMPONENT ----------------
const Products = ({ dispatchCart }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || null;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);


  useEffect(() => {
    const urlCategory = searchParams.get("category") || null;
    setSelectedCategory(urlCategory);
    setSearchTerm("");
    setSelectedFilter(null);
  }, [searchParams]);


  // Build Franchise Filter List
  const franchiseList = useMemo(() => {
    if (!selectedCategory) return [];

    return [
      ...new Set(
        PRODUCTS
          .filter((p) => p.category === selectedCategory)
          .map((p) => p.collections?.franchise)
          .filter(Boolean)
      ),
    ];
  }, [selectedCategory]);


  // Filtering Logic
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    let result = PRODUCTS.filter(
      (p) => p.category === selectedCategory
    );

    if (searchTerm.trim()) {
      const s = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s)
      );
    }

    if (selectedFilter) {
      result = result.filter(
        (p) => p.collections?.franchise === selectedFilter
      );
    }

    return result.sort((a, b) => b.rating - a.rating);
  }, [selectedCategory, searchTerm, selectedFilter]);


  return (
    <div className="max-w-8xl mx-auto px-10 py-10">
      {!selectedCategory ? (
        <CategoryHubView navigate={navigate} />
      ) : (
        <ProductListingView
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredProducts={filteredProducts}
          navigate={navigate}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          franchiseList={franchiseList}
          dispatchCart={dispatchCart}
        />
      )}
    </div>
  );
};

export default Products;
