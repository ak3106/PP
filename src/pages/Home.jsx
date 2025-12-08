import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  Package,
  Layers,
  Printer,
  Star,
  Heart,
  CheckCircle,
} from "lucide-react";
import Button from "../components/UI/Button";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { PRODUCTS, CATEGORIES, LOCAL_SERVICES } from "../data/dummyProducts";

// Helper function to dynamically get the Lucide icon for services
const getServiceIcon = (iconName) => {
  const icons = { Truck, Package, Layers, Printer, Heart, Star };
  return icons[iconName] || Layers;
};

/**
 * The main landing page for Pragya Printing Press.
 * Highlights e-commerce products, local services, and portfolio quality.
 * @returns {JSX.Element}
 */
const Home = () => {
  const navigate = useNavigate();

  // Use the first 4 products for the featured section
  const featuredProducts = PRODUCTS.slice(0, 4);
  // Use the first 6 categories
  const featuredCategories = CATEGORIES.slice(0, 6);
  // Use the first 3 services for the highlight
  const highlightedServices = LOCAL_SERVICES.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section - Modern & Animated */}
      <section className="relative text-gray-800 pt-24 pb-32 overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 animate-fadeInUp">
              Pragya Print:{" "}
              <span className="text-yellow-400 block sm:inline">
                30 Years of Print Excellence.
              </span>
            </h1>
            <p className="text-xl text-primary mb-10 max-w-3xl mx-auto">
              Your trusted local press is now online. Customize and order
              posters, letterheads, and merchandise or find our essential local
              services.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => navigate("/products")}
                className="bg-yellow-400 text-indigo-900 hover:bg-yellow-500 transition-colors px-8 py-3 text-lg hover:shadow-2xl"
              >
                Shop E-Commerce
              </Button>
              <Button
                onClick={() => navigate("/services")}
                variant="outline"
                className="bg-red-500 border-white text-gray-800 hover:text-red-600 px-8 py-3 text-lg"
              >
                Local Services
              </Button>
            </div>
          </div>
        </div>
        {/* Abstract Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-96 h-96 bg-indigo-500 rounded-full absolute -top-10 -left-10 animate-spin-slow"></div>
          <div className="w-48 h-48 bg-indigo-400 rounded-full absolute bottom-0 right-0 animate-pulse-slow"></div>
        </div>
      </section>

      <section
  className="
    py-8 
    bg-gray-50 
    px-8 
    min-h-[110vh]        /* default: phones*/
    sm:min-h-[110vh]     /* small tablets  */
    md:min-h-[120vh]     /* medium screens */
    lg:min-h-[90vh]      /* large desktops */
  "
>
  <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative">
    <h2 className="text-3xl sm:text-5xl md:text-9xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">
      OUR PRODUCTS
    </h2>

    <div className="absolute left-0 top-[65%] w-full flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {featuredCategories.map((cat) => (
          <CategoryCard
            key={cat.name}
            category={cat}
            navigate={navigate}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 3. Featured Products Section (E-Commerce) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10 border-b pb-3">
            <h2 className="text-3xl font-bold text-gray-800">
              Must-Have Products
            </h2>
            <Button
              onClick={() => navigate("/products")}
              variant="outline"
              className="text-sm"
            >
              View All E-Store
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              // ProductCard now needs the navigate function passed through props
              <ProductCard
                key={product.id}
                product={product}
                navigate={navigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Local Services Highlight */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            Trusted Local Services
          </h2>
          <p className="text-xl text-indigo-600 mb-10">
            The reliable printing services our community has depended on for
            decades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedServices.map((service) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-3xl shadow-xl transform hover:scale-[1.03] transition duration-300 border border-indigo-100"
                >
                  <Icon className="w-10 h-10 mx-auto text-indigo-600 mb-4 animate-bounce-slow" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Button
              onClick={() => navigate("/services")}
              className="px-8 py-3 text-lg"
            >
              See All Local Services
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Portfolio/Quality Teaser */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Our Print Quality is Our Signature
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                After 30 years, we know that nothing beats tangible proof.
                Explore our past projects to see the sharpness, color, and
                finish we deliver.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "High-definition color fidelity",
                  "Durable, long-lasting materials",
                  "Precision cutting and finishing",
                  "Eco-friendly and sustainable options",
                ].map((point, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate("/portfolio")}
                variant="secondary"
                className="px-6 py-3"
              >
                View Portfolio Gallery
              </Button>
            </div>
            {/* Dummy Photo Collage / Quality Showcase */}
            <div className="lg:order-1 grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-3xl shadow-inner">
              <img
                src="https://placehold.co/300x200/4f46e5/ffffff?text=Poster+Work"
                alt="Portfolio Image 1"
                className="rounded-xl object-cover h-full shadow-lg transform hover:scale-[1.05] transition duration-300"
              />
              <img
                src="https://placehold.co/300x200/9333ea/ffffff?text=Card+Sample"
                alt="Portfolio Image 2"
                className="rounded-xl object-cover h-full shadow-lg transform hover:scale-[1.05] transition duration-300"
              />
              <img
                src="https://placehold.co/300x200/059669/ffffff?text=Mug+Print"
                alt="Portfolio Image 3"
                className="rounded-xl object-cover h-full shadow-lg transform hover:scale-[1.05] transition duration-300 col-span-2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
