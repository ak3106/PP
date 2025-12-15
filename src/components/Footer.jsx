import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Users,
  Printer,
  ShoppingCart,
  HomeIcon,
  Icon,
  Image,
} from "lucide-react";
import logo from "../assets/logo pragya print.png";

/**
 * The application footer component.
 * Provides key links, contact info, and copyright details.
 * * @param {object} props - Component props
 * @param {function} props.navigate - Function to change the current route/page.
 * @returns {JSX.Element}
 */
const Footer = ({ navigate }) => {
  const navLinks = [
    { name: "Products", path: "/products", icon: ShoppingCart },
    { name: "Services", path: "/services", icon: Printer },
    { name: "Portfolio", path: "/portfolio", icon: Image },
    { name: "About", path: "/about", icon: Users },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-12 border-t border-indigo-700/50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
        <div className="flex gap-10 flex-col lg:flex-row lg:gap-24">
          {/* Column 1: Branding & Mission */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Pragya Print Logo" className="h-10" />
              <h3 className="text-xl font-extrabold text-indigo-400 mb-3 tracking-wider">
                PRAGYAPRINT
              </h3>
            </div>

            <p className=" mt-2 text-sm text-gray-400 leading-relaxed" >
              30 years of local trust meeting modern e-commerce. Your partner
              for quality printing, from polaroids to professional stationery.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-300 ">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-indigo-300 transition-colors duration-150 cursor-pointer flex items-center"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4 text-indigo-300">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-indigo-400" />
                <a

                  href={`mailto:${"pragyaprintingpress@yahoo.com"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-indigo-700 font-semibold "
                >
                  {"pragyaprintingpress@yahoo.com"}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-indigo-400" />
                <a
                  href={`tel:${"91+9425083910"}`}
                  className="text-sm hover:text-indigo-700 font-semibold"
                >
                  {"91+9425083910"}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-indigo-400 flex-shrink-0" />
                <span>
                  A.B. Road, Traffic Point, Bus stand, Shajapur, Agra - Mumbai
                  Hwy, Laxmi Nagar, Shajapur, Madhya Pradesh 465001
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Newsletter Placeholder */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4 text-indigo-300">
              Connect
            </h4>
            
            <div className="flex space-x-4 text-gray-400">
              <a
                href="https://www.facebook.com/pragyaaprinting.press"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition transform hover:scale-110"
                title="Facebook"
              >
                FB
              </a>

              <a
                href="https://www.instagram.com/pragyaprint?igsh=MXM0YWo0c2lkdDE3aQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition transform hover:scale-110"
                title="Instagram"
              >
                Insta
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition transform hover:scale-110"
                title="Twitter/X"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Pragya Printing Press. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
