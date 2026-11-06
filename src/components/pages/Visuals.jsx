import { useCallback, useEffect, useRef, useState } from 'react';
import { VISUALS } from '../../data/visuals';
import './Visuals.css';

const pad = (n) => String(n).padStart(2, '0');

function Lightbox({ index, onClose, onStep }) {
  const startX = useRef(null);
  const v = VISUALS[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onStep(1);
      else if (e.key === 'ArrowLeft') onStep(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onStep]);

  return (
    <div
      className="vlb"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onPointerDown={(e) => { startX.current = e.clientX; }}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
      }}
    >
      <img key={v.src} src={v.src} alt={v.cap} draggable="false" />
      <div className="vlb-bar mono"><span>{v.cap}</span><span>{pad(index + 1)} / {pad(VISUALS.length)}</span></div>
      <button type="button" className="vlb-x" aria-label="Close" onClick={onClose}>×</button>
      <button type="button" className="vlb-nav prev" aria-label="Previous photo" onClick={() => onStep(-1)}>‹</button>
      <button type="button" className="vlb-nav next" aria-label="Next photo" onClick={() => onStep(1)}>›</button>
    </div>
  );
}

export default function Visuals() {
  const [open, setOpen] = useState(-1);
  const gridRef = useRef(null);
  const trigger = useRef(null);

  // staggered reveal as tiles enter the viewport
  useEffect(() => {
    const tiles = [...gridRef.current.querySelectorAll('.vtile')];
    if (!('IntersectionObserver' in window)) { tiles.forEach((t) => t.classList.add('in')); return undefined; }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    tiles.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const step = useCallback((d) => setOpen((i) => (i + d + VISUALS.length) % VISUALS.length), []);
  const close = useCallback(() => { setOpen(-1); trigger.current?.focus(); }, []);

  return (
    <section id="visuals" className="site-page">
      <div className="page-head visuals-intro">
        <div className="mono">10 — Visual archive</div>
        <h1>Moments in<br />motion.</h1>
        <p>A collection of the machines, people, workshops and competition moments behind UGV-DTU.</p>
      </div>
      <div className="vmeta mono"><span>{pad(VISUALS.length)} photographs</span><span>Tap any photo to enlarge</span></div>
      <div className="vmason" ref={gridRef}>
        {VISUALS.map((v, i) => (
          <button
            type="button"
            className="vtile"
            key={v.src}
            style={{ '--d': `${(i % 4) * 70}ms` }}
            aria-label={`Open photo ${i + 1} of ${VISUALS.length}`}
            onClick={(e) => { trigger.current = e.currentTarget; setOpen(i); }}
          >
            <img src={v.src} width={v.w} height={v.h} loading="lazy" decoding="async" alt={v.cap} />
            <span className="vtile-n mono">{pad(i + 1)}</span>
          </button>
        ))}
      </div>
      {open >= 0 && <Lightbox index={open} onClose={close} onStep={step} />}
    </section>
  );
}
