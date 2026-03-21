// import React, { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import useProducts from "../hooks/useProducts";
// // import { POSTER_COLLECTION_IMAGES } from "../data/posterCollections";


// const POSTER_COLLECTION_IMAGES = {
//   Marvel: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873220/marvel-superhero-movie-posters-collage_gnwzha.webp",
//   DC: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/dc-movie-and-comic-posters-collage_rrzldn.webp", 
//   Movies: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/movie-posters-collage-collection_bn3pdn.webp", 
//   Series: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/popular-tv-series-posters-collage_evipfk.webp", 
//   Cars: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873220/automotive-car-posters-collage-collection_zksdey.webp",
//   Spiritual: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/spiritual-posters-collection-collage_huhymu.webp",
//   Music: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873220/music-posters-artist-collage-compilation_qamyxf.webp",
//   Motivational: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873222/motivational-posters-collage-collection_dinaax.webp",
//   Gaming: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/video-game-posters-collage_iwbcuk.webp",
//   Cricket: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/indian-cricket-posters-collage-dhoni-kohli-rohit_qjcxyk.webp",
//   Football: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/football-posters-collage-iconic-players_tnvq18.webp",
//   Animated_Movies: "https://res.cloudinary.com/dal56whd6/image/upload/v1772010079/animated-movie-posters-collage-collection_ocwqlt.webp",
//   All: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873222/pop-culture-movie-tv-show-posters-collage_ogvble.webp",
// };

// const PostersCollections = () => {
//   const navigate = useNavigate();
//   const { products } = useProducts();

//   const collections = useMemo(() => {
//     return [
//       ...new Set(
//         products
//           .filter(p => p.category === "Posters")
//           .map(p => p.collections?.franchise)
//           .filter(Boolean)
//       ),
//     ];
//   }, [products]);

//   return (
//     <div className="max-w-9xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-extrabold mb-10">Poster Collections</h1>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
//         {collections.map(col => (
//           <div
//             key={col}
//             onClick={() => navigate(`/products/posters/${col.toLowerCase()}`)}
//             className="cursor-pointer rounded-2xl overflow-hidden h-[80vh] shadow hover:shadow-xl transition"
//           >
//             {/* IMAGE */}
//             <img
//               src={
//                 POSTER_COLLECTION_IMAGES[col] ||
//                 "/collections/default.jpg"
//               }
//               alt={col}
//               className="h-full w-full object-cover"
//             />

//             {/* TEXT */}
//             <div className="p-4 text-center">
//               <h3 className="font-bold text-lg">{col}</h3>
//               <p className="text-sm text-gray-500 mt-1">Explore</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostersCollections;

