import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = String(import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();

function asegurarGtag() {
  if (!GA_ID || typeof window === 'undefined') return false;
  if (window.gtag) return true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  return true;
}

/**
 * Google Analytics 4 (SPA): carga gtag una vez y registra cada cambio de ruta.
 * ID: VITE_GA_MEASUREMENT_ID en .env (ej. G-E0JZ8EXZ6V)
 */
function GoogleAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    asegurarGtag();
  }, []);

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== 'function') return;

    const pagePath = `${pathname}${search}`;
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname, search]);

  return null;
}

export default GoogleAnalytics;
