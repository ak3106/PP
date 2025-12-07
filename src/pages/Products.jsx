import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Filter,
  X,
  ArrowRight,
  Clock,
  CheckCircle,
  Megaphone,
  Shirt,
  Layers,
  Image,
  Star,
  ShoppingBag,
  Briefcase,
  Heart,
  Package,
  Truck,
  Printer,
  Users,
} from "lucide-react";

// Import local components and data
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
// Use the ECOMMERCE data lists
import { PRODUCTS, CATEGORIES as CATEGORIES } from "../data/dummyProducts";

// Helper function to dynamically get the Lucide icon from the full library
// Note: This collects all imported icons into an object for dynamic use in CategoryHubView.
const LucideIcons = {
  Search,
  ShoppingCart,
  Filter,
  X,
  ArrowRight,
  Clock,
  CheckCircle,
  Megaphone,
  Shirt,
  Layers,
  Image,
  Star,
  ShoppingBag,
  Briefcase,
  Heart,
  Package,
  Truck,
  Printer,
  Users,
};

/**
 * Renders the filtered list of products for a specific E-commerce category (e.g., /products?category=Posters).
 * This view allows searching and filtering within the selected category.
 */
const ProductListingView = ({
  selectedCategory,
  searchTerm,
  setSearchTerm,
  filteredProducts,
  handleCategoryChange,
  CATEGORIES,
  navigate,
  isFilterOpen, // <-- Correct prop access
  setIsFilterOpen, // <-- Correct prop access
  dispatchCart,
}) => {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 animate-fadeInDown">
        {selectedCategory} Store
      </h1>
      <p className="text-xl text-indigo-600 mb-8 animate-fadeInDown delay-100">
        Pick your favorite design, add to cart, and checkout!
      </p>

      {/* Sticky Filter Bar (Desktop) / Mobile Toggle */}
      <div className=" top-20 z-40 bg-white py-4 mb-8 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between transition-all duration-300">
        <div className="flex-grow flex items-center space-x-4 px-4">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0 hidden sm:block" />
          <Input
            type="text"
            placeholder={`Search within ${selectedCategory}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!border-none !p-2 !shadow-none focus:ring-0 w-full"
          />
        </div>

        {/* Mobile Filter Button */}
        <Button
          variant="outline"
          className="md:hidden px-4 py-2 mr-4 flex items-center text-sm"
          onClick={() => setIsFilterOpen(true)}
        >
          <Filter className="w-5 h-5 mr-2" /> Filters
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex">
        {/* Desktop Filter Sidebar (Category Navigation) */}
        <aside className="hidden md:block w-64 mr-8 flex-shrink-0 sticky top-40 h-fit p-6 bg-gray-50 rounded-2xl shadow-xl animate-fadeInLeft">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
            <Filter className="w-5 h-5 mr-2" /> Categories
          </h3>
          <div className="space-y-2">
            {/* Link back to the main Hub */}
            <div
              onClick={() => handleCategoryChange(null)}
              className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition duration-150 
                              ${selectedCategory === null ? "bg-indigo-600 text-white font-semibold" : "text-gray-700 hover:bg-gray-200"}`}
            >
              <span>&larr; Back to Hub</span>
            </div>
            {/* Category list for quick switching */}
            {CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                onClick={() => handleCategoryChange(cat.name)}
                className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition duration-150 
                                  ${
                                    selectedCategory === cat.name
                                      ? "bg-indigo-600 text-white font-semibold"
                                      : "text-gray-700 hover:bg-gray-200"
                                  }`}
              >
                <span>{cat.name}</span>
                <ArrowRight
                  className={`w-4 h-4 transition ${selectedCategory === cat.name ? "rotate-0" : "rotate-45 opacity-0"}`}
                />
              </div>
            ))}
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            {filteredProducts.length} results in{" "}
            <span className="text-indigo-600">{selectedCategory}</span>
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  dispatchCart={dispatchCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-4 border-dashed border-gray-300 animate-pulse-slow">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl text-gray-600 font-semibold">
                    No Products Yet in {selectedCategory}
              </h3>
              <p className="text-gray-500 mt-2">
                Try clearing the search term or view another category.
              </p>
              <Button onClick={() => navigate("/products")} className="mt-6">
                Back to Category Hub
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 md:hidden ${isFilterOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className="absolute inset-0 bg-gray-900 opacity-70"
          onClick={() => setIsFilterOpen(false)}
        ></div>
        <div className="absolute right-0 w-80 max-w-full h-full bg-white shadow-2xl p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6 border-b pb-3">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <Filter className="w-6 h-6 mr-2" /> Categories
            </h3>
            <Button
              variant="secondary"
              onClick={() => setIsFilterOpen(false)}
              className="p-2"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <h4 className="text-lg font-semibold text-gray-700 mb-3">
            Select Category
          </h4>
          <div className="space-y-3">
            <Button
              onClick={() => handleCategoryChange(null)}
              variant={selectedCategory === null ? "primary" : "secondary"}
              className="w-full justify-start"
            >
              &larr; Back to Hub
            </Button>
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.name}
                onClick={() => handleCategoryChange(cat.name)}
                variant={
                  selectedCategory === cat.name ? "primary" : "secondary"
                }
                className="w-full justify-start"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * Renders the main Category Hub view when no category is selected.
 */
const CategoryHubView = ({ navigate }) => {
  // Core E-commerce Categories
  const primaryCategories = CATEGORIES;

  // Future/Coming Soon Categories (using generic Lucide Icons)
  const futureCategories = [
    { name: "Gifts & More", icon: "Shirt" },
    { name: "Business Essentials", icon: "Megaphone" },
    { name: "3D Printing", icon: "Clock" },
  ];

  return (
    <div className="py-10">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-3 animate-fadeInDown">
        Ready-Made Products
      </h1>
      <p className="text-xl text-indigo-600 mb-12 animate-fadeInDown delay-100 max-w-3xl">
        Browse our curated collections of posters, stickers, and merchandise.
        Click a category to shop!
      </p>

      {/* Primary Categories Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
          Shop Our Featured E-commerce Ranges
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {primaryCategories.map((cat) => (
            // CategoryCard uses useNavigate internally to push the filtered URL
            <CategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
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
                className="bg-white border border-dashed border-gray-300 p-6 sm:p-8 rounded-2xl opacity-70 cursor-not-allowed text-center"
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

      <div className="text-center mt-16 p-8 bg-indigo-50 rounded-xl">
        <p className="text-lg text-indigo-800 font-semibold">
          Need help with custom design or bulk services?
        </p>
        <Button onClick={() => navigate("/services")} className="mt-4">
          Explore Custom Services
        </Button>
      </div>
    </div>
  );
};

// --- Main Products Component ---
/**
 * Renders either the Category Hub or the specific Product Listing, based on the URL query.
 */
const Products = ({ dispatchCart }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // State initialization based on URL parameter
  const initialCategory = searchParams.get("category") || null;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Update selectedCategory if URL parameter changes
  useEffect(() => {
    const urlCategory = searchParams.get("category") || null;
    setSelectedCategory(urlCategory);
    setSearchTerm("");
  }, [searchParams]);

  // Handle Category Change (updates URL for persistence and sharing)
  const handleCategoryChange = (categoryName) => {
    if (categoryName === null) {
      navigate("/products"); // Back to Hub
    } else {
      navigate(`/products?category=${categoryName}`);
    }
    setIsFilterOpen(false);
  };

  // Filtering Logic (only runs if a category is selected)
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    let result = PRODUCTS; // Use the dedicated ECOMMERCE product list

    // 1. Filter by Category
    result = result.filter((p) => p.category === selectedCategory);

    // 2. Filter by Search Term
    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSearchTerm) ||
          p.description.toLowerCase().includes(lowerSearchTerm)
      );
    }

    // 3. Simple sort by rating (highest first)
    result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[90vh] ">
      {!selectedCategory ? (
        // Render Category Hub View
        <CategoryHubView navigate={navigate} />
      ) : (
        // Render Product Listing View
        <ProductListingView
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredProducts={filteredProducts}
          handleCategoryChange={handleCategoryChange}
          CATEGORIES={CATEGORIES}
          navigate={navigate}
          setIsFilterOpen={setIsFilterOpen}
          dispatchCart={dispatchCart}
        />
      )}
    </div>
  );
};

export default Products;
