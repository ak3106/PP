import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";



// ─── unchanged helpers (keep your real ones) ──────────────────────────────────
const categoryMap = {
  posters: "Posters",
  journals: "Journals",
  notebooks: "Notebooks",
  banners: "Banners",
}; // your real categoryMap
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
    Trending:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1772105234/trending-pop-culture-posters-collage_khzjvb.webp",
  },
  s: {},
  notebooks: {
    Football:
      "https://res.cloudinary.com/dal56whd6/image/upload/v1771873221/football-posters-collage-iconic-players_tnvq18.webp",
  },
}; // your real COLLECTION_IMAGES
// ──────────────────────────────────────────────────────────────────────────────

/* ─── Badge ──────────────────────────────────────────────────────────────────── */
function Badge({ children }) {
  return (
    <span className="inline-block text-[0.6rem] font-bold tracking-widest uppercase text-white bg-amber-500 rounded-full px-2.5 py-0.5 self-start mb-1">
      {children}
    </span>
  );
}

/* ─── CollectionCard ─────────────────────────────────────────────────────────── */
function CollectionCard({ src, alt, title, subtitle, badge, onClick, featured }) {
  return (
    <div
      onClick={onClick}
      className={[
        "group cursor-pointer rounded-2xl overflow-hidden bg-white h-[40  vh] lg:h-[90vh]",
        "shadow-sm hover:shadow-xl transition-all duration-300 ease-out",
        "hover:-translate-y-1 flex flex-col",
        featured ? "md:col-span-1" : "",
      ].join(" ")}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "aspect-[3/4]" : "aspect-[3/4]"}`}>
        <img
          src={src || "/default.jpg"}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-1 p-4 flex-2">
        {badge && <Badge>{badge}</Badge>}
        <h3 className="text-base font-bold tracking-tight leading-tight m-0">{title}</h3>
        <p className="text-xs text-stone-400 m-0">{subtitle}</p>
        <span className="text-sm font-bold text-amber-500 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      </div>
    </div>
  );
}

/* ─── CollectionsPage ────────────────────────────────────────────────────────── */
const CollectionsPage = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();

  const selectedCategory = categoryMap[categorySlug];

  // 🎯 Franchise collections  (logic unchanged)
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

  // 🎯 Trending (isNewArrival)  (logic unchanged)
  const trendingExists = useMemo(() => {
    return products.some(
      (p) => p.category === selectedCategory && p.isNewArrival
    );
  }, [products, selectedCategory]);

  if (!selectedCategory) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-stone-400 text-lg">
        Category not found
      </div>
    );
  }

  const totalCollections = 1 + (trendingExists ? 1 : 0) + collections.length;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14 py-10 lg:py-16">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <header className="flex flex-wrap items-end justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-amber-500 mb-1">
              Shop by collection
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none capitalize m-0">
              {categorySlug} Collections
            </h1>
          </div>
          <span className="text-xs text-stone-400 tracking-wide self-end pb-0.5">
            {totalCollections} collection{totalCollections !== 1 ? "s" : ""}
          </span>
        </header>

        {/* ── Grid ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">

          {/* ⭐ ALL PRODUCTS — featured wide card */}
          <CollectionCard
            featured
            src={COLLECTION_IMAGES[categorySlug]?.All}
            alt="All"
            title={`All ${selectedCategory}`}
            subtitle="Browse the full lineup"
            onClick={() => navigate(`/products/${categorySlug}/all`)}
          />

          {/* ⭐ TRENDING */}
          {trendingExists && (
            <CollectionCard
              src={COLLECTION_IMAGES[categorySlug]?.Trending}
              alt="Trending"
              title="Trending"
              subtitle="New arrivals"
              badge="New"
              onClick={() => navigate(`/products/${categorySlug}/trending`)}
            />
          )}

          {/* ⭐ DYNAMIC COLLECTIONS */}
          {collections.map((col) => (
            <CollectionCard
              key={col}
              src={COLLECTION_IMAGES[categorySlug]?.[col]}
              alt={col}
              title={col}
              subtitle="Explore"
              onClick={() =>
                navigate(`/products/${categorySlug}/${col.toLowerCase()}`)
              }
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
