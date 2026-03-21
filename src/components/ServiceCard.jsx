import React from "react";
import * as LucideIcons from "lucide-react";
import { useNavigate } from "react-router";

/**
 * Displays a dedicated card for SERVICES.
 * @param {object} props.service - The service object (name, icon, description, image)
 */
const ServiceCard = ({ service, onSelect }) => {
  const IconComponent = LucideIcons[service.icon] || LucideIcons.Layers;

  return (
    <div
      onClick={() => onSelect(service.id)}
      className="border border-gray-200 rounded-2xl shadow-lg p-2 
                 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                 cursor-pointer flex flex-col items-center text-center group backdrop-blur-[2px]"
    >
      <div className="hidden md:block md:p-4 md:rounded-full md:mb-4 transition-transform duration-300 group-hover:scale-110 ">
        {/* <IconComponent className="w-8 h-8 text-indigo-600" /> */}
      </div>

      {service.image && (
        <img
          className="w-full h-44 md:h-64 object-cover rounded-xl mb-3"
          src={service.image}
          alt={service.name}
        />
      )}

      <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 group-hover:text-indigo-600">
        {service.name}
      </h3>

      {service.description && (
        <p className="text-sm text-gray-600 mt-2 hidden md:block">
          {service.description}
        </p>
      )}
    </div>
  );
};


export default ServiceCard;
