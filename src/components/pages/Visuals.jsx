import { VISUALS } from '../../data/visuals';

export default function Visuals() {
  return (
    <section id="visuals" className="site-page">
<div className="page-head visuals-intro"><div className="mono">10 — Visual archive</div><h1>Moments in<br />motion.</h1><p>A moving collection of the machines, people, workshops and competition moments behind UGV-DTU.</p></div>
 <div className="vg" id="vg"><figure className="vg-main"><div className="vg-frame" tabIndex="0" role="button" aria-label="Open photo full screen"><img alt="" /></div><figcaption><strong className="vg-cap"></strong><span className="mono vg-count"></span></figcaption><button type="button" className="vg-nav prev" aria-label="Previous photo">‹</button><button type="button" className="vg-nav next" aria-label="Next photo">›</button><div className="vg-bar"><i></i></div></figure><div className="vg-strip">{VISUALS.map((v, i) => (
        <button type="button" className="vg-th" key={v.src} data-full={v.src} data-alt={v.cap} data-cap={v.cap} aria-label={`Show photo ${i + 1}: ${v.cap}`}><img loading="lazy" src={v.src} alt="" /></button>
      ))}</div></div>
    </section>
  );
}
