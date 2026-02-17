import React, { useState } from "react";
import {
  Upload,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { useCart } from "../context/CartContext";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const SIZE_PRICING = {
  A5: 79,
  A4: 99,
  A3: 199,
};

const CustomPoster = () => {
  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [size, setSize] = useState("A4");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  // ---------------------------
  // IMAGE EDITOR STATE
  // ---------------------------
  const [editor, setEditor] = useState({
    scale: 1,
    rotate: 0,
    brightness: 100,
    contrast: 100,
  });

  // ---------------------------
  // IMAGE UPLOAD → CLOUDINARY
  // ---------------------------
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    try {
      const { url, publicId } = await uploadToCloudinary(file);

      setPreview(url);
      setImageFile({
        file,
        url,
        publicId,
      });
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }

    setLoading(false);
  };

  // ---------------------------
  // ADD TO CART (CUSTOM PRODUCT)
  // ---------------------------
  const handleAddToCart = () => {
    if (!imageFile) {
      alert("Please upload an image first");
      return;
    }

    setLoading(true);

    dispatchCart({
      type: "ADD_ITEM",
      payload: {
        productId: "custom-poster",
        name: "Custom Photo Poster",
        variantId: size,
        variantLabel: size,
        price: SIZE_PRICING[size],
        quantity,
        thumbnail: imageFile.url,

        productType: "custom",

        customImage: {
          url: imageFile.url,
          publicId: imageFile.publicId,
          edits: editor, // 🔥 CRITICAL
        },
      },
    });

    setTimeout(() => {
      setLoading(false);
      navigate("/cart");
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-[80vh]">
      <h1 className="text-4xl font-extrabold mb-8">
        Custom Photo Poster
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl">

        {/* LEFT — UPLOAD + PREVIEW */}
        <div>
          <div className="border-2 border-dashed rounded-2xl p-6 text-center">

            {preview ? (
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-contain transition-all duration-200"
                  style={{
                    transform: `scale(${editor.scale}) rotate(${editor.rotate}deg)`,
                    filter: `
                      brightness(${editor.brightness}%)
                      contrast(${editor.contrast}%)
                    `,
                  }}
                />
              </div>
            ) : (
              <div className="py-20 flex flex-col items-center">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">
                  Upload your image
                </p>
                <p className="text-xs text-gray-400">
                  JPG / PNG · High resolution recommended
                </p>
              </div>
            )}

            <label className="mt-6 inline-block cursor-pointer">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
              <span className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm">
                Choose Image
              </span>
            </label>
          </div>

          {/* EDITOR CONTROLS */}
          {preview && (
            <div className="mt-6 space-y-4">
              <Control
                label="Zoom"
                min={1}
                max={2.5}
                step={0.01}
                value={editor.scale}
                onChange={(v) => setEditor({ ...editor, scale: v })}
              />

              <Control
                label="Rotate"
                min={-180}
                max={180}
                value={editor.rotate}
                onChange={(v) => setEditor({ ...editor, rotate: v })}
              />

              <Control
                label="Brightness"
                min={70}
                max={130}
                value={editor.brightness}
                onChange={(v) => setEditor({ ...editor, brightness: v })}
              />

              <Control
                label="Contrast"
                min={80}
                max={130}
                value={editor.contrast}
                onChange={(v) => setEditor({ ...editor, contrast: v })}
              />

              <button
                onClick={() =>
                  setEditor({
                    scale: 1,
                    rotate: 0,
                    brightness: 100,
                    contrast: 100,
                  })
                }
                className="text-sm text-red-600 underline"
              >
                Reset adjustments
              </button>
            </div>
          )}
        </div>

        {/* RIGHT — OPTIONS */}
        <div>
          <p className="text-gray-600 mb-6">
            Upload your photo and we’ll turn it into a premium wall poster.
          </p>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Select Size</h3>
            <div className="flex gap-3">
              {Object.keys(SIZE_PRICING).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-full border ${
                    size === s
                      ? "bg-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div className="text-3xl font-extrabold text-primary mb-6">
            ₹{SIZE_PRICING[size]}
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-semibold">Quantity</span>
            <div className="flex items-center border rounded-xl">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            disabled={loading}
            className="w-full py-4 bg-highlight border border-gray-500 font-bold flex items-center justify-center hover:bg-gray-900 hover:text-highlight transition"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {loading ? "Adding…" : "Add to Cart"}
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Colors may vary slightly in print. Custom products are non-returnable.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------
   RANGE CONTROL COMPONENT
---------------------------- */
const Control = ({ label, min, max, step = 1, value, onChange }) => (
  <div>
    <label className="text-sm font-semibold">{label}</label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      className="w-full"
    />
  </div>
);

export default CustomPoster;
