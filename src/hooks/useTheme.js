import { useCallback, useEffect, useState } from 'react';

const KEY = 'ugv-theme';
const read = () => document.documentElement.getAttribute('data-theme') === 'light';

export default function useTheme() {
  const [light, setLight] = useState(read);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#e9edf3' : '#06070a');
    if (window.setWorldTheme) window.setWorldTheme(light);
  }, [light]);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    if (!window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
      root.classList.add('theme-anim');
      setTimeout(() => root.classList.remove('theme-anim'), 600);
    }
    setLight((v) => {
      try { localStorage.setItem(KEY, v ? 'dark' : 'light'); } catch (e) {}
      return !v;
    });
  }, []);

  return [light, toggle];
}
