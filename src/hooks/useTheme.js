import { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';

const KEY = 'ugv-theme';
const root = () => document.documentElement;
const read = () => root().getAttribute('data-theme') === 'light';
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let themeTimer;

function animateFallback() {
  const html = root();
  html.classList.add('theme-anim');
  window.clearTimeout(themeTimer);
  themeTimer = window.setTimeout(() => html.classList.remove('theme-anim'), 240);
}

function apply(light) {
  root().setAttribute('data-theme', light ? 'light' : 'dark');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#e9edf3' : '#06070a');
  if (window.setWorldTheme) window.setWorldTheme(light);
}

export default function useTheme() {
  const [light, setLight] = useState(read);

  const toggle = useCallback((event) => {
    const next = !read();
    const commit = () => {
      try { localStorage.setItem(KEY, next ? 'light' : 'dark'); } catch (err) { /* storage blocked */ }
      apply(next);
      setLight(next);
    };

    if (document.startViewTransition && !reduced()) {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = event.detail ? event.clientX : bounds.left + bounds.width / 2;
      const y = event.detail ? event.clientY : bounds.top + bounds.height / 2;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      const transition = document.startViewTransition(() => flushSync(commit));
      transition.ready.then(() => {
        root().animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 520,
            easing: 'cubic-bezier(.2,.7,.2,1)',
            fill: 'both',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      }, animateFallback);
      return;
    }

    if (!reduced()) {
      animateFallback();
    }
    commit();
  }, []);

  return [light, toggle];
}
