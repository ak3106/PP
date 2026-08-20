import { useState, useRef, useEffect } from "react";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { generateEditedImageBlob } from "../utils/imageUtils";

export const DEFAULT_EDITOR = {
  scale: 1,
  rotate: 0,
  brightness: 100,
  contrast: 100,
  positionX: 0,
  positionY: 0,
  frameWidth: 400,
};

export const useImageEditor = (aspectRatio = 1.414) => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isDraggingFile, setIsDraggingFile] = useState(false);

  const [editor, setEditor] = useState(DEFAULT_EDITOR);
  const [flatPreview, setFlatPreview] = useState(null);

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [draftEditor, setDraftEditor] = useState(DEFAULT_EDITOR);
  const [activeTool, setActiveTool] = useState("crop");
  const [isPanning, setIsPanning] = useState(false);

  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [frameSize, setFrameSize] = useState({ width: 400, height: 400 * aspectRatio });

  const modalFrameRef = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const fileInputRef = useRef(null);

  const processFile = async (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, or WEBP).");
      return;
    }
    setUploading(true);
    try {
      const { url, publicId } = await uploadToCloudinary(file);
      setPreview(url);
      setImageFile({ file, url, publicId });
      setEditor(DEFAULT_EDITOR);
      setFlatPreview(null);
      openEditor(DEFAULT_EDITOR);
    } catch (err) {
      console.error(err);
      alert("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = (e) => processFile(e.target.files?.[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingFile(false);
    processFile(e.dataTransfer.files?.[0]);
  };

  const openEditor = (seed = editor) => {
    setDraftEditor(seed);
    setActiveTool("crop");
    setIsEditorOpen(true);
  };

  const closeEditorWithoutSaving = () => setIsEditorOpen(false);

  const confirmEditor = () => {
    const finalized = { ...draftEditor, frameWidth: frameSize.width };
    setEditor(finalized);
    renderFlatPreview(finalized);
    setIsEditorOpen(false);
  };

  const renderFlatPreview = async (editorState) => {
    if (!imageFile) return;
    try {
      const blob = await generateEditedImageBlob(
        imageFile.url,
        editorState,
        editorState.frameWidth || 400,
        500,
        aspectRatio
      );
      setFlatPreview(URL.createObjectURL(blob));
    } catch (err) {
      console.error("Could not render preview thumbnail", err);
    }
  };

  useEffect(() => {
    if (!isEditorOpen) return;
    const measure = () => {
      const el = modalFrameRef.current;
      if (!el) return;
      setFrameSize({ width: el.clientWidth, height: el.clientHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isEditorOpen]);

  const handlePointerDown = (e) => {
    if (!preview) return;
    isDragging.current = true;
    setIsPanning(true);
    dragStart.current = {
      x: e.clientX - draftEditor.positionX,
      y: e.clientY - draftEditor.positionY,
    };
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    setDraftEditor((prev) => ({
      ...prev,
      positionX: Math.round(newX),
      positionY: Math.round(newY),
    }));
  };

  const handlePointerUp = (e) => {
    if (isDragging.current) {
      isDragging.current = false;
      setIsPanning(false);
      try {
        e.target.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  const handleResetEditor = () => setDraftEditor(DEFAULT_EDITOR);
  const quickRotate = () =>
    setDraftEditor((prev) => ({
      ...prev,
      rotate: ((prev.rotate + 90 + 180) % 360) - 180,
    }));

  useEffect(() => {
    if (!isEditorOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeEditorWithoutSaving();
      if (e.key === "Enter") confirmEditor();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isEditorOpen, draftEditor]);

  return {
    imageFile,
    preview,
    uploading,
    isDraggingFile,
    setIsDraggingFile,
    editor,
    flatPreview,
    isEditorOpen,
    draftEditor,
    setDraftEditor,
    activeTool,
    setActiveTool,
    isPanning,
    naturalSize,
    setNaturalSize,
    frameSize,
    modalFrameRef,
    fileInputRef,
    handleDrop,
    handleImageUpload,
    openEditor,
    closeEditorWithoutSaving,
    confirmEditor,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleResetEditor,
    quickRotate,
  };
};