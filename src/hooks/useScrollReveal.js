import { useEffect } from 'react';

const TARGETS = '.page-head,.about-copy,.ach-stat,.ach-wrap,.rs-card,.sponsor-tile,.contact-panel,.blog-intro,.bl-tools,.wheel-stage,.vs,.sec>.mono';

// Fades sections up as they scroll into view. Elements are tagged by script, so with JS off
// (or reduced motion) everything stays visible.
export default function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;
    const els = [...document.querySelectorAll(TARGETS)];
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => {
      el.setAttribute('data-rv', '');
      el.style.setProperty('--rvd', `${([...el.parentElement.children].indexOf(el) % 4) * 80}ms`);
      io.observe(el);
    });
    document.documentElement.classList.add('rv-on');
    return () => { io.disconnect(); document.documentElement.classList.remove('rv-on'); };
  }, []);
}
