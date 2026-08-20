import React from "react";
import { ICON_MAP } from "./icons";

const QualityPoint = ({ point }) => {
  const Icon = ICON_MAP[point.icon];

  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[rgba(227,190,114,0.4)] text-[#E3BE72]">
        {Icon && <Icon />}
      </div>
      <div>
        <div className="mb-0.5 font-heading text-sm font-medium text-[#F5F4F0]">
          {point.title}
        </div>
        <div className="font-body text-xs leading-relaxed text-[#F5F4F0]/55 sm:text-sm">
          {point.desc}
        </div>
      </div>
    </div>
  );
};

export default QualityPoint;