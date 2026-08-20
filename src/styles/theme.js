// src/styles/theme.js
//
// Central design tokens for the storefront. Only the 4 brand colors
// below are "real" colors — everything else (surface, muted, border)
// is a tint or shade derived from them, so the palette stays disciplined
// instead of growing new hues section by section.
//
// Headings use DM Sans, body copy uses Playfair Display (see the
// `.font-heading` / `.font-body` utility classes injected in Home.jsx).

export const COLORS = {
  cream: "#F5F4F0", // base page background
  primary: "#2C4E34", // deep forest green — ink, dark surfaces, primary CTAs
  accent: "#C8973A", // warm gold — eyebrows, ratings, secondary accents
  highlight: "#C4421A", // rust/terracotta — emphasis, links, badges
};

export const T = {
  cream: COLORS.cream,
  ink: COLORS.primary,
  primary: COLORS.primary,
  accent: COLORS.accent,
  highlight: COLORS.highlight,
  accentSoft: "#E3BE72", // accent lightened, for use on dark backgrounds
  surface: "#FFFFFF", // card surfaces sitting on the cream background
  surfaceAlt: "#EDEAE1", // secondary/alternate section background
  muted: "rgba(44,78,52,0.58)", // secondary text, tinted from primary
  border: "rgba(44,78,52,0.14)", // hairline borders
};

export const FONT_HEADING = "'DM Sans', sans-serif";
export const FONT_BODY = "'Playfair Display', serif";

// Handy for components (like Aurora) that want an array of hex stops
// rather than a token object.
export const AURORA_STOPS = [COLORS.primary, COLORS.accent, COLORS.highlight];