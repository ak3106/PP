import React from "react";
import * as LucideIcons from "lucide-react";
import { useNavigate } from "react-router";

/**
 * Displays a dedicated card for SERVICES.
 * @param {object} props.service - The service object (name, icon, description, image)
 */
const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  // Pick the right icon based on the string
  const IconComponent = LucideIcons[service.icon] || LucideIcons.Layers;

  const handleNavigation = () => {
    navigate(`/services?category=${service.name}`);
  };

  return (
    <div
      onClick={handleNavigation}
      className="border border-primary rounded-2xl shadow-lg p-4 
                 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 
                 cursor-pointer flex flex-col items-center text-center group backdrop-blur-[2px]"
    >
      {/* Icon */}
      <div className="p-4 rounded-full mb-4 
                      transition-transform duration-300 group-hover:scale-110">
        
      </div>

      {/* Optional image */}
      {service.image && (
        <img
          className="w-full h-64 object-cover rounded-xl mb-3"
          src={service.image}
          alt={service.name}
        />
      )}

      {/* Service name */}
      <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 group-hover:text-primary">
        {service.name}
      </h3>

      {/* Optional description */}
      {service.description && (
        <p className="text-sm text-gray-600 mt-2 hidden md:block">
          {service.description}
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
