import React from "react";
import { ICON_MAP } from "./Icons";

/**
 * One of the 4 "start designing" cards (poster / journal / banner /
 * notebook) that route into the custom creation tools.
 */
const CustomCategoryCard = ({ item, onClick }) => {
  const Icon = ICON_MAP[item.icon];

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? onClick?.() : null)}
      className="group flex cursor-pointer flex-col justify-between rounded-xl border border-[rgba(44,78,52,0.12)] bg-white p-6 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#2C4E34] focus-visible:ring-2 focus-visible:ring-[#C8973A] sm:p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EDEAE1] text-[#2C4E34] transition-colors duration-300 group-hover:bg-[#2C4E34] group-hover:text-[#F5F4F0]">
        {Icon && <Icon />}
      </div>
      <div className="mt-8">
        <h3 className="font-heading text-lg font-bold text-[#2C4E34]">
          {item.name}
        </h3>
        <p className="mt-1 font-body text-sm text-[rgba(44,78,52,0.58)]">
          {item.desc}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-medium uppercase tracking-[0.08em] text-[#C4421A]">
        Start designing
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </div>
  );
};

export default CustomCategoryCard;
