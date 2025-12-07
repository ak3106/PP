import { ArrowRight } from 'lucide-react';
import React from 'react';
// CORRECT: The Link component should be imported from 'react-router-dom'
import { Link } from 'react-router-dom'; 

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => (
    // Using Tailwind transition utilities for the animation on hover
    <div 
      className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-indigo-100 transition-all duration-500 
                transform hover:scale-[1.03] hover:shadow-2xl hover:border-red-600 cursor-pointer 
                flex flex-col items-start h-full"
      style={{ transitionDelay: `${delay * 0.1}s` }} // Optional staggered effect
    >
      <div className="flex items-start space-x-4 mb-4">
        {/* The Icon prop is correctly used here */}
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-red-600 bg-red-50 p-1.5 md:p-2 rounded-xl flex-shrink-0" />
        <h3 className="text-xl font-bold text-gray-900 leading-snug">{title}</h3>
      </div>
      <p className="text-gray-600 text-base mt-2 flex-grow">{description}</p>
      <Link to="/services" className="mt-4 flex items-center text-indigo-600 font-semibold hover:text-red-600 transition">
        Explore <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
);

export default ServiceCard;