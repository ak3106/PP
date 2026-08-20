import React from "react";

const base =
  "inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 font-heading text-xs sm:text-sm font-medium uppercase tracking-[0.08em] transition-all duration-300";

export const BtnPrimary = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`${base} bg-[#2C4E34] text-[#F5F4F0] hover:-translate-y-0.5 hover:bg-[#233f2a] ${className}`}
  >
    {children}
  </button>
);

export const BtnGhost = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`${base} border border-[rgba(44,78,52,0.16)] bg-transparent text-[#2C4E34] hover:border-[#2C4E34] ${className}`}
  >
    {children}
  </button>
);