// export const uploadToCloudinary = async (file) => {
//     const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
//     const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
  
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", UPLOAD_PRESET);
//     formData.append("folder", "products");
  
//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
  
//     if (!res.ok) {
//       throw new Error("Cloudinary upload failed");
//     }
  
//     const data = await res.json();
  
//     return {
//       url: data.secure_url,
//       publicId: data.public_id,
//       width: data.width,
//       height: data.height,
//     };
//   };
  

export const uploadToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  const data = await res.json();

  return {
    url: data.secure_url,
    publicId: data.public_id,
  };
};
