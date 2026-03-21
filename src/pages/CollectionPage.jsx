import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const COLLECTION_IMAGES = {
  posters: {
    Marvel:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873220/marvel-superhero-movie-posters-collage_gnwzha.webp",
    DC: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/dc-movie-and-comic-posters-collage_rrzldn.webp",
    Movies:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/movie-posters-collage-collection_bn3pdn.webp",
    Series:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/popular-tv-series-posters-collage_evipfk.webp",
    Cars: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873220/automotive-car-posters-collage-collection_zksdey.webp",
    Spiritual:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/spiritual-posters-collection-collage_huhymu.webp",
    Music:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873220/music-posters-artist-collage-compilation_qamyxf.webp",
    Motivation:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873222/motivational-posters-collage-collection_dinaax.webp",
    Gaming:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873223/video-game-posters-collage_iwbcuk.webp",
    Cricket:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/indian-cricket-posters-collage-dhoni-kohli-rohit_qjcxyk.webp",
    Football:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/football-posters-collage-iconic-players_tnvq18.webp",
    Animated_Movies:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1772010079/animated-movie-posters-collage-collection_ocwqlt.webp",
    All: "https://res.cloudinary.com/dal56whd6/image/upload/v1771873222/pop-culture-movie-tv-show-posters-collage_ogvble.webp",
    Trending:"https://res.cloudinary.com/dal56whd6/image/upload/v1772105234/trending-pop-culture-posters-collage_khzjvb.webp"
  },
  s: {},
  notebooks: {
    Football:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/football-posters-collage-iconic-players_tnvq18.webp",
  },
  // add more
};

const categoryMap = {
  posters: "Posters",
  journals: "Journals",
  notebooks: "Notebooks",
};

const CollectionsPage = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();

  const selectedCategory = categoryMap[categorySlug];

  // 🎯 Franchise collections
  const collections = useMemo(() => {
    if (!selectedCategory) return [];

    return [
      ...new Set(
        products
          .filter((p) => p.category === selectedCategory)
          .map((p) => p.collections?.franchise)
          .filter(Boolean)
      ),
    ];
  }, [products, selectedCategory]);

  // 🎯 Trending (isNewArrival)
  const trendingExists = useMemo(() => {
    return products.some(
      (p) => p.category === selectedCategory && p.isNewArrival
    );
  }, [products, selectedCategory]);

  if (!selectedCategory) {
    return <div className="text-center py-20">Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-10 capitalize">
        {categorySlug} Collections
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* ⭐ ALL PRODUCTS */}
        <div
          onClick={() => navigate(`/products/${categorySlug}/all`)}
          className="cursor-pointer rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
        >
          <img
            src={COLLECTION_IMAGES[categorySlug]?.All || "/default.jpg"}
            alt="All"
            className="w-full h-[70vh] object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">All {selectedCategory}</h3>
            <p className="text-sm text-gray-500 mt-1">Browse everything</p>
          </div>
        </div>

        {/* ⭐ TRENDING */}
        {trendingExists && (
          <div
            onClick={() => navigate(`/products/${categorySlug}/trending`)}
            className="cursor-pointer rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
            src={COLLECTION_IMAGES[categorySlug]?.Trending || "/default.jpg"}
            alt="Trending"
              className="w-full h-[70vh] object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Trending</h3>
              <p className="text-sm text-gray-500 mt-1">New arrivals</p>
            </div>
          </div>
        )}

        {/* ⭐ DYNAMIC COLLECTIONS */}
        {collections.map((col) => (
          <div
            key={col}
            onClick={() =>
              navigate(`/products/${categorySlug}/${col.toLowerCase()}`)
            }
            className="cursor-pointer rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={COLLECTION_IMAGES[categorySlug]?.[col] || "/default.jpg"}
              alt={col}
              className="w-full h-[70vh] object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{col}</h3>
              <p className="text-sm text-gray-500 mt-1">Explore</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
