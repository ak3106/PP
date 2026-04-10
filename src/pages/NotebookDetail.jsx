import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Minus,
  Plus,
} from "lucide-react";

import Button from "../components/UI/Button";
import { useCart } from "../context/CartContext";
import useProducts from "../hooks/useProducts";

const NotebookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  const { products, loading } = useProducts();

  // --------------------------------------------------
  // FIND PRODUCT
  // --------------------------------------------------
  const notebook = useMemo(
    () => products.find((p) => p.id === id),
    [products, id]
  );

  // --------------------------------------------------
  // STATE
  // --------------------------------------------------
  const [selectedPages, setSelectedPages] = useState(null);
  const [selectedRuling, setSelectedRuling] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // --------------------------------------------------
  // DEFAULT SELECTION
  // --------------------------------------------------
  useEffect(() => {
    if (!notebook) return;

    setSelectedPages(notebook.options?.pages?.[0] ?? null);
    setSelectedRuling(notebook.options?.rulingType?.[0] ?? null);
    setMainImage(notebook.media?.thumbnail ?? "");
  }, [notebook]);

  // --------------------------------------------------
  // VARIANT RESOLUTION
  // --------------------------------------------------
  const selectedVariant = useMemo(() => {
    if (!notebook) return null;

    return notebook.variants.find(
      (v) =>
        v.pages === selectedPages &&
        (v.rulingType ? v.rulingType === selectedRuling : true)
    );
  }, [notebook, selectedPages, selectedRuling]);

  const price = selectedVariant?.price ?? notebook?.pricing?.salePrice ?? 0;

  const formatPrice = (p) => `₹${p.toLocaleString("en-IN")}`;

  // --------------------------------------------------
  // MEDIA ORDER
  // --------------------------------------------------
  const mediaGallery = useMemo(() => {
    if (!notebook?.media) return [];
    return [
      notebook.media.thumbnail,
    //   notebook.media.back,
      ...(notebook.media.images || []),
    ].filter(Boolean);
  }, [notebook]);

  // --------------------------------------------------
  // COMBO SUGGESTIONS
  // --------------------------------------------------
  const comboSuggestions = useMemo(() => {
    if (!notebook?.relatedCombos) return [];
  
    return notebook.relatedCombos
      .map((comboId) =>
        products.find((p) => p.id === comboId)
      )
      .filter(Boolean);
  }, [products, notebook]);
  // --------------------------------------------------
  // RELATED PRODUCTS
  // --------------------------------------------------
  const relatedProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          p.productType === "notebook" &&
          p.id !== notebook?.id &&
          p.subjectTheme === notebook?.subjectTheme
      )
      .slice(0, 4);
  }, [products, notebook]);

  // --------------------------------------------------
  // ADD TO CART
  // --------------------------------------------------
  const handleAddToCart = () => {
    if (!selectedVariant || isAdding) return;

    setIsAdding(true);

    dispatchCart({
      type: "ADD_ITEM",
      payload: {
        productId: notebook.id,
        name: notebook.name,
        variantId: selectedVariant.variantId,
        variantLabel: `A4 / ${selectedVariant.pages} pages / ${selectedRuling}`,
        pages: selectedPages,
        rulingType: selectedRuling,
        price: selectedVariant.price,
        quantity,
        thumbnail: notebook.media.thumbnail,
      },
    });

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 600);
  };

  // --------------------------------------------------
  // LOADING & GUARDS
  // --------------------------------------------------
  if (loading) return <p className="p-10 text-center">Loading…</p>;

  if (!notebook)
    return <p className="p-10 text-center">Notebook not found</p>;

  // --------------------------------------------------
  // RENDER
  // --------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      {/* ===================== TOP SECTION ===================== */}
      <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl">

        {/* IMAGE GALLERY */}
        <div>
          <img
            src={mainImage}
            alt={notebook.name}
            className="rounded-2xl mb-4"
          />

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
          <p className="text-sm text-primary font-semibold uppercase">
            {notebook.category}
          </p>

          <h1 className="text-3xl font-bold mb-3">{notebook.name}</h1>

          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="ml-2 text-sm text-gray-600">
              {notebook.rating} ({notebook.reviewsCount})
            </span>
          </div>

          <div className="text-3xl font-bold text-primary mb-4">
            {formatPrice(price)}
          </div>

          <p className="text-gray-700 mb-6">{notebook.description}</p>

          {/* PAGE OPTIONS */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Pages</h3>
            <div className="flex gap-2">
              {notebook.options.pages.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPages(p)}
                  className={`px-4 py-2 border rounded-full ${
                    selectedPages === p
                      ? "bg-primary text-white"
                      : ""
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* RULING */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Ruling</h3>
            <div className="flex gap-2">
              {notebook.options.rulingType.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRuling(r)}
                  className={`px-4 py-2 border rounded-full ${
                    selectedRuling === r
                      ? "bg-primary text-white"
                      : ""
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <span>Quantity</span>
            <div className="flex border rounded-xl">
              <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-2">
                <Minus size={16}/>
              </button>
              <span className="px-4">{quantity}</span>
              <button onClick={() => setQuantity(q => q+1)} className="p-2">
                <Plus size={16}/>
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-highlight border border-gray-500 font-bold"
          >
            <ShoppingCart className="inline mr-2"/>
            Add to Cart
          </button>
        </div>
      </div>

      {/* ===================== COMBO SUGGESTIONS ===================== */}
      {comboSuggestions.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Save More with Combos
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {comboSuggestions.map(combo => (
              <div
                key={combo.id}
                onClick={() => navigate(`/notebooks/${combo.id}`)}
                className="border p-4 rounded-xl cursor-pointer hover:shadow-lg"
              >
                <img src={combo.media.thumbnail} className="rounded-lg mb-3"/>
                <h3 className="font-semibold">{combo.name}</h3>
                <p className="text-sm text-gray-500">
                  Includes: {combo.includesNotebooks.join(", ")}
                </p>
                <p className="font-bold text-primary mt-2">
                  ₹{combo.pricing.salePrice}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===================== SPECIFICATIONS ===================== */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Specifications</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>Size: {notebook.specifications.size}</div>
          <div>Paper: {notebook.specifications.paperGSM} GSM</div>
          <div>Binding: {notebook.specifications.bindingType}</div>
          <div>Finish: {notebook.specifications.coverFinish}</div>
        </div>
      </div>

      {/* ===================== RELATED PRODUCTS ===================== */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            You may also like
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedProducts.map(item => (
              <div
                key={item.id}
                onClick={() => navigate(`/notebooks/${item.id}`)}
                className="cursor-pointer"
              >
                <img src={item.media.thumbnail} className="rounded-lg"/>
                <p className="mt-2 text-sm font-medium">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default NotebookDetail;