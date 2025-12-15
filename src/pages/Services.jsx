// import React from "react";
// import { useNavigate } from "react-router-dom";
// import ServiceCard from "../components/ServiceCard";
// import { SERVICES } from "../data/dummyProducts";

// const Services = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
//       <header className="text-center mb-12">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
//           Our Services
//         </h1>
//         <p className="text-xl text-indigo-600 max-w-3xl mx-auto">
//           Explore our complete range of custom services.
//         </p>
//       </header>

//       {/* Grid of Service Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {SERVICES.map((service, index) => (
//           <ServiceCard key={index} service={service} />
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-16 p-8 bg-gray-100 rounded-2xl border border-gray-200">
//         <h3 className="text-2xl font-bold text-gray-800 mb-3">
//           Need Something Custom?
//         </h3>
//         <p className="text-gray-600 mb-4">
//           Contact us for personalized print solutions.
//         </p>
//         <button
//           onClick={() => navigate("/contact")}
//           className="px-8 py-3 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90"
//         >
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState, useMemo, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Printer,
  Phone,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Filter,
  Users,
  Layers,
  Briefcase,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input"; // Assuming Input exists
import ServiceCard from "../components/ServiceCard"; // Assuming this component exists
import { LOCAL_SERVICES, SERVICES } from "../data/dummyProducts"; // Use the consolidated service list

// --- Helper Data to map services to icons/categories for the Hub View ---
// We create simple categories from the LOCAL_SERVICES data for the hub.

// --- 1. Service Listing View (Level 2: Shows detailed services in a category) ---
const ServiceListingView = ({
  selectedCategory,
  servicesList,
  handleCategoryChange,
  navigate,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  // Determine the icon for the main header (using a generic one since LOCAL_SERVICES don't have dedicated category icons)
  const HeaderIcon =
    LucideIcons[
      SERVICES.find((s) => s.name === selectedCategory)?.icon || "Briefcase"
    ];

  // Filter the general service list down to relevant items for the selected category
  const filteredServices = useMemo(() => {
    if (!selectedCategory) return servicesList;
  
    const lowerCategory = selectedCategory.toLowerCase();
    const firstWord = lowerCategory.split(" ")[0];
  
    return servicesList.filter((service) => {
      const title = service.title?.toLowerCase() || "";
      const desc = service.description?.toLowerCase() || "";
  
      return (
        title.includes(firstWord) ||
        desc.includes(firstWord) ||
        (lowerCategory.includes("invitation") &&
          title.includes("shaadi"))
      );
    });
  }, [selectedCategory, servicesList]);

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
        {selectedCategory} Solutions
      </h1>
      <p className="text-xl text-indigo-600 mb-8">
        All services are custom and require a consultation for pricing.
      </p>

      {/* Sticky Filter Bar (Mobile Toggle) */}
      <div className="sticky top-20 z-40 bg-white py-4 mb-8 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between transition-all duration-300">
        <div className="px-4 font-semibold text-gray-700">
          {filteredServices.length} relevant custom services found.
        </div>
        <Button
          variant="outline"
          className="md:hidden px-4 py-2 mr-4 flex items-center text-sm"
          onClick={() => setIsFilterOpen(true)}
        >
          <Filter className="w-5 h-5 mr-2" /> Categories
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex">
        {/* Desktop Filter Sidebar (Category Navigation) */}
        <aside className="hidden md:block w-64 mr-8 flex-shrink-0 sticky top-40 h-fit p-6 bg-gray-50 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
            <Filter className="w-5 h-5 mr-2" /> Categories
          </h3>
          <div className="space-y-2">
            {/* Link back to the main Hub */}
            <div
              onClick={() => handleCategoryChange(null)}
              className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition duration-150 text-gray-700 hover:bg-gray-200`}
            >
              <span>&larr; Back to Hub</span>
            </div>
            {/* Category list for quick switching */}
            {SERVICES.map((cat) => (
              <div
                key={cat.name}
                onClick={() => handleCategoryChange(cat.name)}
                className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition duration-150 
                                    ${selectedCategory === cat.name ? "bg-indigo-600 text-white font-semibold" : "text-gray-700 hover:bg-gray-200"}`}
              >
                <span>{cat.name}</span>
                <LucideIcons.ChevronRight
                  className={`w-4 h-4 transition ${selectedCategory === cat.name ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            ))}
          </div>
        </aside>

        {/* Services Grid (Level 2 Cards) */}
        <div className="flex-grow">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                // ServiceCard is used here to show detailed sub-services
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-4 border-dashed border-gray-300">
              <h3 className="text-2xl text-gray-600 font-semibold">
                No Services Found
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {/* (Simplified for brevity, assuming standard drawer structure from Products page) */}
      {/* ... Mobile Drawer Code goes here ... */}
    </>
  );
};

// --- 2. Category Hub View (Level 1: Shows broad categories) ---
const CategoryHubView = ({ navigate, handleCategoryChange }) => {
  return (
    <div className="py-10">
      {/* Header */}
      <h1 className="text-4xl leading-10 font-extrabold text-gray-900 mb-3 lg:text-5xl">
        Custom Printing Solutions
      </h1>

      <p className="text-xl text-indigo-600 mb-12 max-w-3xl">
        Select a service category below to explore all our custom-made solutions.
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16 p-8 bg-gray-100 rounded-2xl border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Looking for Ready-Made?
        </h3>

        <button
          onClick={() => navigate("/products")}
          className="px-8 py-3 font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Shop E-Commerce Products
        </button>
      </div>
    </div>
  );
};

// --- Main Services Component ---
const Services = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // State initialization based on URL parameter (category=...)
  const selectedCategoryName = searchParams.get("category");

  // Handler to change the URL parameter and show the listing
  const handleCategoryChange = useCallback(
    (categoryName) => {
      if (categoryName === null) setSearchParams({});
      else setSearchParams({ category: categoryName });
      setIsFilterOpen(false);
    },
    [setSearchParams]
  );

  // Determine the service subset based on the URL parameter
  const selectedCategory = useMemo(() => {
    // This is simplified: we just use the name to represent the selected hub type.
    return SERVICES.find((cat) => cat.name === selectedCategoryName);
  }, [selectedCategoryName]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[90vh] ">
      {!selectedCategory ? (
        // Level 1: Category Hub
        <CategoryHubView
          navigate={navigate}
          handleCategoryChange={handleCategoryChange}
        />
      ) : (
        // Level 2: Service Listing View
        <ServiceListingView
          selectedCategory={selectedCategory.name}
          servicesList={LOCAL_SERVICES} // Pass the full local services list
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
