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
  NotebookText,
  NotepadText,
  Printer,
} from "lucide-react";
import Button from "../components/UI/Button";
import { useCart } from "../context/CartContext";
import useProducts from "../hooks/useProducts";

const SpiralDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  const { products, loading } = useProducts();

  const journal = useMemo(
    () => products.find((p) => p.id === id),
    [products, id]
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPages, setSelectedPages] = useState(null);
  const [selectedRuling, setSelectedRuling] = useState(null);
  const [selectedCover, setSelectedCover] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // --------------------------------------------------
  // INITIALIZE DEFAULTS
  // --------------------------------------------------
  useEffect(() => {
    if (!journal) return;

    const defaultSize = journal.options?.size?.[0] ?? null;
    const defaultPages = journal.options?.pageMap?.[defaultSize]?.[0] ?? null;
    const defaultRuling = journal.options?.rulingType?.[0] ?? null;
    const defaultCover = journal.options?.coverType?.[0] ?? null;

    setSelectedSize(defaultSize);
    setSelectedPages(defaultPages);
    setSelectedRuling(defaultRuling);
    setSelectedCover(defaultCover);
    setMainImage(journal.media?.thumbnail ?? "");
  }, [journal]);

  // --------------------------------------------------
  // RESET PAGES WHEN SIZE CHANGES
  // --------------------------------------------------
  useEffect(() => {
    if (!journal || !selectedSize) return;
  
    // 1. Check if "Dated" is selected
    if (selectedRuling === "Dated") {
      setSelectedPages(365); // Force 365 pages
      return;
    }
  
    // 2. Otherwise, use your standard logic
    const availablePages = journal.options?.pageMap?.[selectedSize] ?? [];
    
    // If current selection isn't in the new size's options, reset to first available
    if (!availablePages.includes(selectedPages)) {
      setSelectedPages(availablePages[0] ?? null);
    }
  }, [selectedSize, selectedRuling, journal]);
  

  // --------------------------------------------------
  // VARIANT RESOLUTION
  // --------------------------------------------------
  const selectedVariant = useMemo(() => {
    if (!journal) return null;

    return journal.variants.find(
      (v) =>
        v.size === selectedSize &&
        v.pages === selectedPages &&
        (v.rulingType ? v.rulingType === selectedRuling : true) &&
        v.coverType == selectedCover
    );
  }, [journal, selectedSize, selectedPages, selectedRuling, selectedCover]);

  const finalPrice = selectedVariant?.price ?? 0;

  const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

  // --------------------------------------------------
  // MEDIA ORDER (THUMBNAIL → BACK → IMAGES)
  // --------------------------------------------------
  const mediaGallery = useMemo(() => {
    if (!journal?.media) return [];

    return [
      journal.media.thumbnail,
      journal.media.back,
      ...(journal.media.images || []),
    ].filter(Boolean);
  }, [journal]);

  const relatedProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          p.productType === "diary_journal" &&
          p.id !== journal?.id &&
          p.collections.franchise === journal?.collections.franchise
      )
      .slice(0, 4);
  }, [products, journal]);

  // --------------------------------------------------
  // ADD TO CART
  // --------------------------------------------------
  const handleAddToCart = () => {
    if (!selectedVariant || quantity < 1 || isAdding) return;

    setIsAdding(true);

    dispatchCart({
      type: "ADD_ITEM",
      payload: {
        productId: journal.id,
        name: journal.name,
        variantId: selectedVariant.variantId,
        // variantLabel: `${selectedVariant.size} / ${selectedVariant.pages} pages / ${selectedVariant.coverType} / ${selectedRuling}`,
        size: selectedSize,
        pages: selectedPages,
        rulingType: selectedRuling,
        coverType: selectedCover,
        price: selectedVariant.price,
        quantity,
        thumbnail: journal.media?.thumbnail,
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
        <p className="text-lg font-semibold text-gray-600">Loading product…</p>
      </div>
    );

  if (!journal)
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Product Not Found
        </h2>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
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
              alt={journal.name}
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
                  img === mainImage ? "border-primary" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div>
          <p className="text-sm font-semibold text-primary uppercase">
            {journal.category}
          </p>

          <h1 className="text-4xl font-extrabold mb-3">{journal.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(journal.rating)
                    ? "fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              ({journal.reviewsCount} reviews)
            </span>
          </div>

          {/* PRICE */}
          <div className="text-4xl font-extrabold text-primary mb-6">
            {formatPrice(finalPrice)}
          </div>

          <p className="text-gray-700 mb-8">{journal.description}</p>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 flex items-center">
              <Tag className="w-4 h-4 mr-2" /> Size:
            </h3>
            <div className="flex gap-3 flex-wrap">
              {journal.options?.size?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === size ? "bg-primary text-white" : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* COVER TYPEEE */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 flex items-center">
              <Printer className="w-4 h-4 mr-2" /> Cover Type:
            </h3>
            <div className="flex gap-3 flex-wrap">
              {journal.options?.coverType?.map((cover) => (
                <button
                  key={cover}
                  onClick={() => setSelectedCover(cover)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCover === cover ? "bg-primary text-white" : "bg-white"
                  }`}
                >
                  {cover}
                </button>
              ))}
            </div>
          </div>

          {/* PAGES */}
          {/* RULING */}
          <div className="mb-6">
          <h3 className="font-semibold mb-2 flex items-center">
              <NotepadText className="w-4 h-4 mr-2" /> Ruling Type:
            </h3>
              
            <div className="flex gap-3 flex-wrap">
              {journal.options?.rulingType?.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedRuling(type)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    selectedRuling === type
                      ? "bg-primary text-white border-primary" // Adjusted to 'black' or your 'primary'
                      : "bg-white border-gray-300 hover:border-primary"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* PAGES - New Section */}
          <div className="mb-6">
          <h3 className="font-semibold mb-2 flex items-center">
          <NotebookText className="w-4 h-4 mr-2"/>Pages:
            </h3>
            <div className="flex gap-3 flex-wrap">
              {journal.options?.pageMap?.[selectedSize]
                ?.filter((pageCount) => {
                  // If Dated is selected, ONLY show 365
                  if (selectedRuling === "Dated") return pageCount === 365;
                  // If anything else is selected, hide 365
                  return pageCount !== 365;
                })
                .map((pageCount) => (
                  <button
                    key={pageCount}
                    onClick={() => setSelectedPages(pageCount)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedPages === pageCount
                        ? "bg-primary text-white border-primary"
                        : "bg-white border-gray-300 hover:border-primary"
                    }`}
                  >
                    {pageCount} Pages
                  </button>
                ))}
            </div>
          </div>

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
            className="w-full py-4 bg-highlight border border-gray-500 font-bold flex items-center justify-center hover:bg-gray-900 hover:text-highlight transition"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {isAdding ? "Adding…" : "Add to Cart"}
          </button>

          {/* META */}
          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Production: {journal.productionTime}
            </div>
            <div className="flex items-center">
              <Truck className="w-4 h-4 mr-2" />
              Shipping Class: {journal.shipping.shippingClass}
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Stock: {journal.inventory.stockStatus}
            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate(`/products/journals/:collection/${item.id}`)
                }
                className="cursor-pointer"
              >
                <img src={item.media.thumbnail} className="rounded-lg" />
                <p className="mt-2 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpiralDetail;
