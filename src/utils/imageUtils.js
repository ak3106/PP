/**
 * Generates the exact cropped image blob without outer borders.
 */
export const generateEditedImageBlob = async (
  imageUrl,
  editor,
  previewContainerWidth = 400,
  outputWidth = 1200,
  aspectRatio = 1.414 // Default to A-series poster ratio
) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const outputHeight = Math.round(outputWidth * aspectRatio);

      const canvas = document.createElement("canvas");
      canvas.width = outputWidth;
      canvas.height = outputHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Could not get canvas context");

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, outputWidth, outputHeight);

      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, outputWidth, outputHeight);
      ctx.clip();

      ctx.filter = `brightness(${editor.brightness}%) contrast(${editor.contrast}%)`;

      const scaleFactor = outputWidth / previewContainerWidth;

      ctx.translate(outputWidth / 2, outputHeight / 2);
      ctx.translate(
        editor.positionX * scaleFactor,
        editor.positionY * scaleFactor
      );
      ctx.rotate((editor.rotate * Math.PI) / 180);

      const fitScale = Math.min(
        outputWidth / img.width,
        outputHeight / img.height
      );

      const finalScale = fitScale * editor.scale;
      ctx.scale(finalScale, finalScale);

      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      ctx.restore();

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject("Failed to create blob");
        },
        "image/jpeg",
        0.92
      );
    };

    img.onerror = (err) => reject(err);
  });
};