import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Layers,
  Image,
  Briefcase,
  Star,
  Heart,
  ChevronRight,
  ArrowLeft,
  Filter,
  X,
  Phone,
  MessageSquareText,
  FileText,
  Info,
  Search,
  CheckCircle
} from "lucide-react";

// Import UI components
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import ServiceCard from "../components/ServiceCard";
// Assuming the SERVICES array you provided is in this file
import { SERVICES } from "../data/dummyProducts";

/**
 * Renders the detailed sub-categories within a selected major service.
 */
const SubcategoryListingView = ({
  category,
  handleCategoryChange,
  navigate,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubCats = useMemo(() => {
    if (!searchTerm.trim()) return category.subCategories;
    return category.subCategories.filter((sub) =>
      sub.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [category.subCategories, searchTerm]);

  return (
    <div className="animate-fadeInDown">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            onClick={() => handleCategoryChange(null)}
            className="p-3 rounded-full hover:bg-indigo-100 transition"
          >
            <ArrowLeft className="w-5 h-5 text-indigo-600" />
          </Button>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {category.name}
            </h1>
            <p className="text-gray-600">Choose a custom solution from the {category.name} range.</p>
          </div>
        </div>
        
        <Button
          onClick={() => navigate("/contact")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <Phone className="w-4 h-4 mr-2" /> Bulk Inquiry
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md py-4 mb-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between px-4 transition-all">
        <div className="flex-grow flex items-center bg-gray-50 rounded-xl px-4 border border-gray-200 focus-within:border-indigo-500 transition">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <Input
            placeholder={`Search for ${category.name.toLowerCase()} items...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!border-none !bg-transparent !shadow-none focus:ring-0 w-full !p-3"
          />
        </div>
        <Button
          variant="outline"
          className="md:hidden ml-4 p-3"
          onClick={() => setIsFilterOpen(true)}
        >
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 mr-10 flex-shrink-0 sticky top-48 h-fit p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            Categories
          </h3>
          <div className="space-y-1">
            {SERVICES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition duration-200 
                  ${category.id === cat.id 
                    ? "bg-indigo-50 text-indigo-700 border border-indigo-100 font-bold" 
                    : "text-gray-600 hover:bg-gray-100"}`}
              >
                <span className="text-sm">{cat.name}</span>
                {category.id === cat.id && <ChevronRight className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </aside>

        {/* Content Grid */}
        <div className="flex-grow">
          {filteredSubCats.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSubCats.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                      <FileText className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Premium custom printing. Choose from multiple finishes, materials, and sizes tailored to your needs.
                    </p>
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="secondary"
                      onClick={() => navigate(`/service-detail/${sub.id}`)}
                      className="flex-grow py-2 text-xs"
                    >
                      <Info className="w-3 h-3 mr-2" /> Details
                    </Button>
                    <Button
                      onClick={() => navigate("/contact")}
                      className="flex-grow py-2 text-xs bg-indigo-600"
                    >
                      <MessageSquareText className="w-3 h-3 mr-2" /> Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <X className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">No services match your search.</p>
              <Button variant="secondary" onClick={() => setSearchTerm("")} className="mt-4 text-xs">Clear Search</Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 md:hidden ${isFilterOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
        <div className="absolute right-0 w-80 max-w-[85%] h-full bg-white shadow-2xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Services</h3>
            <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-2 overflow-y-auto flex-grow">
            {SERVICES.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => {
                  handleCategoryChange(cat.id);
                  setIsFilterOpen(false);
                }}
                variant={category.id === cat.id ? "primary" : "secondary"}
                className="w-full justify-start py-4"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Category Hub View
 */
const CategoryHubView = ({ onSelect }) => {
  return (
    <div className="py-10 animate-fadeInDown">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Expert Custom Printing
        </h1>
        <p className="text-xl text-indigo-600 max-w-2xl mx-auto">
          Explore our wide range of professional printing services, from stationery to high-end events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 transform transition hover:-translate-y-1">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">High Definition</h3>
          <p className="text-gray-500">Industry-leading print quality with sharp colors and details.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 transform transition hover:-translate-y-1">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Layers className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Fully Bespoke</h3>
          <p className="text-gray-500">Every project is custom-designed and printed to your specifications.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 transform transition hover:-translate-y-1">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Legacy of Trust</h3>
          <p className="text-gray-500">Shajapur's most trusted print partner since 1995.</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Determine selected category based on ID in URL (e.g., ?category=business-stationery)
  const categoryId = searchParams.get("category");

  const selectedCategory = useMemo(() => {
    return SERVICES.find((s) => s.id === categoryId);
  }, [categoryId]);

  // Unified selection handler
  const handleCategoryChange = useCallback((id) => {
    if (id) {
      setSearchParams({ category: id });
    } else {
      setSearchParams({});
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setSearchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[90vh]">
      {!selectedCategory ? (
        <CategoryHubView onSelect={handleCategoryChange} />
      ) : (
        <SubcategoryListingView
          category={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          navigate={navigate}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      )}
    </div>
  );
};

export default Services;