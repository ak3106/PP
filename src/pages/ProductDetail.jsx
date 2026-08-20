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
  SparklesIcon,
} from "lucide-react";
import Button from "../components/UI/Button";
import { useCart } from "../context/CartContext";
import useProducts from "../hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  const { products, loading } = useProducts();

  // --------------------------------------------------
  // PRODUCT FETCH
  // --------------------------------------------------
  const product = useMemo(
    () => products.find((p) => p.id === id),
    [products, id]
  );

  // --------------------------------------------------
  // DEFAULT OPTIONS
  // --------------------------------------------------
  const defaultSize = product?.options?.size?.[0] ?? null;
  const defaultType = product?.options?.paperType?.[0] ?? null;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // --------------------------------------------------
  // VARIANT RESOLUTION (CORE LOGIC)
  // --------------------------------------------------
  // Sync once product is loaded
  useEffect(() => {
    if (product) {
      setSelectedSize(product.options?.size?.[0] ?? null);
      setSelectedType(product.options?.paperType?.[0] ?? null);
      setMainImage(product.media?.thumbnail ?? "");
    }
  }, [product]);

  // Variant resolution
  const selectedVariant = useMemo(() => {
    if (!product) return null;
    return product.variants.find((v) => v.size === selectedSize);
  }, [product, selectedSize]);

  const finalPrice = selectedVariant?.price ?? 0;

  const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

  // --------------------------------------------------
  // ADD TO CART (VARIANT AWARE)
  // --------------------------------------------------
  const handleAddToCart = () => {
    if (quantity < 1 || isAdding || !selectedVariant) return;

    setIsAdding(true);

    dispatchCart({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        name: product.name,
        variantId: selectedVariant.variantId,
        size: selectedSize,
        finish: selectedType,
        // variantLabel: `${selectedVariant.size} / ${selectedType}`,
        price: selectedVariant.price,
        quantity,
        thumbnail: product.media?.thumbnail,
      },
    });

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 600);
  };

  // --------------------------------------------------
  // GUARDS (AFTER HOOKS)
  // --------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">Loading product…</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Product Not Found
        </h2>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  if (!selectedVariant) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-600">
        Variant not available
      </div>
    );
  }

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
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-3">
            {[product.media?.thumbnail, ...(product.media?.images || [])]
              .filter(Boolean)
              .map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                    img === mainImage ? "border-primary" : "border-gray-200"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* DETAILS */}
        <div>
          <p className="text-sm font-semibold text-primary uppercase">
            {product.category}
          </p>

          <h1 className="text-4xl font-extrabold mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              ({product.reviewsCount} reviews)
            </span>
          </div>

          {/* PRICE */}
          <div className="text-4xl font-extrabold text-primary mb-6">
            {formatPrice(finalPrice)}
          </div>

          <p className="text-gray-700 mb-8">{product.description}</p>

          {/* SIZE OPTIONS */}
          {product.options?.size && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <Tag className="w-4 h-4 mr-2" /> Size:
              </h3>
              <div className="flex gap-3 flex-wrap">
                {product.options.size.map((size) => (
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
          )}

          {product.options?.size && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <SparklesIcon className="w-4 h-4 mr-2" /> Finish:
              </h3>
              <div className="flex gap-3 flex-wrap">
                {product.options.paperType.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedType === type
                        ? "bg-primary text-white"
                        : "bg-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold">Quantity</span>
            <div className="flex items-center border rounded-xl">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="p-3">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full py-4 bg-primary text-cream border border-gray-500 font-bold flex items-center justify-center  hover:bg-green-950 transition"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {isAdding ? "Adding…" : "Add to Cart"}
          </button>

          {/* META */}
          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Production: {product.productionTime}
            </div>
            <div className="flex items-center">
              <Truck className="w-4 h-4 mr-2" />
              Shipping Class: {product.shipping.shippingClass}
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Stock: {product.inventory.stockStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
