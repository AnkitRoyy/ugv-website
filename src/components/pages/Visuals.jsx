import { useCallback, useEffect, useRef, useState } from 'react';
import { VISUALS } from '../../data/visuals';
import './Visuals.css';

const N = VISUALS.length;
const STEP_MS = 5600;
const pad = (n) => String(n).padStart(2, '0');

// Compact slideshow: one stage + a single scrolling thumbnail row. Autoplays only while it is
// on screen and not hovered, and respects reduced motion.
export default function Visuals() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [seen, setSeen] = useState(() => new Set([0, 1]));
  const root = useRef(null);
  const strip = useRef(null);
  const startX = useRef(null);
  const reduce = useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const go = useCallback((n) => setI(((n % N) + N) % N), []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.25 });
    io.observe(root.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    setSeen((s) => new Set([...s, i, (i + 1) % N, (i + N - 1) % N]));
    const el = strip.current?.children[i];
    if (el) strip.current.scrollTo({ left: el.offsetLeft - (strip.current.clientWidth - el.clientWidth) / 2, behavior: 'smooth' });
  }, [i]);

  const playing = !paused && !hover && onScreen && !reduce.current;
  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(i + 1);
    else if (e.key === 'ArrowLeft') go(i - 1);
    else if (e.key === ' ') { e.preventDefault(); setPaused((p) => !p); }
  };

  return (
    <section id="visuals" className="site-page">
      <div className="page-head visuals-intro">
        <div className="mono">10 — Visual archive</div>
        <h1>Moments in<br />motion.</h1>
        <p>A collection of the machines, people, workshops and competition moments behind UGV-DTU.</p>
      </div>
      <div
        className="vs"
        ref={root}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Photo slideshow"
        onKeyDown={onKey}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="vs-stage"
          onPointerDown={(e) => { startX.current = e.clientX; }}
          onPointerUp={(e) => {
            if (startX.current === null) return;
            const dx = e.clientX - startX.current;
            startX.current = null;
            if (Math.abs(dx) > 45) go(i + (dx < 0 ? 1 : -1));
          }}
        >
          {VISUALS.map((v, k) => (
            <figure className={`vs-slide${k === i ? ' on' : ''}`} key={v.src} aria-hidden={k !== i}>
              {seen.has(k) && (
                <>
                  <img className="vs-bg" src={v.src} alt="" aria-hidden="true" decoding="async" />
                  <img className="vs-fg" src={v.src} alt={v.cap} decoding="async" draggable="false" />
                </>
              )}
            </figure>
          ))}
          <div className="vs-shade" />
          <div className="vs-ui mono">
            <span>{VISUALS[i].cap}</span>
            <span>{pad(i + 1)} / {pad(N)}</span>
          </div>
          <button type="button" className="vs-nav prev" aria-label="Previous photo" onClick={() => go(i - 1)}>‹</button>
          <button type="button" className="vs-nav next" aria-label="Next photo" onClick={() => go(i + 1)}>›</button>
          <button type="button" className="vs-play mono" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused((p) => !p)}>{paused ? '▶' : '❚❚'}</button>
          <div className="vs-bar" aria-hidden="true">
            <i key={i} style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: playing ? 'running' : 'paused', animationName: reduce.current ? 'none' : undefined }} onAnimationEnd={() => go(i + 1)} />
          </div>
        </div>
        <div className="vs-strip" ref={strip} role="tablist" aria-label="Choose a photo">
          {VISUALS.map((v, k) => (
            <button type="button" role="tab" aria-selected={k === i} aria-label={`Photo ${k + 1}`} className={`vs-th${k === i ? ' on' : ''}`} key={v.src} onClick={() => go(k)}>
              <img src={v.src} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
