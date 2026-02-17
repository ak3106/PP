import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  CheckCircle,
  Clock,
  Truck,
  ArrowLeft,
  Tag,
  Minus,
  Plus,
} from "lucide-react";
import Button from "../components/UI/Button";
import { useCart } from "../context/CartContext";
import useProducts from "../hooks/useProducts";

const SpiralDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  const { products, loading } = useProducts();

  const spiral = useMemo(
    () => products.find((p) => p.id === id),
    [products, id]
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPages, setSelectedPages] = useState(null);
  const [selectedRuling, setSelectedRuling] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // --------------------------------------------------
  // INITIALIZE DEFAULTS
  // --------------------------------------------------
  useEffect(() => {
    if (!spiral) return;

    const defaultSize = spiral.options?.size?.[0] ?? null;
    const defaultPages =
      spiral.options?.pageMap?.[defaultSize]?.[0] ?? null;
    const defaultRuling =
      spiral.options?.rulingType?.[0] ?? null;

    setSelectedSize(defaultSize);
    setSelectedPages(defaultPages);
    setSelectedRuling(defaultRuling);
    setMainImage(spiral.media?.thumbnail ?? "");
  }, [spiral]);

  // --------------------------------------------------
  // RESET PAGES WHEN SIZE CHANGES
  // --------------------------------------------------
  useEffect(() => {
    if (!spiral || !selectedSize) return;

    const firstPage =
      spiral.options?.pageMap?.[selectedSize]?.[0] ?? null;

    setSelectedPages(firstPage);
  }, [selectedSize, spiral]);

  // --------------------------------------------------
  // VARIANT RESOLUTION
  // --------------------------------------------------
  const selectedVariant = useMemo(() => {
    if (!spiral) return null;

    return spiral.variants.find(
      (v) =>
        v.size === selectedSize &&
        v.pages === selectedPages &&
        (v.rulingType ? v.rulingType === selectedRuling : true)
    );
  }, [spiral, selectedSize, selectedPages, selectedRuling]);

  const finalPrice = selectedVariant?.price ?? 0;

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  // --------------------------------------------------
  // MEDIA ORDER (THUMBNAIL → BACK → IMAGES)
  // --------------------------------------------------
  const mediaGallery = useMemo(() => {
    if (!spiral?.media) return [];

    return [
      spiral.media.thumbnail,
      spiral.media.back,
      ...(spiral.media.images || []),
    ].filter(Boolean);
  }, [spiral]);

  // --------------------------------------------------
  // ADD TO CART
  // --------------------------------------------------
  const handleAddToCart = () => {
    if (!selectedVariant || quantity < 1 || isAdding) return;

    setIsAdding(true);

    dispatchCart({
      type: "ADD_ITEM",
      payload: {
        productId: spiral.id,
        name: spiral.name,
        variantId: selectedVariant.variantId,
        size: selectedSize,
        pages: selectedPages,
        rulingType: selectedRuling,
        price: selectedVariant.price,
        quantity,
        thumbnail: spiral.media?.thumbnail,
      },
    });

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 600);
  };

  // --------------------------------------------------
  // GUARDS
  // --------------------------------------------------
  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Loading product…
        </p>
      </div>
    );

  if (!spiral)
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Product Not Found
        </h2>
        <Button onClick={() => navigate("/products")}>
          Back to Products
        </Button>
      </div>
    );

  if (!selectedVariant)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-600">
        Variant not available
      </div>
    );

  // --------------------------------------------------
  // RENDER
  // --------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-[80vh]">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl">
        {/* IMAGE SECTION */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
            <img
              src={mainImage}
              alt={spiral.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-3">
            {mediaGallery.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                  img === mainImage
                    ? "border-primary"
                    : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div>
          <p className="text-sm font-semibold text-primary uppercase">
            {spiral.category}
          </p>

          <h1 className="text-4xl font-extrabold mb-3">
            {spiral.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(spiral.rating)
                    ? "fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              ({spiral.reviewsCount} reviews)
            </span>
          </div>

          {/* PRICE */}
          <div className="text-4xl font-extrabold text-primary mb-6">
            {formatPrice(finalPrice)}
          </div>

          <p className="text-gray-700 mb-8">
            {spiral.description}
          </p>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 flex items-center">
              <Tag className="w-4 h-4 mr-2" /> Size:
            </h3>
            <div className="flex gap-3 flex-wrap">
              {spiral.options?.size?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === size
                      ? "bg-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* PAGES */}
          {selectedSize && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">
                Pages:
              </h3>
              <div className="flex gap-3 flex-wrap">
                {spiral.options?.pageMap?.[
                  selectedSize
                ]?.map((pages) => (
                  <button
                    key={pages}
                    onClick={() => setSelectedPages(pages)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedPages === pages
                        ? "bg-primary text-white"
                        : "bg-white"
                    }`}
                  >
                    {pages} Pages
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RULING */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">
              Ruling:
            </h3>
            <div className="flex gap-3 flex-wrap">
              {spiral.options?.rulingType?.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedRuling(type)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedRuling === type
                      ? "bg-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold">
              Quantity
            </span>
            <div className="flex items-center border rounded-xl">
              <button
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                className="p-3"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center">
                {quantity}
              </span>
              <button
                onClick={() =>
                  setQuantity((q) => q + 1)
                }
                className="p-3"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full py-4 bg-highlight border border-gray-500 font-bold flex items-center justify-center hover:bg-gray-900 hover:text-highlight transition"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {isAdding ? "Adding…" : "Add to Cart"}
          </button>

          {/* META */}
          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Production: {spiral.productionTime}
            </div>
            <div className="flex items-center">
              <Truck className="w-4 h-4 mr-2" />
              Shipping Class:{" "}
              {spiral.shipping.shippingClass}
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Stock: {spiral.inventory.stockStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiralDetail;
