import React from "react";
import { Move, RotateCcw, RotateCw, Crop, SlidersHorizontal, X, Check } from "lucide-react";

export const CropBracket = ({ corner }) => {
  const pos = {
    tl: "top-2 left-2 border-t-2 border-l-2",
    tr: "top-2 right-2 border-t-2 border-r-2",
    bl: "bottom-2 left-2 border-b-2 border-l-2",
    br: "bottom-2 right-2 border-b-2 border-r-2",
  }[corner];
  return <div className={`absolute w-5 h-5 border-white/80 pointer-events-none ${pos}`} />;
};

export const SliderRow = ({ label, min, max, step = 1, value, onChange, suffix = "" }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-xs font-medium text-zinc-300">
      <span>{label}</span>
      <span className="text-zinc-500">
        {value}
        {suffix}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-white"
    />
  </div>
);

const ImageEditorModal = ({
  preview,
  draftEditor,
  setDraftEditor,
  activeTool,
  setActiveTool,
  isPanning,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onReset,
  onQuickRotate,
  onCancel,
  onConfirm,
  naturalSize,
  onImageLoad,
  frameSize,
  frameRef,
  aspectRatioCss = "aspect-[1/1.414]",
}) => {
  const tools = [
    { id: "crop", label: "Frame", icon: Crop },
    { id: "rotate", label: "Rotate", icon: RotateCw },
    { id: "adjust", label: "Adjust", icon: SlidersHorizontal },
  ];

  const fitScale =
    naturalSize.width && naturalSize.height && frameSize.width && frameSize.height
      ? Math.min(frameSize.width / naturalSize.width, frameSize.height / naturalSize.height)
      : 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6" role="dialog">
      <div className="relative flex flex-col lg:flex-row w-full max-w-5xl h-[85vh] max-h-[750px] bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <div className="flex lg:hidden items-center justify-between px-5 py-4 border-b border-white/10 bg-zinc-950">
          <h2 className="text-white font-semibold text-base">Frame your image</h2>
          <button onClick={onCancel} className="text-zinc-400 hover:text-white transition p-1.5 rounded-full hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative flex-1 bg-zinc-900/60 flex items-center justify-center p-6 select-none overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div
            ref={frameRef}
            className={`relative ${aspectRatioCss} h-full max-h-[520px] w-auto overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-white/10 cursor-grab active:cursor-grabbing`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <img
              src={preview}
              alt="Preview"
              draggable={false}
              onLoad={onImageLoad}
              className="absolute top-1/2 left-1/2 max-w-none pointer-events-none transition-transform duration-75 ease-out"
              style={{
                width: naturalSize.width || "auto",
                height: naturalSize.height || "auto",
                transform: `translate(-50%, -50%) translate(${draftEditor.positionX}px, ${draftEditor.positionY}px) scale(${fitScale * draftEditor.scale}) rotate(${draftEditor.rotate}deg)`,
                filter: `brightness(${draftEditor.brightness}%) contrast(${draftEditor.contrast}%)`,
                opacity: naturalSize.width ? 1 : 0,
              }}
            />

            {!naturalSize.width && (
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-xs pointer-events-none">
                Loading image…
              </div>
            )}

            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-150 ${isPanning ? "opacity-100" : "opacity-0"}`}>
              {[1, 2].map((i) => (
                <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-white/40" style={{ left: `${(i / 3) * 100}%` }} />
              ))}
              {[1, 2].map((i) => (
                <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-white/40" style={{ top: `${(i / 3) * 100}%` }} />
              ))}
            </div>

            {["tl", "tr", "bl", "br"].map((corner) => (
              <CropBracket key={corner} corner={corner} />
            ))}

            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full pointer-events-none border border-white/10 shadow-md">
              <Move className="w-3.5 h-3.5" />
              <span>Drag to position</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[360px] bg-zinc-950 shrink-0">
          <div className="hidden lg:flex items-center justify-between px-6 py-5 border-b border-white/10">
            <h2 className="text-white font-semibold text-base">Frame your image</h2>
            <button onClick={onCancel} className="text-zinc-400 hover:text-white transition p-1.5 rounded-full hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
            <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-2xl border border-white/5">
              {tools.map(({ id, label, icon: Icon }) => {
                const isActive = activeTool === id;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setActiveTool(id);
                      if (id === "rotate") onQuickRotate();
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                      isActive ? "bg-white text-zinc-950 shadow-md" : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-4 bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
              {activeTool === "crop" && (
                <SliderRow
                  label="Zoom"
                  min={0.3}
                  max={2.5}
                  step={0.01}
                  value={draftEditor.scale}
                  onChange={(v) => setDraftEditor((prev) => ({ ...prev, scale: v }))}
                />
              )}

              {activeTool === "rotate" && (
                <SliderRow
                  label="Fine rotation"
                  min={-180}
                  max={180}
                  step={1}
                  suffix="°"
                  value={draftEditor.rotate}
                  onChange={(v) => setDraftEditor((prev) => ({ ...prev, rotate: v }))}
                />
              )}

              {activeTool === "adjust" && (
                <div className="space-y-4">
                  <SliderRow
                    label="Brightness"
                    min={70}
                    max={130}
                    step={1}
                    suffix="%"
                    value={draftEditor.brightness}
                    onChange={(v) => setDraftEditor((prev) => ({ ...prev, brightness: v }))}
                  />
                  <SliderRow
                    label="Contrast"
                    min={80}
                    max={130}
                    step={1}
                    suffix="%"
                    value={draftEditor.contrast}
                    onChange={(v) => setDraftEditor((prev) => ({ ...prev, contrast: v }))}
                  />
                </div>
              )}
            </div>

            <div className="pt-2">
              <button onClick={onReset} className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition px-1 py-1">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset parameters to default</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-zinc-950 border-t border-white/10">
            <button onClick={onCancel} className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition">
              Cancel
            </button>
            <button onClick={onConfirm} className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition shadow-lg">
              <Check className="w-4 h-4" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditorModal;