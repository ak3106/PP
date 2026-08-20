import React from "react";
import { Upload } from "lucide-react";

const ImageDropzone = ({
  isDraggingFile,
  setIsDraggingFile,
  handleDrop,
  fileInputRef,
  handleImageUpload,
  uploading,
}) => (
  <div
    onDragOver={(e) => {
      e.preventDefault();
      setIsDraggingFile(true);
    }}
    onDragLeave={() => setIsDraggingFile(false)}
    onDrop={handleDrop}
    className={`rounded-2xl p-4 sm:p-6 text-center transition-colors border-2 border-dashed ${
      isDraggingFile
        ? "border-gray-900 bg-gray-100"
        : "border-gray-300 bg-gray-50/50"
    }`}
  >
    <div className="py-16 sm:py-24 flex flex-col items-center">
      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4">
        <Upload className="w-6 h-6 text-gray-500 stroke-[1.5]" />
      </div>
      <p className="text-gray-700 font-medium mb-1">
        {uploading ? "Uploading…" : "Drag & drop your photo here"}
      </p>
      <p className="text-xs text-gray-400 mb-6">
        PNG, JPG, or WEBP up to 25MB — or click below to browse
      </p>
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
          disabled={uploading}
        />
        <span className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl text-sm transition shadow-sm">
          {uploading ? "Uploading…" : "Choose Image"}
        </span>
      </label>
    </div>
  </div>
);

export default ImageDropzone;