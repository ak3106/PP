import React from "react";

/**
 * Eyebrow label used above section headings, e.g. "— Browse by category".
 * `light` swaps to a lighter gold for use on the dark forest-green strip.
 */
const SectionLabel = ({ children, light = false }) => (
  <p
    className={`mb-3 sm:mb-4 flex items-center gap-3 font-heading text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] ${
      light ? "text-[#E3BE72]" : "text-[#C8973A]"
    }`}
  >
    <span className={`inline-block h-px w-6 sm:w-8 ${light ? "bg-[#E3BE72]" : "bg-[#C8973A]"}`} />
    {children}
  </p>
);

export default SectionLabel;