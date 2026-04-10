import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

if (!window.__scrollPositions) {
  window.__scrollPositions = {};
}

export function useScrollRestoration() {
  const location = useLocation();
  const key = location.pathname + location.search;

  useEffect(() => {
    const handleScroll = () => {
      window.__scrollPositions[key] = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [key]);
}

export function restoreScroll(key) {
  const saved = window.__scrollPositions[key];
  if (saved !== undefined) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: saved, behavior: 'instant' });
      });
    });
  }
}