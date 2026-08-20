import React, { useState } from "react";
import { ShoppingCart, Minus, Plus, Pencil, ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useImageEditor } from "../hooks/useImageEditor";
import ImageDropzone from "../components/ImageDropzone";
import ImageEditorModal from "../components/ImageEditorModal";
import { generateEditedImageBlob } from "../utils/imageUtils";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const PRODUCT_DATA = {
  options: { size: ["A4", "A5", "A3"], paperType: ["Matte", "Glossy"] },
  variants: [
    { variantId: "IM-A4", size: "A4", price: 99 },
    { variantId: "IM-A3", size: "A3", price: 179 },
    { variantId: "IM-A5", size: "A5", price: 69 },
  ],
};

const CustomJournal = () => {
  const navigate = useNavigate();
  const { dispatchCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    PRODUCT_DATA.options.size[0],
  );
  const [selectedPaperType, setSelectedPaperType] = useState(
    PRODUCT_DATA.options.paperType[0],
  );
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const imgEditor = useImageEditor(1.414);

  const activeVariant = PRODUCT_DATA.variants.find(
    (v) => v.size === selectedSize,
  );
  const currentPrice = activeVariant ? activeVariant.price : 0;

  const handleAddToCart = async () => {
    if (!imgEditor.imageFile) return alert("Please upload an image first.");
    if (!activeVariant) return alert("Selected variant is unavailable.");

    setLoading(true);
    try {
      const containerWidth = imgEditor.editor.frameWidth || 400;
      const editedBlob = await generateEditedImageBlob(
        imgEditor.imageFile.url,
        imgEditor.editor,
        containerWidth,
        1200,
        1.414,
      );

      const editedFile = new File(
        [editedBlob],
        `custom-poster-${Date.now()}.jpg`,
        { type: "image/jpeg" },
      );
      const editedUpload = await uploadToCloudinary(editedFile);

      dispatchCart({
        type: "ADD_ITEM",
        payload: {
          productId: "custom-poster",
          name: `Custom Photo Poster (${selectedSize} - ${selectedPaperType})`,
          variantId: activeVariant.variantId,
          variantLabel: `${selectedSize} / ${selectedPaperType}`,
          price: currentPrice,
          quantity,
          thumbnail: editedUpload.url,
          customImage: {
            originalUrl: imgEditor.imageFile.url,
            originalPublicId: imgEditor.imageFile.publicId,
            editedUrl: editedUpload.url,
            editedPublicId: editedUpload.publicId,
            paperType: selectedPaperType,
            edits: imgEditor.editor,
          },
        },
      });

      navigate("/cart");
    } catch (err) {
      console.error(err);
      alert("Could not process image adjustments.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 min-h-[80vh]">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900">
        Custom Journal Book
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
        <div>
          {!imgEditor.preview ? (
            <ImageDropzone
              isDraggingFile={imgEditor.isDraggingFile}
              setIsDraggingFile={imgEditor.setIsDraggingFile}
              handleDrop={imgEditor.handleDrop}
              fileInputRef={imgEditor.fileInputRef}
              handleImageUpload={imgEditor.handleImageUpload}
              uploading={imgEditor.uploading}
            />
          ) : (
            <div>
              <div className="relative aspect-[1/1.414] w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-inner">
                {imgEditor.flatPreview ? (
                  <img
                    src={imgEditor.flatPreview}
                    alt="Poster preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
                    Rendering preview…
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center gap-3 opacity-0 hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => imgEditor.openEditor(imgEditor.editor)}
                    className="inline-flex items-center gap-1.5 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
                  >
                    <Pencil className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => imgEditor.fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 bg-white/90 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
                  >
                    <ImagePlus className="w-3.5 h-3.5" /> Replace
                  </button>
                </div>
              </div>

              <input
                ref={imgEditor.fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={imgEditor.handleImageUpload}
              />
            </div>
          )}
        </div>
        {/* SIZE SELECTOR */}
        {/* PAPER FINISH SELECTOR */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Transform your favorite photos into studio-quality physical
              posters. Printed with archival inks on premium paper stock.
            </p>
            {/* SIZE SELECTOR */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 text-sm mb-3">
                1. Select Size{" "}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_DATA.options.size.map((s) => {
                  const variant = PRODUCT_DATA.variants.find(
                    (v) => v.size === s,
                  );
                  const isSelected = selectedSize === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-3 px-4 rounded-xl border text-center transition-all ${
                        isSelected
                          ? "border-accent bg-primary text-white shadow-md"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-bold text-base">{s}</div>
                      <div
                        className={`text-xs mt-0.5 ${
                          isSelected ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        ₹{variant ? variant.price : "--"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PAPER FINISH SELECTOR */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 text-sm mb-3">
                2. Select Paper Finish
              </h3>
              <div className="flex gap-3">
                {PRODUCT_DATA.options.paperType.map((paper) => {
                  const isSelected = selectedPaperType === paper;
                  return (
                    <button
                      key={paper}
                      onClick={() => setSelectedPaperType(paper)}
                      className={`flex-1 py-2.5 px-4 rounded-xl border text-sm font-medium transition ${
                        isSelected
                          ? "border-accent bg-primary text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {paper} Finish
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-gray-100 my-6" />


            {/* QUANTITY CONTROL */}
            <div className="flex items-center justify-between mb-8 p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="font-semibold text-sm text-gray-700 ml-2">
                Quantity
              </span>
              <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 text-gray-600 hover:text-black transition"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-bold text-gray-800 text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-gray-600 hover:text-black transition"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Poster controls / configuration UI */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-sm font-medium text-gray-500">
                  Total Price
                </span>
                <div className="text-3xl font-extrabold text-gray-900">
                  ₹{currentPrice * quantity}
                </div>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={loading || !imgEditor.preview}
              className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition disabled:opacity-50"
            >
              <ShoppingCart className="w-5 h-5" />
              {loading ? "Processing..." : "Add to Shopping Cart"}
            </button>
          </div>
        </div>{" "}
      </div>

      {imgEditor.isEditorOpen && (
        <ImageEditorModal
          preview={imgEditor.preview}
          draftEditor={imgEditor.draftEditor}
          setDraftEditor={imgEditor.setDraftEditor}
          activeTool={imgEditor.activeTool}
          setActiveTool={imgEditor.setActiveTool}
          isPanning={imgEditor.isPanning}
          onPointerDown={imgEditor.handlePointerDown}
          onPointerMove={imgEditor.handlePointerMove}
          onPointerUp={imgEditor.handlePointerUp}
          onReset={imgEditor.handleResetEditor}
          onQuickRotate={imgEditor.quickRotate}
          onCancel={imgEditor.closeEditorWithoutSaving}
          onConfirm={imgEditor.confirmEditor}
          naturalSize={imgEditor.naturalSize}
          onImageLoad={(e) =>
            imgEditor.setNaturalSize({
              width: e.target.naturalWidth,
              height: e.target.naturalHeight,
            })
          }
          frameSize={imgEditor.frameSize}
          frameRef={imgEditor.modalFrameRef}
          aspectRatioCss="aspect-[1/1.414]"
        />
      )}
    </div>
  );
};

export default CustomJournal;
