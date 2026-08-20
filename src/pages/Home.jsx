import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import TextType from '../components/TextType';
import BlurText from "../components/BlurText";
import Aurora from "../components/Aurora";
import SplitText from "../components/SplitText";
import BorderGlow from "../components/BorderGlow";
import Navbar from "../components/Navbar";
import banner from "../assets/pexels-alphaen-31726551.jpg"

import {CATEGORIES} from "../data/dummyProducts"

/* ─────────────────────────────────────────────
   Inline styles as a design-token object so
   Tailwind / CSS-modules are NOT required.
   Every colour, spacing & font matches the
   preview exactly.
───────────────────────────────────────────── */

const T = {
  ink: "#0f0e0c",
  cream: "#f7f3ec",
  paper: "#ece8df",
  gold: "#c8973a",
  goldLight: "#e8be6a",
  forest: "#2c4e34",
  rust: "#c4421a",
  muted: "#7a7268",
  border: "rgba(15,14,12,0.12)",
};

/* ── tiny reusable primitives ── */
const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: "0.72rem",
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: T.gold,
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    }}
  >
    <span
      style={{
        height: 1,
        width: "2rem",
        background: T.gold,
        display: "inline-block",
      }}
    />
    {children}
  </p>
);

const BtnPrimary = ({ children, onClick, style = {} }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? T.forest : T.ink,
        color: T.cream,
        border: "none",
        padding: "0.9rem 2rem",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        cursor: "pointer",
        transform: hov ? "translateY(-2px)" : "none",
        transition: "all 0.25s",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

const BtnGhost = ({ children, onClick, style = {} }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "transparent",
        color: T.ink,
        border: `1px solid ${hov ? T.ink : T.border}`,
        padding: "0.9rem 2rem",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.25s",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const HERO_CARDS = [
  {
    icon: "🗺️",
    name: "Wall Posters",
    count: "24 styles",
    variant: "accent",
    tall: true,
  },
  { icon: "📔", name: "Journals", count: "12 designs", variant: "default" },
  { icon: "🏷️", name: "Stickers", count: "Custom cuts", variant: "gold" },
  { icon: "🖨️", name: "Custom Print", count: "Any format", variant: "default" },
];



const PRODUCTS = [
  {
    icon: "🗺️",
    name: "Motivational Poster",
    desc: "High-gloss A3, vivid colour on 170gsm paper.",
    price: "₹149",
    unit: "piece",
    badge: "Bestseller",
  },
  {
    icon: "📔",
    name: "Spiral Journal A5",
    desc: "200 dotted pages, sturdy cover, smooth writing.",
    price: "₹299",
    unit: "unit",
    badge: "New",
  },
  {
    icon: "🏷️",
    name: "Custom Sticker Sheet",
    desc: "Die-cut vinyl stickers, weatherproof & vibrant.",
    price: "₹99",
    unit: "sheet",
    badge: null,
  },
  {
    icon: "📓",
    name: "Hardbound Notebook",
    desc: "Cloth-bound cover, 192 ruled pages, bookmark.",
    price: "₹249",
    unit: "unit",
    badge: "Sale",
  },
];

const SERVICES = [
  {
    num: "01",
    icon: "🖨️",
    name: "Offset Printing",
    desc: "Bulk runs with exceptional colour fidelity. Ideal for brochures, catalogues, and marketing collateral.",
  },
  {
    num: "02",
    icon: "💻",
    name: "Digital Printing",
    desc: "Fast turnaround for short runs. Variable data printing for personalised campaigns.",
  },
  {
    num: "03",
    icon: "✂️",
    name: "Die-Cut & Finishing",
    desc: "Custom shapes, lamination, spot UV, and embossing that make your print stand out.",
  },
  {
    num: "04",
    icon: "🎌",
    name: "Large Format & Banners",
    desc: "Hoardings, flex banners, standees, and backdrops for events and signage.",
  },
  {
    num: "05",
    icon: "📐",
    name: "Design & Pre-Press",
    desc: "In-house team prepares artwork for print-ready output with colour correction and proofing.",
  },
  {
    num: "06",
    icon: "📦",
    name: "Packaging Print",
    desc: "Product boxes, carry bags, and custom packaging with premium finish and branding.",
  },
];

const QUALITY_POINTS = [
  {
    icon: "✦",
    title: "Colour precision",
    desc: "Pantone-matched inks, CMYK calibrated presses.",
  },
  {
    icon: "♻",
    title: "Eco materials",
    desc: "FSC-certified papers and soy-based inks.",
  },
  {
    icon: "⚡",
    title: "Fast turnaround",
    desc: "24–48 hr digital, 3–5 day offset runs.",
  },
  {
    icon: "🛡",
    title: "Print guarantee",
    desc: "Free reprint if we fall short on quality.",
  },
];

const TESTIMONIALS = [
  {
    initials: "AR",
    name: "Aarav Rathore",
    role: "Small business owner",
    text: "Ordered 500 custom stickers for my small business. The die-cut precision was incredible and they arrived a day early. Will reorder every quarter.",
  },
  {
    initials: "PS",
    name: "Priya Shukla",
    role: "School administrator",
    text: "The spiral journals for our school were exactly as designed. Colour vibrancy on the covers far exceeded what we got from our previous vendor.",
  },
  {
    initials: "MK",
    name: "Manav Kapoor",
    role: "Event coordinator",
    text: "Pragya Print handled our event backdrop and 200+ posters. Everything was crisp, timely, and the team guided us through the design process beautifully.",
  },
];

const MARQUEE_ITEMS = [
  "Wall Posters",
  "Spiral Journals",
  "Custom Stickers",
  "Fabric Banners",
  "Notebooks",
  "Premium Print Services",
  "Offset Printing",
  "Digital Printing",
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

const Home = () => {
  const navigate = useNavigate();

  /* inject Google Fonts + global keyframes once */
  useEffect(() => {
    // const fontId = "pragya-fonts";
    // if (!document.getElementById(fontId)) {
    //   const link = document.createElement("link");
    //   link.id = fontId;
    //   link.rel = "stylesheet";
    //   link.href =
    //     "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap";
    //   document.head.appendChild(link);
    // }
    const styleId = "pragya-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes pragya-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pragya-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pragya-fade-up { opacity: 0; animation: pragya-fadeUp 0.6s ease forwards; }
        .pragya-fade-1  { animation-delay: 0.10s; }
        .pragya-fade-2  { animation-delay: 0.22s; }
        .pragya-fade-3  { animation-delay: 0.36s; }
        .pragya-fade-4  { animation-delay: 0.52s; }
        .pragya-fade-5  { animation-delay: 0.68s; }
        .pragya-marquee-track { animation: pragya-marquee 22s linear infinite; }
        .pragya-hero-card:hover .pragya-cat-bg {
          opacity: 0.2 !important;
          transform: scale(1.06) !important;
        }
        .pragya-cat-tile:hover .pragya-tile-arrow  { opacity: 1 !important; transform: translateX(0) !important; }
        .pragya-cat-tile:hover .pragya-tile-icon   { opacity: 0.18 !important; transform: translate(-50%,-68%) scale(1.08) !important; }
        .pragya-product-card:hover { transform: translateY(-5px) !important; }
        .pragya-product-card:hover .pragya-prod-icon { transform: scale(1.08) !important; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  /* ── NAV ── */
  const [navScrolled, setNavScrolled] = React.useState(false);
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#F5F4F0",
        color: T.ink,
        overflowX: "hidden",
        position: "relative",
        // backgroundColor: "red",

      }}
    >

      <Aurora
        colorStops={["#2C4E34", "#C8973A", "#C4421A"]}
        blend={1}
        amplitude={1}
        speed={1}
      />
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "40vh",
          display: "flex",
          flexDirection: "column",
          padding: "0px 40px 0px 40px",
          position: "relative",
          overflow: "hidden",
          marginTop: "-100px"
        }}
      >
        {/* first layer */}

        <div className=" flex justify-between z-2 pt-10 items-center">
          <SplitText
            text="Lifestyle & Decor"
            className="text-8xl font-extrabold"
            delay={160} 
            duration={1.0}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
            showCallback={false}
          />
          <div className="text-2xl font-serif pragya-fade-up pragya-fade-5">
            {/* <div className="flex flex-wrap gap-2">
              <BlurText
                text="-Personalize your"
                delay={70}
                animateBy="words"
                direction="bottom"
              />

              <BlurText
                text="Stationery"
                delay={300}
                animateBy="words"
                direction="bottom"
                className="font-bold italic"
              />

              <BlurText
                text="&"
                delay={70}
                animateBy="words"
                direction="bottom"
              />
            </div>
            <div className="flex flex-wrap gap-2 pl-10">
              <BlurText
                text="make"
                delay={70}
                animateBy="words"
                direction="bottom"
                className="font-bold italic"
              />

              <BlurText
                text="it"
                delay={70}
                animateBy="words"
                direction="bottom"
              />

              <BlurText
                text="yours!"
                delay={70}
                animateBy="words"
                direction="bottom"
              />
            </div> */}
            <p className=" mt-4">-Personalize your <span className="font-bold italic text-accent">Stationery</span> & </p>
            <p className="pl-16">make it <span className="font-bold italic text-highlight">yours!</span> </p>
          </div>
        </div>

        {/* second layer */}
        <div className="items-center flex justify-between relative z-2 pt-6 ">
          <div className="text-2xl font-serif pragya-fade-up pragya-fade-5">
            {/* <div className="flex flex-wrap gap-2">
              <BlurText
                text="-Upgrade your"
                delay={70}
                animateBy="words"
                direction="bottom"
              />

              <BlurText
                text="Lifestyle"
                delay={70}
                animateBy="words"
                direction="bottom"
                className="font-bold italic"
              />

              <BlurText
                text="&"
                delay={70}
                animateBy="words"
                direction="bottom"
              />
            </div>
            <div className="flex flex-wrap gap-2 pl-16">
              <BlurText
                text="Decorate"
                delay={70}
                animateBy="words"
                direction="bottom"
                className="font-bold italic"
              />

              <BlurText
                text="your"
                delay={70}
                animateBy="words"
                direction="bottom"
              />

              <BlurText
                text="space."
                delay={70}
                animateBy="words"
                direction="bottom"
              />
            </div> */}
            <p className=" mt-4">-Upgrade your <span className="font-bold italic text-accent">Lifestyle</span> & </p>
            <p className="pl-16"><span className="font-bold italic text-highlight">Decorate</span> your space.</p>
          </div>
          <SplitText
            text="Stationery"
            className="text-8xl font-extrabold"
            delay={160}
            duration={1.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
            showCallback={false}
          />

          {/* <div className="pragya-fade-up pragya-fade-5" style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", paddingTop: "2rem", borderTop: `0.5px solid ${T.border}` }}>
            {[["30+", "Years in print"], ["12k+", "Happy customers"], ["50+", "Product types"]].map(([val, lab]) => (
              <div key={lab}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, display: "block" }}>{val}</span>
                <span style={{ fontSize: "0.72rem", color: T.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{lab}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ── MARQUEE ── */}

      <section className="mt-10 w-[90vw] h-[90vh] bg-gray-500 rounded-3xl mx-auto overflow-hidden">
          <img src={banner} alt="Banner" className="w-full h-full object-cover" />

      </section>

      {/* ── CATEGORIES ── */}
      <div >
        <div style={{ padding: "5rem 4rem", maxWidth: 1600, minHeight: "100vh", margin: "0 auto"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingBottom: "1rem",
              marginBottom: "3rem",
              borderBottom: "1px solid black",
            }}
          >
            <div>
              <SectionLabel>Browse by category</SectionLabel>
              <h2 className="font-sans text-4xl font-extrabold ">
                Explore our {" "}
                <em className="font-serif italic text-[#C4421A]">Categories</em>.
              </h2>
            </div>
            <BtnGhost
              onClick={() => navigate("/products")}
              style={{ fontSize: "0.78rem", padding: "0.6rem 1.4rem" }}
            >
              View all →
            </BtnGhost>
          </div>
          <div
            style={{
              // backgroundColor:"blue",
              display: "grid",
              height:"100vh",
              gridTemplateColumns: "1fr 2fr",
              gridTemplateRows: "",
              gap: "0.6rem",
            }}
          >
            {CATEGORIES.map((cat) => (
              <CatTile
                key={cat.name}
                cat={cat}
                onClick={() => navigate(`/products/${cat.slug}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <div style={{ background: T.paper }}>
        <div style={{ padding: "6rem 4rem", maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <SectionLabel>Must-haves</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                }}
              >
                Bestselling
                <br />
                <em style={{ color: T.rust, fontStyle: "italic" }}>products</em>
                .
              </h2>
            </div>
            <BtnGhost
              onClick={() => navigate("/products")}
              style={{ fontSize: "0.78rem", padding: "0.6rem 1.4rem" }}
            >
              All products →
            </BtnGhost>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              marginTop: "3rem",
            }}
          >
            {PRODUCTS.map((p) => (
              <ProductCard
                key={p.name}
                product={p}
                onClick={() => navigate("/products")}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div style={{ background: T.cream }}>
        <div style={{ padding: "6rem 4rem", maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <SectionLabel>Professional services</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                }}
              >
                What we do
                <br />
                <em style={{ color: T.rust, fontStyle: "italic" }}>best</em>.
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "3rem",
            }}
          >
            {SERVICES.map((s) => (
              <ServiceItem
                key={s.name}
                service={s}
                onClick={() => navigate("/services")}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── QUALITY STRIP ── */}
      <div
        style={{
          background: T.forest,
          color: T.cream,
          padding: "5rem 4rem",
          display: "flex",
          alignItems: "center",
          gap: "6rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <SectionLabel style={{ color: T.goldLight }}>
            Our promise
          </SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: T.cream,
              marginBottom: "1.25rem",
            }}
          >
            Quality you
            <br />
            can{" "}
            <em style={{ color: T.goldLight, fontStyle: "italic" }}>feel</em>.
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(247,243,236,0.6)",
              lineHeight: 1.7,
              maxWidth: "36ch",
            }}
          >
            Three decades of refining every step of the process — from ink
            chemistry to paper selection — so your print always exceeds
            expectations.
          </p>
          <BtnPrimary
            onClick={() => navigate("/portfolio")}
            style={{ marginTop: "2rem", background: T.gold, color: T.ink }}
          >
            View Portfolio
          </BtnPrimary>
        </div>
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {QUALITY_POINTS.map((qp) => (
            <div key={qp.title} style={{ display: "flex", gap: "1rem" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  flexShrink: 0,
                  border: `1px solid rgba(200,151,58,0.4)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  color: T.goldLight,
                }}
              >
                {qp.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  {qp.title}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(247,243,236,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {qp.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{ background: T.paper }}>
        <div style={{ padding: "6rem 4rem", maxWidth: 1400, margin: "0 auto" }}>
          <SectionLabel>Word on the street</SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Customers who
            <br />
            <em style={{ color: T.rust, fontStyle: "italic" }}>trust</em> our
            print.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "3rem",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <TestiCard key={t.name} testi={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const NavLink = ({ label, onClick }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: "0.8rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: hov ? T.ink : T.muted,
        cursor: "pointer",
        transition: "color 0.2s",
      }}
    >
      {label}
    </span>
  );
};

const HeroCard = ({ card, onClick }) => {
  const bg =
    card.variant === "accent"
      ? T.forest
      : card.variant === "gold"
        ? T.gold
        : T.cream;
  const textColor = card.variant === "accent" ? T.cream : T.ink;
  const subColor =
    card.variant === "accent"
      ? "rgba(247,243,236,0.6)"
      : card.variant === "gold"
        ? "rgba(15,14,12,0.55)"
        : T.muted;
  return (
    <div
      className="pragya-hero-card"
      onClick={onClick}
      style={{
        background: bg,
        color: textColor,
        border: `0.5px solid ${T.border}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "1.2rem",
        overflow: "hidden",
        position: "relative",
        gridRow: card.tall ? "span 2" : "auto",
        cursor: "pointer",
        transition: "transform 0.3s",
      }}
    >
      <div
        className="pragya-cat-bg"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "5rem",
          opacity: 0.12,
          transition: "opacity 0.3s, transform 0.3s",
          pointerEvents: "none",
        }}
      >
        {card.icon}
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          position: "relative",
          zIndex: 1,
        }}
      >
        {card.name}
      </div>
      <div
        style={{
          fontSize: "0.7rem",
          color: subColor,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
          marginTop: 2,
        }}
      >
        {card.count}
      </div>
    </div>
  );
};

const CatTile = ({ cat, onClick }) => {
  const bg =
    cat.name === "Posters"
      ? cat.image
      : cat.name === "Spiral Journals"
        ? cat.image
        : cat.name === "Notebooks"
          ? cat.image
          : cat.name === "Retro Prints"
            ? cat.image
            : cat.name === "Wall Banners"
              ? cat.image
              : cat.variant === "rust"
                ? T.rust
                : T.paper;
  const textColor =
    cat.variant === "dark" || cat.variant === "rust" ? T.cream : T.ink;
  const subColor =
    cat.variant === "dark"
      ? "rgba(247,243,236,0.5)"
      : cat.variant === "rust"
        ? "rgba(247,243,236,0.55)"
        : T.muted;
  const arrowBg = cat.variant === "dark" ? T.gold : T.ink;
  const arrowColor = cat.variant === "dark" ? T.ink : T.cream;
  return (
    <div
      className="pragya-cat-tile"
      onClick={onClick}
      style={{
    /* Stacks a bottom linear gradient OVER your background image */
    background: `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 100%), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textColor,
        border: `0.5px solid ${T.border}`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        borderRadius:"5px",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "1.5rem",
        gridRow: cat.span ? "span 2" : "auto",
        cursor: "pointer",
    /* Note: Animating gradient transitions via inline styles is not natively smooth. */
      }}
    >

      <div
        className="pragya-tile-arrow"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: arrowBg,
          color: arrowColor,
          fontSize: "1rem",
          opacity: 0,
          transform: "translateX(-6px)",
          transition: "opacity 0.25s, transform 0.25s",
        }}
      >
        &rarr;
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.3rem",
          fontWeight: 700,
          color: "white",
          position: "relative",
          zIndex: 1,
        }}
      >
        {cat.name}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: subColor,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
          marginTop: 4,
        }}
      >
        {cat.sub}
      </div>
    </div>
  );
};

const ProductCard = ({ product, onClick }) => (
  <div
    className="pragya-product-card"
    onClick={onClick}
    style={{
      background: T.cream,
      border: `0.5px solid ${T.border}`,
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.25s",
    }}
  >
    <div
      style={{
        width: "100%",
        aspectRatio: "4/3",
        overflow: "hidden",
        background: T.paper,
        position: "relative",
      }}
    >
      <div
        className="pragya-prod-icon"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.5rem",
          transition: "transform 0.4s",
        }}
      >
        {product.icon}
      </div>
      {product.badge && (
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            background: T.ink,
            color: T.cream,
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "3px 8px",
          }}
        >
          {product.badge}
        </div>
      )}
    </div>
    <div style={{ padding: "1rem 1.2rem 1.2rem" }}>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        {product.name}
      </div>
      <div
        style={{
          fontSize: "0.78rem",
          color: T.muted,
          marginBottom: "0.75rem",
          lineHeight: 1.5,
        }}
      >
        {product.desc}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {product.price}{" "}
          <span
            style={{
              fontSize: "0.7rem",
              color: T.muted,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            / {product.unit}
          </span>
        </div>
        <AddBtn />
      </div>
    </div>
  </div>
);

const AddBtn = () => {
  const [hov, setHov] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? T.ink : "none",
        border: `1px solid ${T.border}`,
        width: 28,
        height: 28,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        transition: "all 0.2s",
        color: hov ? T.cream : T.ink,
      }}
    >
      +
    </button>
  );
};

const ServiceItem = ({ service, onClick }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "2rem 1.5rem",
        border: `0.5px solid ${T.border}`,
        position: "relative",
        overflow: "hidden",
        background: hov ? T.paper : "transparent",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.2rem",
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          fontWeight: 900,
          color: T.border,
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        {service.num}
      </div>
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {service.icon}
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.15rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        {service.name}
      </div>
      <div style={{ fontSize: "0.82rem", color: T.muted, lineHeight: 1.6 }}>
        {service.desc}
      </div>
    </div>
  );
};

const TestiCard = ({ testi }) => (
  <div
    style={{
      padding: "1.75rem",
      border: `0.5px solid ${T.border}`,
      background: T.cream,
      position: "relative",
    }}
  >
    <div
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "3rem",
        color: T.gold,
        lineHeight: 1,
        marginBottom: "0.5rem",
      }}
    >
      "
    </div>
    <div
      style={{
        fontSize: "0.8rem",
        color: T.gold,
        letterSpacing: 2,
        marginBottom: "0.75rem",
      }}
    >
      ★★★★★
    </div>
    <p
      style={{
        fontSize: "0.88rem",
        lineHeight: 1.7,
        color: T.ink,
        marginBottom: "1.25rem",
        fontStyle: "italic",
      }}
    >
      {testi.text}
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: T.paper,
          border: `0.5px solid ${T.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          fontWeight: 500,
          color: T.muted,
        }}
      >
        {testi.initials}
      </div>
      <div>
        <div style={{ fontSize: "0.82rem", fontWeight: 500 }}>{testi.name}</div>
        <div style={{ fontSize: "0.72rem", color: T.muted }}>{testi.role}</div>
      </div>
    </div>
  </div>
);

export default Home;
