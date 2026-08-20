import React from "react";

// Lightweight line icons matched to the print/stationery subject matter.
// Kept dependency-free (no icon library) — each is a plain stroked SVG
// that inherits color via `currentColor`.

const base = "h-5 w-5";

export const IconPoster = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={base} {...props}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);

export const IconJournal = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={base} {...props}>
    <path d="M6 4h11a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2V4Z" />
    <path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2" />
    <path d="M10 8h6M10 12h6" />
  </svg>
);

export const IconBanner = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} {...props}>
    <path d="M4 4v16l4-3 4 3 4-3 4 3V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z" />
    <path d="M8 7h8" />
  </svg>
);

export const IconNotebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={base} {...props}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M9 3v18" />
    <path d="M13 8h3M13 12h3" />
  </svg>
);

export const IconPrecision = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={base} {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

export const IconLeaf = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} {...props}>
    <path d="M5 20c8 0 14-6 14-14 0-1 0-2-.2-3C10 3 5 8 5 15c0 1.7.4 3.4 1 5Z" />
    <path d="M5 20c2-3 5-6 9-8" />
  </svg>
);

export const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} {...props}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const IconShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} {...props}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// Central lookup so data files can reference icons by string key
// instead of importing components directly.
export const ICON_MAP = {
  poster: IconPoster,
  journal: IconJournal,
  banner: IconBanner,
  notebook: IconNotebook,
  precision: IconPrecision,
  leaf: IconLeaf,
  bolt: IconBolt,
  shield: IconShield,
};