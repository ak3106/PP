import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/pragyanewblacklogo.png";
import { useCart } from "../context/CartContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";

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

  useEffect(() => {
    const fontId = "pragya-fonts";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap";
      document.head.appendChild(link);
    }
    const styleId = "pragya-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
          @keyframes pragya-fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pragya-marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .pragya-fade-up { opacity: 0; animation: pragya-fadeUp 0.6s ease forwards; }
          .pragya-fade-1  { animation-delay: 0.10s; }
          .pragya-fade-2  { animation-delay: 0.22s; }
          .pragya-fade-3  { animation-delay: 0.36s; }
          .pragya-fade-4  { animation-delay: 0.52s; }
          .pragya-fade-5  { animation-delay: 0.68s; }
          .pragya-marquee-track { animation: pragya-marquee 22s linear infinite; }
          .pragya-hero-card:hover .pragya-cat-bg {
            opacity: 0.2 !important;
            transform: scale(1.06) !important;
          }
          .pragya-cat-tile:hover .pragya-tile-arrow  { opacity: 1 !important; transform: translateX(0) !important; }
          .pragya-cat-tile:hover .pragya-tile-icon   { opacity: 0.18 !important; transform: translate(-50%,-68%) scale(1.08) !important; }
          .pragya-product-card:hover { transform: translateY(-5px) !important; }
          .pragya-product-card:hover .pragya-prod-icon { transform: scale(1.08) !important; }
        `;
      document.head.appendChild(style);
    }
  }, []);

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

  // const logout = async () => {
  //   await signOut(auth);
  // };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-8 flex h-[60px] items-center justify-between backdrop-blur-md border-b border-yellow-900 transition-colors duration-300 bg-[#F5F4F0]/90`}
      >
        {/* Logo / Brand */}
        <div
          onClick={() => navigate("/")}
          className="font-serif-display font-bold text-[1.2rem] tracking-[-0.02em] cursor-pointer"
        >
          <img src={logo} alt="Pragya Print Logo" className="h-6" />
        </div>

        <nav className="hidden lg:flex space-x-6">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-black border-none py-2 font-sans text-[0.78rem] font-medium tracking-[0.06em] uppercase cursor-pointer flex items-center ${
                  isActive ? "text-[#2C4E34]" : "text-zinc-900"
                }`
              }
            >
              <Icon className="w-0 h-0 mr-0" />
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full hover:bg-indigo-50"
          >
            <Search className="w-6 h-6" />
          </button>

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
              className="hidden md:inline-flex bg-zinc-900 text-white border-none py-2 px-[1rem] font-sans text-[0.78rem] font-medium tracking-[0.06em] uppercase cursor-pointer items-center"
            >
              <User className="w-4 h-4 mr-1" />
              Login/Signup
            </NavLink>
          ) : (
            <div className="relative group hidden md:block">
              <button
                onClick={() => navigate("/account")}
                className="bg-zinc-900 text-white px-4 py-2 flex items-center"
              >
                <User className="w-4 h-4 mr-2" />{" "}
                {user?.displayName || user.name || "Account"}
              </button>

              <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition"></div>
            </div>
          )}

          {/* Mobile Menu */}
          <button className="lg:hidden p-2" onClick={mobileToggle}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Account Button */}
      </nav>

      {/* ------------------------------------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
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
                  Login/Signup
                </NavLink>
              ) : (
                <div className="relative group hidden md:block">
                  <button
                    onClick={() => navigate("/account")}
                    className="bg-gray-100 px-4 py-2 rounded-lg flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" />{" "}
                    {user?.displayName || user.name || "Account"}
                  </button>

                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition"></div>
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

      {/* ✅ MOBILE NAV MENU */}
      <div
        className={`lg:hidden fixed top-14 left-0 w-full bg-[#ffffff] shadow-xl z-40 transition-all duration-300 ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-x-hidden"
        }`}
      >
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className="flex items-center px-6 py-4 border-b-[1px] border-yellow-900/30 text-zinc-900 hover:bg-yellow-50/50 uppercase font-serif-display"
          >
            <Icon className="w-0 h-0 mr-0" /> {name}
          </NavLink>
        ))}

        {!user ? (
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 font-bold text-serif-display uppercase"
          >
            {/* <User className="inline w-5 h-5 mr-2" /> */}
            Login / Signup
          </NavLink>
        ) : (
          <NavLink
            to="/account"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 font-semibold text-gray-800 hover:bg-indigo-50"
          >
            <User className="inline w-5 h-5 mr-2" />
            My Account
          </NavLink>
        )}
      </div>

      {/* ✅ SEARCH MODAL */}

      {showSearch && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          onClick={() => setShowSearch(false)} // Close when clicking outside
        >
          <div
            className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleSearch}>
              <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search products..."
                  autoFocus
                  className="w-full px-4 py-2 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white hover:bg-primary-dark transition"
                >
                  <Search className="w-5 h-5" />
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
