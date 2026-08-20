import React from "react";

/**
 * A single category card in the "Browse by category" bento grid.
 * Expects `cat` shaped like { name, sub, image, slug, span? }
 * (span rows on large screens only — see the grid classes in Home.jsx).
 */
const CategoryTile = ({ cat, onClick, className = "" }) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === "Enter" ? onClick?.() : null)}
    className={`group relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-xl border border-[rgba(44,78,52,0.12)] bg-cover bg-center p-5 outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#C8973A] sm:p-6 ${className}`}
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.82) 100%), url(${cat.image})`,
    }}
  >
    <span className="absolute right-4 top-4 flex h-8 w-8 -translate-x-1.5 items-center justify-center rounded-full bg-[#C8973A] text-sm text-[#2C4E34] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      →
    </span>
    <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
      {cat.name}
    </h3>
    <p className="mt-1 font-body text-xs uppercase tracking-[0.08em] text-white/60">
      {cat.sub}
    </p>
  </div>
);

export default CategoryTile;