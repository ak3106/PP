import React from "react";
import * as LucideIcons from "lucide-react";
import { useNavigate } from "react-router";

/**
 * Displays a card linking to a specific product category.
 * @param {object} props - Component props
 * @param {object} props.category - The category object (name, icon, description, image).
 * @param {function} props.navigate - The navigation function to filter the Products page.
 * @returns {JSX.Element}
 */
const CategoryCard = ({ category }) => {
  // 1. Initialize the navigate function from React Router
  // This hook provides the navigation function without relying on props.
  const navigate = useNavigate();

  // Dynamically retrieve the Lucide icon component based on the string name
  const IconComponent = LucideIcons[category.icon] || LucideIcons.Layers;

  // 2. Define the navigation handler
  // Navigates to the products page with the category name as a query parameter
  const handleNavigation = () => {
      navigate(`/products?category=${category.name}`);
  };
  return (
    <div

      onClick={handleNavigation}
      className="border border-gray-200 rounded-2xl shadow-lg p-2 
                 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                 cursor-pointer flex flex-col items-center text-center group"
    >
      <div className="p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
        {/* Optional icon */}
        {/* <IconComponent className="w-8 h-8 text-indigo-800" /> */}
      </div>

      {/* Dynamic image */}
      <img
        className="w-full h-full object-cover rounded-xl"
        src={category.image}
        alt={category.name}
      />

      {/* Optional description */}
      {/* <p className="text-sm text-gray-500 hidden sm:block">
        {category.description}
      </p> */}

      <h3
        className="text-lg sm:text-xl md:text-2xl mt-2 font-bold uppercase text-gray-900 mb-2 
                     group-hover:text-indigo-700 transition-colors"
      >
        {category.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
