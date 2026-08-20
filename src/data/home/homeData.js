// src/data/homeData.js
//
// Plain data for the Home page. No components or JSX here on purpose —
// components live in src/components/home, this file only describes content.
// `icon` values are string keys resolved against ICON_MAP (see
// src/components/home/icons.jsx).

export const QUALITY_POINTS = [
  {
    icon: "precision",
    title: "Colour precision",
    desc: "Pantone-matched inks, CMYK calibrated presses.",
  },
  {
    icon: "leaf",
    title: "Eco materials",
    desc: "FSC-certified papers and soy-based inks.",
  },
  {
    icon: "bolt",
    title: "Fast turnaround",
    desc: "24–48 hr digital, 3–5 day offset runs.",
  },
  {
    icon: "shield",
    title: "Print guarantee",
    desc: "Free reprint if we fall short on quality.",
  },
];

export const TESTIMONIALS = [
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

// Cards that link straight into the custom design tools. `route` should
// match whatever paths your router uses for each creation flow — update
// these 4 strings if your app mounts them elsewhere (e.g. /custom-poster).
export const CUSTOM_CATEGORIES = [
  {
    key: "poster",
    icon: "poster",
    name: "Custom Poster",
    desc: "Upload your art, position it on an A4 canvas, and print.",
    route: "/custom/poster",
  },
  {
    key: "journal",
    icon: "journal",
    name: "Custom Journal",
    desc: "Design a cover and personalise every page inside.",
    route: "/custom/journal",
  },
  {
    key: "banner",
    icon: "banner",
    name: "Custom Banner",
    desc: "Large-format prints for storefronts, events, and signage.",
    route: "/custom/banner",
  },
  {
    key: "notebook",
    icon: "notebook",
    name: "Custom Notebook",
    desc: "Cloth or matte covers, your artwork, bound to order.",
    route: "/custom/notebook",
  },
];