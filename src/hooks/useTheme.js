import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const KEY = 'ugv-theme';
const root = () => document.documentElement;
const read = () => root().getAttribute('data-theme') === 'light';
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function apply(light) {
  root().setAttribute('data-theme', light ? 'light' : 'dark');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#e9edf3' : '#06070a');
  if (window.setWorldTheme) window.setWorldTheme(light);
}

export default function useTheme() {
  const [light, setLight] = useState(read);

  useEffect(() => { apply(light); }, [light]);

  const toggle = useCallback((e) => {
    const next = !read();
    const commit = () => {
      try { localStorage.setItem(KEY, next ? 'light' : 'dark'); } catch (err) { /* storage blocked */ }
      apply(next);
      setLight(next);
    };

    if (document.startViewTransition && !reduced()) {
      // circular reveal that grows from the toggle button
      const x = e?.clientX ?? window.innerWidth - 40;
      const y = e?.clientY ?? 30;
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      const t = document.startViewTransition(() => flushSync(commit));
      t.ready.then(() => root().animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.65,0,.2,1)', pseudoElement: '::view-transition-new(root)' }
      )).catch(() => {});
      return;
    }
    if (!reduced()) {
      root().classList.add('theme-anim');
      setTimeout(() => root().classList.remove('theme-anim'), 600);
    }
    commit();
  }, []);

  return [light, toggle];
}
