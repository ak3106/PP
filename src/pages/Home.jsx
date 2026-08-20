import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aurora from "../components/Aurora";
import SplitText from "../components/SplitText";
import banner from "../assets/pexels-alphaen-31726551.jpg";

import { CATEGORIES } from "../data/dummyProducts";
import { QUALITY_POINTS, TESTIMONIALS, CUSTOM_CATEGORIES } from "../data/home/homeData";
import useRandomProducts from "../hooks/useRandomProducts";
import { AURORA_STOPS } from "../styles/theme"; 

import SectionLabel from "../components/home/SectionLabel.jsx";
import { BtnPrimary, BtnGhost } from "../components/home/Buttons";
import CategoryTile from "../components/home/CategoryTile.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductCardSkeleton from "../components/home/ProductCardSkeleton";
import CustomCategoryCard from "../components/home/CustomCategoryCard";
import QualityPoint from "../components/home/QualityPoint";
import TestimonialCard from "../components/home/TestimonialCard";

/* ─────────────────────────────────────────────
   NOTE ON FONTS
   Headings use DM Sans (.font-heading), body copy uses Playfair
   Display (.font-body) — both utility classes are injected below.
   Make sure both families are actually loaded once globally, e.g.
   in index.html:

   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap" />
───────────────────────────────────────────── */

const Home = () => {
  const navigate = useNavigate();
  const { products, loading, error } = useRandomProducts(8);

  /* inject font-role utility classes + a small entrance keyframe, once */
  useEffect(() => {
    const styleId = "home-fonts-and-motion";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .font-heading { font-family: 'DM Sans', sans-serif; }
      .font-body { font-family: 'Playfair Display', serif; }
      @keyframes home-fade-up {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-up { opacity: 0; animation: home-fade-up 0.7s ease forwards; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-[#F5F4F0] font-body text-[#2C4E34]">
      <Aurora colorStops={AURORA_STOPS} blend={1} amplitude={1} speed={1} />

      {/* ── HERO ── */}
      <section className="relative mt-[-70px] flex min-h-[42vh] flex-col gap-8 px-5 pt-16 sm:mt-[-90px] sm:px-8 sm:pt-20 lg:mt-[-100px] lg:gap-6 lg:px-10">
        <div className="relative z-10 flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SplitText
            text="Lifestyle & Decor"
            className="font-heading text-5xl font-extrabold sm:text-6xl lg:text-8xl"
            delay={160}
            duration={1.0}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            showCallback={false}
          />
          <div className="animate-fade-up font-body text-lg sm:text-xl lg:text-2xl">
            <p className="mt-2 lg:mt-4">
              &ndash;Personalize your{" "}
              <span className="font-bold italic text-[#C8973A]">Stationery</span>{" "}
              &amp;
            </p>
            <p className="lg:pl-16">
              make it <span className="font-bold italic text-[#C4421A]">yours!</span>
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="animate-fade-up font-body text-lg sm:text-xl lg:text-2xl">
            <p className="mt-2 lg:mt-4">
              &ndash;Upgrade your{" "}
              <span className="font-bold italic text-[#C8973A]">Lifestyle</span>{" "}
              &amp;
            </p>
            <p className="lg:pl-16">
              <span className="font-bold italic text-[#C4421A]">Decorate</span> your
              space.
            </p>
          </div>
          <SplitText
            text="Stationery"
            className="font-heading text-5xl font-extrabold sm:text-6xl lg:text-8xl"
            delay={160}
            duration={1.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
            showCallback={false}
          />
        </div>
      </section>

      {/* ── FEATURE BANNER ── */}
      <section className="mx-auto mt-10 h-[42vh] w-[92vw] overflow-hidden rounded-2xl bg-[#EDEAE1] sm:h-[60vh] sm:rounded-3xl lg:h-[85vh] lg:w-[90vw]">
        <img
          src={banner}
          alt="Featured print collection"
          className="h-full w-full object-cover"
        />
      </section>

      {/* ── CATEGORIES ── */}
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mb-8 flex flex-col items-start gap-4 border-b border-[rgba(44,78,52,0.14)] pb-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Browse by category</SectionLabel>
            <h2 className="font-heading text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
              Explore our{" "}
              <em className="font-body italic text-[#C4421A]">Categories</em>.
            </h2>
          </div>
          <BtnGhost onClick={() => navigate("/products")} className="text-xs">
            View all →
          </BtnGhost>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {CATEGORIES.map((cat) => (
            <CategoryTile
              key={cat.name}
              cat={cat}
              onClick={() => navigate(`/products/${cat.slug}`)}
              className={`aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto ${
                cat.span ? "lg:row-span-2" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── BESTSELLING PRODUCTS (8 random, live from /products) ── */}
      <div className="bg-[#EDEAE1]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Must-haves</SectionLabel>
              <h2 className="font-heading text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
                Bestselling <em className="font-body italic text-[#C4421A]">products</em>.
              </h2>
            </div>
            <BtnGhost onClick={() => navigate("/products")} className="text-xs">
              All products →
            </BtnGhost>
          </div>

          {error ? (
            <p className="mt-10 font-body text-sm text-[rgba(44,78,52,0.6)]">
              Couldn&apos;t load products right now — please try again shortly.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {loading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))
                : products.map((p) => (
                    <ProductCard
                      key={p._id || p.id || p.name}
                      product={p}
                      onClick={() =>
                        navigate(`/products/${p.slug || p._id || p.id || ""}`)
                      }
                    />
                  ))}
            </div>
          )}
        </div>
      </div>

      {/* ── CUSTOM PRINT STUDIO (replaces the old services section) ── */}
      <div className="bg-[#F5F4F0]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
          <SectionLabel>Design it yourself</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Build your own{" "}
            <em className="font-body italic text-[#C4421A]">custom print</em>.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {CUSTOM_CATEGORIES.map((item) => (
              <CustomCategoryCard
                key={item.key}
                item={item}
                onClick={() => navigate(item.route)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── QUALITY STRIP ── */}
      <div className="flex flex-col gap-10 bg-[#2C4E34] px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:gap-24 lg:px-16 lg:py-20">
        <div className="flex-1">
          <SectionLabel light>Our promise</SectionLabel>
          <h2 className="mb-4 font-heading text-3xl font-extrabold leading-tight text-[#F5F4F0] sm:text-4xl lg:text-[2.75rem]">
            Quality you can{" "}
            <em className="font-body italic text-[#E3BE72]">feel</em>.
          </h2>
          <p className="max-w-[36ch] font-body text-sm leading-relaxed text-[#F5F4F0]/60 sm:text-base">
            Three decades of refining every step of the process — from ink
            chemistry to paper selection — so your print always exceeds
            expectations.
          </p>
          <BtnPrimary
            onClick={() => navigate("/portfolio")}
            className="mt-8 bg-[#C8973A] text-[#2C4E34] hover:bg-[#dba94d]"
          >
            View Portfolio
          </BtnPrimary>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {QUALITY_POINTS.map((qp) => (
            <QualityPoint key={qp.title} point={qp} />
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="bg-[#EDEAE1]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
          <SectionLabel>Word on the street</SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Customers who <em className="font-body italic text-[#C4421A]">trust</em> our
            print.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testi={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;