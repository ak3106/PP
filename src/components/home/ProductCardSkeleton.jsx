import React from "react";

const ProductCardSkeleton = () => (
  <div className="animate-pulse overflow-hidden rounded-xl border border-[rgba(44,78,52,0.1)] bg-white">
    <div className="aspect-[4/3] bg-[#EDEAE1]" />
    <div className="space-y-2 p-4 sm:p-5">
      <div className="h-4 w-2/3 rounded bg-[#EDEAE1]" />
      <div className="h-3 w-full rounded bg-[#EDEAE1]" />
      <div className="h-3 w-1/3 rounded bg-[#EDEAE1]" />
    </div>
  </div>
);

export default ProductCardSkeleton;