import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo pragya print.png";

import {
  Home as HomeIcon,
  ShoppingCart,
  Users,
  Printer,
  Phone,
  Menu,
  X,
  User,
  Image,
} from "lucide-react";

const Navbar = ({ cartItemCount = 0, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Products", path: "/products", icon: ShoppingCart },
    { name: "Services", path: "/services", icon: Printer },
    { name: "Portfolio", path: "/portfolio", icon: Image },
    { name: "About", path: "/about", icon: Users },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const mobileToggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <NavLink to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <img src={logo} alt="Pragya Print Logo" className="h-12" />
              <span className="text-xl ml-1 text-gray-800 font-medium hidden sm:inline">
                Pragya
                <span className="text-xl font-bold text-gray-800 hidden sm:inline">
                  Print
                </span>
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center text-sm font-medium transition hover:text-indigo-600 ${
                    isActive ? "text-indigo-600 font-semibold" : "text-gray-800"
                  }`
                }
              >
                <Icon className="w-5 h-5 mr-1" />
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Actions: Cart + Login */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <NavLink
              to="/cart"
              className="relative p-2 rounded-full text-gray-800 hover:text-indigo-600 hover:bg-indigo-50 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </NavLink>

            {/* User */}
            {!user ? (
              <NavLink
                to="/login"
                className="hidden md:flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                <User className="w-4 h-4 mr-2" />
                Login / Signup
              </NavLink>
            ) : (
              <div className="relative group hidden md:block">
                <button className="bg-gray-100 px-4 py-2 rounded-lg flex items-center hover:bg-gray-200">
                  <User className="w-4 h-4 mr-2" /> {user.name}
                </button>

                <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl border opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                  <button
                    onClick={onLogout}
                    className="block px-4 py-2 w-full text-left text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition"
              onClick={mobileToggle}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t shadow-inner transition-all ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center px-6 py-4 text-base border-b cursor-pointer transition ${
                isActive
                  ? "text-indigo-600 font-semibold bg-indigo-50"
                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" /> {name}
          </NavLink>
        ))}

        {!user && (
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-base font-semibold text-indigo-600"
          >
            <User className="inline-block w-5 h-5 mr-2" />
            Login / Register
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
