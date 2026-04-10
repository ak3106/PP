import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Listing page = exactly 3 segments: /products/{category}/{collection}
    const isListingPage = /^\/products\/(posters|notebooks|journals|banners)\/[^/]+$/.test(pathname);
    console.log('📍 pathname:', pathname, '| isListing:', isListingPage);

    if (!isListingPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}