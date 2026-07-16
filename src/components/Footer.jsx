import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  FileText,
  Truck,
  RotateCcw,
  Info,
  HelpCircle,
} from "lucide-react";
import logo from "../assets/pragyanewlogo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Define the legal/essential links
  const legalLinks = [
    { name: "About Us", path: "/about", icon: Info },
    { name: "Contact Us", path: "/contact", icon: HelpCircle },
    { name: "Privacy Policy", path: "/privacy-policy", icon: ShieldCheck },
    { name: "Terms & Conditions", path: "/terms", icon: FileText },
    { name: "Shipping Policy", path: "/shipping", icon: Truck },
    { name: "Refund & Cancellation", path: "/refund", icon: RotateCcw },
  ];

  return (
    <footer className="bg-[#0F0E0C] text-white mt-12 border-t border-zinc-700/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
        <div className="flex gap-10 flex-col lg:flex-row lg:gap-24 lg:py-8">
          {/* Column 1: Branding & Mission */}
          <div className="flex-1">
            <div className="flex items-center">
              <img src={logo} alt="Pragya Print Logo" className="h-12" />
              {/* <span className="text-xl ml-2  font-medium hidden sm:inline">
                Pragya
                <span className="text-xl font-bold hidden sm:inline">
                  print
                </span>
              </span> */}
            </div>
            <p className="mt-2 text-sm text-gray-100 leading-relaxed max-w-sm">
              30 years of local trust meeting modern e-commerce. Your partner
              for quality printing, from polaroids to professional stationery.
            </p>
          </div>

          {/* Column 2: Legal & Essential Links (Replaced Quick Links) */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4 text-highlight">
              Legal & Policies
            </h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map(({ name, path, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center text-sm font-medium hover:text-gray-200 ${
                      isActive ? "text-gray-300" : "text-gray-100"
                    }`
                  }
                >
                  <Icon className="w-5 h-5 mr-1" />
                  {name}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex-1 flex flex-col">
            <h4 className="text-lg font-semibold mb-4 text-highlight">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-100">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-highlight" />
                <a
                  href="mailto:pragyaprintingpress@yahoo.com"
                  className="text-sm hover:text-highlight font-semibold"
                >
                  pragyaprintingpress@yahoo.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-highlight" />
                <a
                  href="tel:+918269754932"
                  className="text-sm hover:text-highlight font-semibold"
                >
                  +91 82697 54932
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-highlight flex-shrink-0" />
                <span className="leading-tight">
                  A.B. Road, Traffic Point, Bus stand, Shajapur, Madhya Pradesh
                  465001
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="flex-none">
            <h4 className="text-lg font-semibold mb-4 text-[#C8973A]">
              Connect
            </h4>
            <div className="flex space-x-4 text-gray-100">
              <a
                href="https://www.facebook.com/pragyaaprinting.press"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition transform hover:scale-110"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/pragyaprint"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition transform hover:scale-110"
              >
                Insta
              </a>
            </div>
          </div>
        </div>
        <span className="absolute hidden font-serif text-[18rem] font-bold text-[#F7F3EC]/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap tracking-tighter lg:block">
          PRAGYA
        </span>
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#C8973A] text-center text-sm text-gray-500 flex justify-between">
          <div>&copy; {new Date().getFullYear()} PragyaPrint. All rights reserved.</div>
          <a href="https://pragyaprint.com" target="_blank" el="noopener noreferrer">
            pragyaprint.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
