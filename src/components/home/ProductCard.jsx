import React from "react";

const formatPrice = (price) => {
  if (price === null || price === undefined || price === "") return "";
  return typeof price === "number" ? `₹${price.toLocaleString("en-IN")}` : price;
};

/**
 * Renders one product from the /products API. Field names are read
 * defensively (name/title, image/thumbnail/imageUrl/images[0]) since
 * the exact DB schema can vary — adjust the lookups below to match
 * your actual product model if needed.
 */
const ProductCard = ({ product, onClick }) => {
  const image =
    product.image ||
    product.thumbnail ||
    product.imageUrl ||
    (Array.isArray(product.images) && product.images[0]);
  const name = product.name || product.title || "Untitled product";

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? onClick?.() : null)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-[rgba(44,78,52,0.12)] bg-white outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#C8973A]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EDEAE1]">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl">
            🖼️
          </div>
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-[#2C4E34] px-2 py-1 font-heading text-[10px] font-medium uppercase tracking-[0.08em] text-[#F5F4F0]">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="truncate font-heading text-base font-bold text-[#2C4E34]">
          {name}
        </h3>
        {product.description && (
          <p className="mt-1 line-clamp-2 font-body text-sm text-[rgba(44,78,52,0.58)]">
            {product.description}
          </p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="font-heading text-sm font-semibold text-[#2C4E34]">
            {formatPrice(product.price)}
          </span>
          <button
            aria-label="Add to cart"
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(44,78,52,0.16)] text-[#2C4E34] transition-colors hover:bg-[#2C4E34] hover:text-[#F5F4F0]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;