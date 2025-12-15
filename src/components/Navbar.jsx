import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo pragya print.png";
import { useCart } from "../context/CartContext";

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
  Search,
} from "lucide-react";

const Navbar = ({ user, onLogout }) => {
  const { cartItemCount } = useCart(); // ✅ FROM CONTEXT (CRITICAL FIX)

  const [isOpen, setIsOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const navItems = [
    { name: "Products", path: "/products", icon: ShoppingCart },
    { name: "Services", path: "/services", icon: Printer },
    { name: "Portfolio", path: "/portfolio", icon: Image },
    { name: "About Us", path: "/about", icon: Users },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  // ✅ COUNTER ANIMATION — NOW IT WILL WORK 100%
  useEffect(() => {
    if (cartItemCount > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartItemCount]);

  const mobileToggle = () => setIsOpen((prev) => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    navigate(`/products?search=${searchText}`);
    setShowSearch(false);
    setSearchText("");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Brand */}
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Pragya Print Logo" className="h-12" />
              <span className="text-xl ml-2  font-medium hidden sm:inline">
                Pragya
                <span className="text-xl font-bold hidden sm:inline">
                  print
                </span>
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6">
              {navItems.map(({ name, path, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center text-sm font-medium ${
                      isActive ? "text-primary" : "text-gray-800"
                    }`
                  }
                >
                  <Icon className="w-5 h-5 mr-1" />
                  {name}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full hover:bg-indigo-50"
              >
                <Search className="w-6 h-6" />
              </button>

              {/* ✅ CART WITH ANIMATION — FIXED */}
              <NavLink to="/cart" className="relative p-2 rounded-full">
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span
                    className={`
                      absolute -top-1 -right-1
                      bg-red-600 text-white text-xs font-semibold
                      px-2 py-0.5 rounded-full
                      transition-transform duration-300
                      ${animateCart ? "scale-150" : "scale-100"}
                    `}
                  >
                    {cartItemCount}
                  </span>
                )}
              </NavLink>

              {/* User */}
              {!user ? (
                <NavLink
                  to="/login"
                  className="hidden md:flex items-center bg-primary text-white px-4 py-2 rounded-lg"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </NavLink>
              ) : (
                <div className="relative group hidden md:block">
                  <button className="bg-gray-100 px-4 py-2 rounded-lg flex items-center">
                    <User className="w-4 h-4 mr-2" /> {user.name}
                  </button>

                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                    <button
                      onClick={onLogout}
                      className="block px-4 py-2 w-full text-left hover:bg-indigo-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}

              {/* Mobile Menu */}
              <button className="lg:hidden p-2" onClick={mobileToggle}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ MOBILE NAV MENU (THIS WAS MISSING) */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-white shadow-xl z-40 transition-all duration-300 ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className="flex items-center px-6 py-4 border-b text-gray-800 hover:bg-indigo-50"
          >
            <Icon className="w-5 h-5 mr-3" /> {name}
          </NavLink>
        ))}

        {!user && (
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 font-semibold text-accent"
          >
            <User className="inline w-5 h-5 mr-2" />
            Login / Register
          </NavLink>
        )}
      </div>

      {/* ✅ SEARCH MODAL */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl">
            <form onSubmit={handleSearch}>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 outline-none"
                />
                <button className="px-3 py-4 bg-primary text-white">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
